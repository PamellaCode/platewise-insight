import { Message, CarInfo } from './types';

export class ChatService {
  static simulateResponse(input: string): Promise<{text: string, hasCarInfo?: boolean, carInfo?: CarInfo}> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (input.toLowerCase().includes('bonjour') || input.toLowerCase().includes('salut')) {
          resolve({
            text: "Bonjour ! Je suis votre assistant ArgusAI. Comment puis-je vous aider à estimer la valeur de votre véhicule ?",
          });
        } 
        else if (input.toLowerCase().includes('estimer') || input.toLowerCase().includes('valeur') || input.toLowerCase().includes('voiture')) {
          resolve({
            text: "Bien sûr ! Indique-moi la plaque d'immatriculation de ton véhicule.",
          });
        }
        else if (input.match(/[A-Z]{2}-\d{3}-[A-Z]{2}/) || input.toLowerCase() === 'ab-123-cd') {
          resolve({
            text: "Merci ! Voici les informations sur votre véhicule. Il s'agit d'une Citroën C3 de 2015, modèle 1.4 HDi 70 FAP. C'est une berline 5 portes dotée d'un moteur diesel. Sa valeur estimée est de 8500€ sur le marché actuel. Souhaitez-vous des informations supplémentaires sur ce véhicule ?",
            hasCarInfo: true,
            carInfo: {
              model: "Citroën C3",
              year: 2015,
              mileage: 92000,
              price: 8500
            }
          });
        }
        else {
          resolve({
            text: "Pour estimer la valeur de votre véhicule, j'ai besoin de sa plaque d'immatriculation. Pouvez-vous me la communiquer au format XX-123-XX ?",
          });
        }
      }, 1000);
    });
  }

  static async processMessageWithN8n(
    input: string, 
    userId: string,
    sessionId: string
  ): Promise<{text: string, hasCarInfo?: boolean, carInfo?: CarInfo}> {
    console.log("Mode test activé : utilisation de la réponse simulée au lieu du webhook");
    return this.simulateResponse(input);
  }

  static checkIfHasVehicleInfo(text: string): boolean {
    return text.includes("caractéristiques suivantes") || 
           (text.includes("Marque") && text.includes("Modèle")) ||
           text.includes("prix estimé") ||
           text.includes("cote") ||
           text.includes("valeur") && text.includes("véhicule");
  }

  static simulateTyping(text: string, callback: (text: string) => void): void {
    let i = 0;
    const typingSpeed = 30; // ms per character
    
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        i++;
      } else {
        clearInterval(typingInterval);
        callback(text);
      }
    }, typingSpeed);
  }

  static generateSessionId(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  static getSessionId(): string {
    let sessionId = localStorage.getItem('argusai_session_id');
    if (!sessionId) {
      sessionId = ChatService.generateSessionId();
      localStorage.setItem('argusai_session_id', sessionId);
    }
    return sessionId;
  }
}

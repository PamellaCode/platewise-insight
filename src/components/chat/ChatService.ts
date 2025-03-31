
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
            text: "Merci ! Je récupère les informations… 🚗🔍",
            hasCarInfo: true,
            carInfo: {
              model: "Peugeot 208",
              year: 2019,
              mileage: 75000,
              price: 12500
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
}

import { Message, CarInfo } from './types';
import { v4 as uuidv4 } from 'uuid';

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

  static async processMessageWithN8n(
    input: string, 
    userId: string,
    sessionId: string
  ): Promise<{text: string, hasCarInfo?: boolean, carInfo?: CarInfo}> {
    try {
      // Updated webhook URL to the new endpoint
      const response = await fetch('https://pamella.app.n8n.cloud/webhook-test/ArgusAI2.0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_message: input,
          user_id: userId,
          session_id: sessionId,
          timestamp: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      // Check for different response formats from n8n
      // Format 1: {output: "response text"}
      if (data && data.output) {
        return {
          text: data.output,
          hasCarInfo: false
        };
      } 
      // Format 2: [{output: "response text"}]
      else if (Array.isArray(data) && data.length > 0 && data[0].output) {
        return {
          text: data[0].output,
          hasCarInfo: false
        };
      }
      // Format 3: {response_message: "text"}
      else if (data && data.response_message) {
        return {
          text: data.response_message,
          hasCarInfo: data.hasCarInfo || false,
          carInfo: data.carInfo || undefined
        };
      } else {
        throw new Error('Invalid response format from n8n');
      }
    } catch (error) {
      console.error('Error processing message with n8n:', error);
      throw error;
    }
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
    return uuidv4();
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


import { Message, CarInfo } from './types';

export class ChatService {
  static simulateResponse(input: string): Promise<{text: string, hasCarInfo?: boolean, carInfo?: CarInfo, imageUrl?: string}> {
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
        else if (input.toLowerCase().includes('générer le visuel d\'une annonce')) {
          resolve({
            text: "Voici une représentation visuelle d'une annonce LeBonCoin pour votre véhicule :",
            imageUrl: "https://app.auto-ways.net/storage/images/car-models/8de690a6e19d6f9802a77f7eed399bd3.jpg"
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
  ): Promise<{text: string, hasCarInfo?: boolean, carInfo?: CarInfo, imageUrl?: string}> {
    try {
      // Special processing for LeBonCoin ad visual generation
      if (input.toLowerCase().includes('générer le visuel d\'une annonce')) {
        const response = await fetch('https://pamella.app.n8n.cloud/webhook-test/ArgusAI2.0', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_message: `Génère une image représentant une annonce LeBonCoin pour vendre un véhicule avec les caractéristiques suivantes: ${sessionId}`,
            user_id: userId,
            session_id: sessionId,
            timestamp: new Date().toISOString(),
            action: "generate_leboncoin_image"
          })
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log("N8n image generation response:", data);
        
        // Handle image response
        if (data && data.image_url) {
          return {
            text: "Voici une représentation visuelle d'une annonce LeBonCoin pour votre véhicule :",
            imageUrl: data.image_url
          };
        } else if (data && data.output && data.output.includes("http")) {
          // Try to extract URL from output if it exists
          const urlMatch = data.output.match(/(https?:\/\/[^\s]+)/g);
          if (urlMatch && urlMatch.length > 0) {
            return {
              text: "Voici une représentation visuelle d'une annonce LeBonCoin pour votre véhicule :",
              imageUrl: urlMatch[0]
            };
          }
        } else if (data && Array.isArray(data) && data[0]?.output) {
          const urlMatch = data[0].output.match(/(https?:\/\/[^\s]+)/g);
          if (urlMatch && urlMatch.length > 0) {
            return {
              text: "Voici une représentation visuelle d'une annonce LeBonCoin pour votre véhicule :",
              imageUrl: urlMatch[0]
            };
          }
        }

        // Fallback response if no image URL found
        return {
          text: "J'ai essayé de générer une annonce visuelle, mais je n'ai pas pu obtenir d'image. Voici néanmoins une description de ce à quoi pourrait ressembler votre annonce LeBonCoin.",
        };
      }

      // Standard n8n processing for other queries
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
      console.log("N8n response:", data);
      
      if (data && data.output) {
        const text = data.output;
        const hasVehicleInfo = this.checkIfHasVehicleInfo(text);
        const imageUrl = this.extractImageUrl(text);
        
        return {
          text: imageUrl ? this.removeImageUrlFromText(text) : text,
          hasCarInfo: hasVehicleInfo,
          imageUrl: imageUrl
        };
      } 
      else if (Array.isArray(data) && data.length > 0 && data[0].output) {
        const text = data[0].output;
        const hasVehicleInfo = this.checkIfHasVehicleInfo(text);
        const imageUrl = this.extractImageUrl(text);
        
        return {
          text: imageUrl ? this.removeImageUrlFromText(text) : text,
          hasCarInfo: hasVehicleInfo,
          imageUrl: imageUrl
        };
      }
      else if (data && data.response_message) {
        const hasVehicleInfo = this.checkIfHasVehicleInfo(data.response_message);
        const imageUrl = this.extractImageUrl(data.response_message);
        
        return {
          text: imageUrl ? this.removeImageUrlFromText(data.response_message) : data.response_message,
          hasCarInfo: data.hasCarInfo || hasVehicleInfo,
          carInfo: data.carInfo || undefined,
          imageUrl: imageUrl || data.image_url
        };
      } else {
        throw new Error('Invalid response format from n8n');
      }
    } catch (error) {
      console.error('Error processing message with n8n:', error);
      throw error;
    }
  }
  
  static extractImageUrl(text: string): string | undefined {
    // Check for markdown image syntax
    const markdownMatch = text.match(/!\[.*?\]\((https?:\/\/[^\s)]+)\)/);
    if (markdownMatch && markdownMatch[1]) {
      return markdownMatch[1];
    }
    
    // Check for direct URLs
    const urlMatch = text.match(/(https?:\/\/[^\s]+\.(jpg|jpeg|png|gif|webp))/i);
    if (urlMatch && urlMatch[1]) {
      return urlMatch[1];
    }
    
    return undefined;
  }
  
  static removeImageUrlFromText(text: string): string {
    // Remove markdown image syntax
    let cleanedText = text.replace(/!\[.*?\]\(https?:\/\/[^\s)]+\)/g, '');
    
    // Remove direct image URLs
    cleanedText = cleanedText.replace(/(https?:\/\/[^\s]+\.(jpg|jpeg|png|gif|webp))/gi, '');
    
    // Clean up any resulting double spaces or empty lines
    cleanedText = cleanedText.replace(/\n\s*\n/g, '\n\n').trim();
    
    return cleanedText;
  }

  static checkIfHasVehicleInfo(text: string): boolean {
    // Vérifier si le texte contient des caractéristiques de véhicule
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

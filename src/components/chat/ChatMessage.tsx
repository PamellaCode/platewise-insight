
import React from 'react';
import { User, Car } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { Message } from './types';
import ChatCarInfo from './ChatCarInfo';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Function to format text with vehicle characteristics
  const formatVehicleInfo = (text: string) => {
    if (text.includes("caractéristiques suivantes") || 
        (text.includes("Marque") && text.includes("Modèle"))) {
      
      // Traitement pour extraire les caractéristiques
      let introText = "";
      let characteristics: {label: string, value: string}[] = [];
      
      // Si le texte contient des lignes avec des tirets (format markdown)
      if (text.includes("- **")) {
        // Format: "Texte intro - **Label** : Valeur - **Label2** : Valeur2"
        const parts = text.split("- **");
        if (parts.length > 0) {
          introText = parts[0].trim();
          
          // Extraire les paires label:valeur
          for (let i = 1; i < parts.length; i++) {
            const charPart = parts[i];
            if (charPart.includes("** : ")) {
              const [rawLabel, rawValue] = charPart.split("** : ");
              const label = rawLabel.trim();
              // Nettoyer la valeur (peut contenir du texte markdown)
              let value = rawValue.split(/\n|(\*\*)/).filter(Boolean)[0].trim();
              characteristics.push({ label, value });
            }
          }
        }
      } 
      // Format de texte alternatif sans markdown
      else {
        const lines = text.split('-').filter(line => line.trim() !== '');
        if (lines.length > 1) {
          introText = lines[0].trim();
          lines.slice(1).forEach(line => {
            if (line.includes(':')) {
              const [label, value] = line.split(':').map(s => s.trim());
              characteristics.push({ label, value });
            }
          });
        } else {
          return text;
        }
      }
      
      // Si nous avons effectivement extrait des caractéristiques, renvoyer le format amélioré
      if (characteristics.length > 0) {
        return (
          <div className="vehicle-info">
            <p className="mb-2">{introText}</p>
            <div className="mt-3 pt-3 border-t border-gray-200 space-y-2 animate-fade-in">
              {characteristics.map((item, index) => (
                <div key={index} className="flex items-center gap-1.5 text-sm">
                  <span className="font-bold">{item.label} :</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        );
      }
    }
    return text;
  };

  return (
    <div
      className={cn(
        "flex",
        message.sender === "user" ? "justify-end" : "justify-start"
      )}
    >
      <div className="flex items-end gap-2 max-w-[80%]">
        {message.sender === "bot" && (
          <Avatar className="h-8 w-8 border-2 border-argus-teal-500">
            <AvatarFallback className="bg-argus-blue-500 text-white">
              <Car className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
        )}
        
        <div
          className={cn(
            "px-4 py-3 rounded-2xl shadow-sm text-sm",
            message.sender === "user"
              ? "bg-gradient-to-r from-argus-blue-500 to-argus-blue-600 text-white rounded-br-none"
              : "bg-white border border-gray-100 text-gray-800 rounded-bl-none"
          )}
        >
          {typeof message.text === 'string' ? formatVehicleInfo(message.text) : message.text}
          
          {/* Image Display */}
          {message.imageUrl && (
            <div className="mt-3">
              <img 
                src={message.imageUrl} 
                alt="Image générée" 
                className="w-full rounded-lg border border-gray-200 shadow-sm animate-fade-in" 
                loading="lazy"
              />
            </div>
          )}
          
          {/* Car Information Display */}
          {message.hasCarInfo && message.carInfo && (
            <ChatCarInfo carInfo={message.carInfo} />
          )}
          
          <span className="block mt-1 text-xs opacity-70">
            {formatTime(message.timestamp)}
          </span>
        </div>
        
        {message.sender === "user" && (
          <Avatar className="h-8 w-8 border-2 border-argus-blue-400">
            <AvatarFallback className="bg-argus-blue-400 text-white">
              <User className="h-5 w-5" /></AvatarFallback>
          </Avatar>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;

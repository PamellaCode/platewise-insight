
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
    if (text.includes("caractéristiques suivantes") || text.includes("Marque") || text.includes("Modèle")) {
      const lines = text.split('-').filter(line => line.trim() !== '');
      
      if (lines.length <= 1) return text;
      
      const introText = lines[0];
      const characteristics = lines.slice(1);
      
      return (
        <div className="vehicle-info">
          <p className="mb-2">{introText}</p>
          <div className="mt-3 pt-3 border-t border-gray-200 space-y-2 animate-fade-in">
            {characteristics.map((item, index) => {
              const [label, value] = item.split(':').map(s => s.trim());
              return (
                <div key={index} className="flex items-center gap-1.5 text-sm">
                  <span className="font-bold">{label} :</span>
                  <span>{value}</span>
                </div>
              );
            })}
          </div>
        </div>
      );
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
          {typeof message.text === 'string' && message.text.includes("caractéristiques suivantes") 
            ? formatVehicleInfo(message.text)
            : message.text}
          
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


import React from 'react';
import { Message } from '../types';
import { formatMessageText } from '../formatters/TextFormatter';
import { Separator } from "@/components/ui/separator";
import ChatCarInfo from '../ChatCarInfo';
import { extractVehicleInfo } from '../extractors/VehicleInfoExtractor';

interface MessageContentProps {
  message: Message;
}

/**
 * Composant pour le rendu du contenu des messages avec formatage enrichi
 */
const MessageContent: React.FC<MessageContentProps> = ({ message }) => {
  return (
    <div className="message-container">
      <div className="message-text-content">
        {formatMessageText(message.text)}
      </div>
      
      {/* Affichage des informations de véhicule détectées */}
      {message.sender === 'bot' && extractVehicleInfo(message.text)}
      
      {/* Affichage des informations de véhicule (implémentation précédente) */}
      {message.hasCarInfo && message.carInfo && (
        <>
          <Separator className="my-4" />
          <div className="vehicle-info-container">
            <ChatCarInfo carInfo={message.carInfo} />
          </div>
        </>
      )}
    </div>
  );
};

export default MessageContent;

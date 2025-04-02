
import React from 'react';
import { formatMessageText } from '../utils/message-formatter';
import { Message } from '../types';
import { Separator } from "@/components/ui/separator";
import ChatCarInfo from '../ChatCarInfo';
import VehicleInfoCard from './VehicleInfoCard';

interface MessageContentProps {
  message: Message;
}

const MessageContent: React.FC<MessageContentProps> = ({ message }) => {
  // Function to extract and format vehicle information from the text response
  const extractVehicleInfo = (text: string) => {
    // Check if the text contains vehicle information pattern
    if (!text.includes('registration') && !text.includes('plaque') && !text.includes('véhicule')) {
      return null;
    }

    try {
      // Basic info extraction
      const makeModelRegex = /(Citroën|Peugeot|Renault|Toyota|Ford|Volkswagen|BMW|Mercedes|Audi|Fiat)\s([A-Za-z0-9]+)/i;
      const yearRegex = /(\d{4})/;
      const powerRegex = /(\d+)\s*(?:horsepower|hp|ch)/i;
      const fuelTypeRegex = /(diesel|essence|électrique|hybrid)/i;
      const transmissionRegex = /(manual|automatic|manuel|automatique)/i;
      const mileageRegex = /(\d[\d\s,.]*)\s*(?:km|kilometers)/i;
      const co2Regex = /(\d+)\s*g\/km/i;
      const dimensionsRegex = /(\d+)\s*mm.*?(\d+)\s*mm.*?(\d+)\s*mm/i;
      
      // Extract values
      const makeModel = makeModelRegex.exec(text);
      const year = yearRegex.exec(text);
      const power = powerRegex.exec(text);
      const fuelType = fuelTypeRegex.exec(text);
      const transmission = transmissionRegex.exec(text);
      const mileage = mileageRegex.exec(text);
      const co2 = co2Regex.exec(text);
      const dimensions = dimensionsRegex.exec(text);
      
      // If we have enough data, create a structured vehicle info panel
      if (makeModel || year) {
        // Find image URL if available
        const imageUrlRegex = /\(https:\/\/[^\s)]+\.(jpg|jpeg|png|gif)\)/i;
        const imageMatch = imageUrlRegex.exec(text);
        const imageUrl = imageMatch ? imageMatch[0].substring(1, imageMatch[0].length - 1) : null;
        
        return (
          <VehicleInfoCard 
            makeModel={makeModel ? makeModel[0] : undefined}
            year={year ? year[0] : undefined}
            power={power ? power[1] : undefined}
            fuelType={fuelType ? fuelType[0] : undefined}
            mileage={mileage ? mileage[1] : undefined}
            transmission={transmission ? transmission[0] : undefined}
            co2={co2 ? co2[1] : undefined}
            dimensions={dimensions ? [dimensions[1], dimensions[2], dimensions[3]] : undefined}
            imageUrl={imageUrl}
          />
        );
      }
    } catch (error) {
      console.error("Error extracting vehicle info:", error);
    }
    
    return null;
  };

  return (
    <>
      {formatMessageText(message.text)}
      
      {/* Enhanced Vehicle Info Display */}
      {message.sender === 'bot' && extractVehicleInfo(message.text)}
      
      {/* Car Information Display (from previous implementation) */}
      {message.hasCarInfo && message.carInfo && (
        <>
          <Separator className="my-3" />
          <ChatCarInfo carInfo={message.carInfo} />
        </>
      )}
    </>
  );
};

export default MessageContent;

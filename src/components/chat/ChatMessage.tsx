
import React from 'react';
import { User, Car, Calendar, Gauge, Fuel, Clock, Banknote, ArrowRight } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { Message } from './types';
import ChatCarInfo from './ChatCarInfo';
import { Badge } from "@/components/ui/badge";

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
          <div className="vehicle-info-card mt-4 bg-white rounded-lg p-4 border border-blue-100 shadow-sm animate-fade-in">
            {imageUrl && (
              <div className="mb-4">
                <img 
                  src={imageUrl} 
                  alt="Vehicle" 
                  className="w-full h-auto rounded-lg shadow-sm object-cover max-h-48" 
                />
              </div>
            )}
            
            <div className="flex flex-col gap-3">
              {/* Header with make/model */}
              {makeModel && (
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <Car className="h-5 w-5 text-blue-500" />
                    {makeModel[0]}
                  </h3>
                  {year && (
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 font-medium">
                      {year[0]}
                    </Badge>
                  )}
                </div>
              )}
              
              {/* Main specifications grid */}
              <div className="grid grid-cols-2 gap-3 text-sm">
                {power && (
                  <div className="flex items-center gap-2">
                    <Gauge className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700"><span className="font-medium">{power[1]}</span> ch</span>
                  </div>
                )}
                
                {fuelType && (
                  <div className="flex items-center gap-2">
                    <Fuel className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">{fuelType[0].charAt(0).toUpperCase() + fuelType[0].slice(1)}</span>
                  </div>
                )}
                
                {mileage && (
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">
                      <span className="font-medium">
                        {parseInt(mileage[1].replace(/[\s,.]/g, '')).toLocaleString('fr-FR')}
                      </span> km
                    </span>
                  </div>
                )}
                
                {transmission && (
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">{transmission[0].charAt(0).toUpperCase() + transmission[0].slice(1)}</span>
                  </div>
                )}
              </div>
              
              {/* Additional specs */}
              {(co2 || dimensions) && (
                <div className="mt-2 pt-2 border-t border-gray-100 text-xs text-gray-600 grid gap-1">
                  {co2 && (
                    <div className="flex items-center gap-1">
                      <span className="font-medium">CO2:</span> {co2[1]} g/km
                    </div>
                  )}
                  
                  {dimensions && (
                    <div className="flex items-center gap-1">
                      <span className="font-medium">Dimensions:</span> 
                      {dimensions[1]}×{dimensions[2]}×{dimensions[3]} mm
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      }
    } catch (error) {
      console.error("Error extracting vehicle info:", error);
    }
    
    return null;
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
          <div className="whitespace-pre-wrap">{message.text}</div>
          
          {/* Enhanced Vehicle Info Display */}
          {message.sender === 'bot' && extractVehicleInfo(message.text)}
          
          {/* Car Information Display (from previous implementation) */}
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

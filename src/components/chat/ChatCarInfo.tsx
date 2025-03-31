
import React from 'react';
import { Button } from '@/components/ui/button';
import { CarInfo } from './types';

interface ChatCarInfoProps {
  carInfo: CarInfo;
}

const ChatCarInfo: React.FC<ChatCarInfoProps> = ({ carInfo }) => {
  return (
    <div className="mt-3 pt-3 border-t border-gray-200 space-y-2 animate-fade-in">
      <div className="flex items-center gap-1.5 text-sm">
        <span className="font-bold">🎯 Modèle :</span> 
        <span>{carInfo.model}, Année : {carInfo.year}, Kilométrage : {carInfo.mileage.toLocaleString()} km</span>
      </div>
      <div className="flex items-center gap-1.5 text-sm">
        <span className="font-bold">💰 Estimation actuelle :</span>
        <span className="font-semibold text-argus-teal-500">
          {carInfo.price.toLocaleString()} € (Basé sur les tendances du marché)
        </span>
      </div>
      <Button
        size="sm"
        variant="secondary"
        className="w-full mt-2 text-sm"
      >
        📊 Voir l'évolution du prix
      </Button>
      <Button
        size="sm"
        className="w-full mt-1 text-sm"
      >
        Affiner l'estimation
      </Button>
    </div>
  );
};

export default ChatCarInfo;

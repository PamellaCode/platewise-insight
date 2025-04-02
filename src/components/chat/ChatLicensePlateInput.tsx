
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface ChatLicensePlateInputProps {
  onSubmit: (licensePlate: string) => void;
}

const ChatLicensePlateInput: React.FC<ChatLicensePlateInputProps> = ({ onSubmit }) => {
  const [licensePlate, setLicensePlate] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (licensePlate.trim()) {
      onSubmit(licensePlate);
    }
  };
  
  // Helper function pour formater la plaque d'immatriculation
  const formatLicensePlate = (input: string) => {
    // Supprime tous les caractères non alphanumériques
    const cleaned = input.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
    
    if (cleaned.length <= 2) {
      return cleaned;
    } else if (cleaned.length <= 5) {
      return `${cleaned.slice(0, 2)}-${cleaned.slice(2)}`;
    } else {
      return `${cleaned.slice(0, 2)}-${cleaned.slice(2, 5)}-${cleaned.slice(5, 7)}`;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPlate = formatLicensePlate(e.target.value);
    setLicensePlate(formattedPlate);
  };

  return (
    <div className="mt-4 mb-2">
      <p className="text-sm text-gray-600 mb-2">
        Pour commencer l'estimation de votre véhicule, veuillez saisir votre plaque d'immatriculation au format AA-123-AA :
      </p>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <Input
          type="text"
          value={licensePlate}
          onChange={handleInputChange}
          placeholder="AA-123-AA"
          className="flex-grow license-plate text-center font-medium"
          maxLength={9}
          aria-label="Plaque d'immatriculation"
        />
        <Button
          type="submit"
          className="bg-gradient-to-r from-argus-blue-500 to-argus-teal-500 text-white"
          disabled={!licensePlate.trim()}
        >
          <Search className="mr-2 h-4 w-4" /> Rechercher
        </Button>
      </form>
    </div>
  );
};

export default ChatLicensePlateInput;

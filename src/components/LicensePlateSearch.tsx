import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const LicensePlateSearch: React.FC = () => {
  const [licensePlate, setLicensePlate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation basique de la plaque d'immatriculation française (nouveau format)
    const plateRegex = /^[A-Z]{2}-\d{3}-[A-Z]{2}$/;
    
    if (!licensePlate) {
      toast({
        title: "Erreur",
        description: "Veuillez saisir une plaque d'immatriculation.",
        variant: "destructive",
      });
      return;
    }
    
    if (!plateRegex.test(licensePlate)) {
      toast({
        title: "Format incorrect",
        description: "Veuillez saisir une plaque au format AA-123-AA.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulation d'une requête API
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Recherche en cours",
        description: `Recherche de la valeur pour la plaque ${licensePlate}...`,
      });
      
      // Redirection vers les résultats (à implémenter)
      // navigate(`/results?plate=${licensePlate}`);
    }, 1500);
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
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <Input
          type="text"
          value={licensePlate}
          onChange={handleInputChange}
          placeholder="AA-123-AA"
          className="license-plate pr-24 text-lg h-14 text-center text-black bg-white shadow-md focus:ring-2 focus:ring-auto-blue-500"
          disabled={isLoading}
          maxLength={9}
        />
        <Button
          type="submit"
          className="absolute right-0 top-0 h-full rounded-l-none bg-auto-blue-500 hover:bg-auto-blue-600"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <Search className="mr-2 h-4 w-4" /> Estimer
            </>
          )}
        </Button>
      </form>
      <p className="text-center text-sm text-gray-500 mt-2">
        Entrez votre plaque d'immatriculation au format AA-123-AA
      </p>
    </div>
  );
};

export default LicensePlateSearch;

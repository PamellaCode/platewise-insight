
import React from 'react';
import VehicleInfoCard from '../components/VehicleInfoCard';

/**
 * Extrait et formate les informations sur le véhicule à partir du texte
 */
export const extractVehicleInfo = (text: string) => {
  // Vérifier si le texte contient des informations sur le véhicule
  if (!text.includes('registration') && !text.includes('plaque') && !text.includes('véhicule')) {
    return null;
  }

  try {
    // Expressions régulières pour extraire les informations
    const makeModelRegex = /(Citroën|Peugeot|Renault|Toyota|Ford|Volkswagen|BMW|Mercedes|Audi|Fiat)\s([A-Za-z0-9]+)/i;
    const yearRegex = /(\d{4})/;
    const powerRegex = /(\d+)\s*(?:horsepower|hp|ch)/i;
    const fuelTypeRegex = /(diesel|essence|électrique|hybrid)/i;
    const transmissionRegex = /(manual|automatic|manuel|automatique)/i;
    const mileageRegex = /(\d[\d\s,.]*)\s*(?:km|kilometers)/i;
    const co2Regex = /(\d+)\s*g\/km/i;
    const dimensionsRegex = /(\d+)\s*mm.*?(\d+)\s*mm.*?(\d+)\s*mm/i;
    
    // Extraire les valeurs
    const makeModel = makeModelRegex.exec(text);
    const year = yearRegex.exec(text);
    const power = powerRegex.exec(text);
    const fuelType = fuelTypeRegex.exec(text);
    const transmission = transmissionRegex.exec(text);
    const mileage = mileageRegex.exec(text);
    const co2 = co2Regex.exec(text);
    const dimensions = dimensionsRegex.exec(text);
    
    // Création d'une carte d'informations si suffisamment de données sont disponibles
    if (makeModel || year) {
      // Recherche d'une URL d'image si disponible
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
    console.error("Erreur lors de l'extraction des informations du véhicule:", error);
  }
  
  return null;
};

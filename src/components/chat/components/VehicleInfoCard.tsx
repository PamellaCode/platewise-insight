
import React from 'react';
import { Car, Gauge, Fuel, Clock, ArrowRight } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

interface VehicleInfoCardProps {
  makeModel?: string;
  year?: string;
  power?: string;
  fuelType?: string;
  mileage?: string;
  transmission?: string;
  co2?: string;
  dimensions?: string[];
  imageUrl?: string | null;
}

const VehicleInfoCard: React.FC<VehicleInfoCardProps> = ({
  makeModel,
  year,
  power,
  fuelType,
  mileage,
  transmission,
  co2,
  dimensions,
  imageUrl
}) => {
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
              {makeModel}
            </h3>
            {year && (
              <Badge variant="outline" className="bg-blue-50 text-blue-700 font-medium">
                {year}
              </Badge>
            )}
          </div>
        )}
        
        {/* Main specifications grid */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          {power && (
            <div className="flex items-center gap-2">
              <Gauge className="h-4 w-4 text-gray-500" />
              <span className="text-gray-700"><span className="font-medium">{power}</span> ch</span>
            </div>
          )}
          
          {fuelType && (
            <div className="flex items-center gap-2">
              <Fuel className="h-4 w-4 text-gray-500" />
              <span className="text-gray-700">{fuelType.charAt(0).toUpperCase() + fuelType.slice(1)}</span>
            </div>
          )}
          
          {mileage && (
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gray-500" />
              <span className="text-gray-700">
                <span className="font-medium">
                  {parseInt(mileage.replace(/[\s,.]/g, '')).toLocaleString('fr-FR')}
                </span> km
              </span>
            </div>
          )}
          
          {transmission && (
            <div className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4 text-gray-500" />
              <span className="text-gray-700">{transmission.charAt(0).toUpperCase() + transmission.slice(1)}</span>
            </div>
          )}
        </div>
        
        {/* Additional specs */}
        {(co2 || dimensions) && (
          <div className="mt-2 pt-2 border-t border-gray-100 text-xs text-gray-600 grid gap-1">
            {co2 && (
              <div className="flex items-center gap-1">
                <span className="font-medium">CO2:</span> {co2} g/km
              </div>
            )}
            
            {dimensions && (
              <div className="flex items-center gap-1">
                <span className="font-medium">Dimensions:</span> 
                {dimensions[0]}×{dimensions[1]}×{dimensions[2]} mm
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VehicleInfoCard;

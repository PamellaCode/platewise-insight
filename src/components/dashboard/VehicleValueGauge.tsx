
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface VehicleValueGaugeProps {
  currentValue: number;
  previousValue: number;
  maxValue: number;
  currency?: string;
  vehicleName?: string;
}

const VehicleValueGauge: React.FC<VehicleValueGaugeProps> = ({
  currentValue,
  previousValue,
  maxValue,
  currency = '€',
  vehicleName = 'Véhicule',
}) => {
  const percentValue = Math.min(Math.round((currentValue / maxValue) * 100), 100);
  const valueDifference = currentValue - previousValue;
  const percentDifference = previousValue > 0 
    ? ((valueDifference) / previousValue * 100).toFixed(1) 
    : '0';
  const isIncreasing = valueDifference > 0;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>{vehicleName}</CardTitle>
        <CardDescription>Valeur actuelle estimée</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          <div className="relative h-48 w-48 flex items-center justify-center">
            {/* Gauge background */}
            <div className="absolute h-full w-full rounded-full bg-gray-100 overflow-hidden">
              {/* Colored value indicator */}
              <div 
                className={`absolute bottom-0 h-full transition-all duration-700 ease-in-out ${isIncreasing ? 'bg-emerald-500' : 'bg-red-500'}`} 
                style={{ width: '100%', height: `${percentValue}%` }}
              />
            </div>
            
            {/* Gauge glass effect overlay */}
            <div className="absolute h-full w-full rounded-full bg-gradient-to-b from-transparent to-white opacity-30" />
            
            {/* Value display */}
            <div className="relative flex flex-col items-center z-10">
              <span className="text-4xl font-bold">{formatPrice(currentValue)}</span>
              <div className={`flex items-center mt-2 ${isIncreasing ? 'text-emerald-600' : 'text-red-600'}`}>
                {isIncreasing ? <ArrowUpRight className="h-5 w-5 mr-1" /> : <ArrowDownRight className="h-5 w-5 mr-1" />}
                <span>{Math.abs(Number(percentDifference))}%</span>
              </div>
            </div>
          </div>

          {/* Value comparison text */}
          <div className="mt-4 text-center text-sm text-gray-600">
            {isIncreasing 
              ? `La valeur a augmenté de ${formatPrice(Math.abs(valueDifference))} depuis la dernière estimation` 
              : `La valeur a diminué de ${formatPrice(Math.abs(valueDifference))} depuis la dernière estimation`}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VehicleValueGauge;

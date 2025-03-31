
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowDownCircle, ArrowUpCircle, Car, FileText, TrendingUp } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

interface VehicleEstimationResultProps {
  licensePlate?: string;
  subscription?: 'bronze' | 'silver' | 'gold';
}

const VehicleEstimationResult: React.FC<VehicleEstimationResultProps> = ({ 
  licensePlate = 'AB-123-CD',
  subscription = 'bronze'
}) => {
  // Mock data pour la démo
  const vehicleData = {
    brand: 'Peugeot',
    model: '308',
    year: 2019,
    fuelType: 'Diesel',
    mileage: 45000,
    transmission: 'Manuelle',
    power: '130ch',
    version: 'GT Line',
    estimatedPrice: 15700,
    marketMinPrice: 14200,
    marketMaxPrice: 17500,
    priceStatus: 'stable', // 'down', 'up', 'stable'
    priceEvolution: -2.3, // pourcentage de changement en 1 an
  };

  const getPriceStatusColor = () => {
    switch (vehicleData.priceStatus) {
      case 'down':
        return 'text-red-500';
      case 'up':
        return 'text-green-500';
      default:
        return 'text-amber-500';
    }
  };

  const getPriceStatusIcon = () => {
    switch (vehicleData.priceStatus) {
      case 'down':
        return <ArrowDownCircle className="h-5 w-5 text-red-500" />;
      case 'up':
        return <ArrowUpCircle className="h-5 w-5 text-green-500" />;
      default:
        return <TrendingUp className="h-5 w-5 text-amber-500" />;
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(price);
  };

  return (
    <Card className="w-full shadow-lg border-t-4 border-t-auto-blue-500">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center space-x-2">
              <span className="bg-auto-blue-100 text-auto-blue-500 text-xs font-semibold px-2.5 py-0.5 rounded">
                {licensePlate}
              </span>
              {subscription !== 'bronze' && (
                <span className="bg-auto-gold-100 text-auto-gold-500 text-xs font-semibold px-2.5 py-0.5 rounded">
                  Abonnement {subscription === 'silver' ? 'Argent' : 'Or'}
                </span>
              )}
            </div>
            <CardTitle className="text-2xl font-bold mt-2">
              {vehicleData.brand} {vehicleData.model} {vehicleData.version}
            </CardTitle>
            <CardDescription className="text-sm mt-1">
              {vehicleData.year} • {vehicleData.fuelType} • {vehicleData.transmission} • {vehicleData.mileage.toLocaleString('fr-FR')} km
            </CardDescription>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-2xl font-bold">{formatPrice(vehicleData.estimatedPrice)}</div>
            <div className="flex items-center text-sm">
              {getPriceStatusIcon()}
              <span className={`ml-1 ${getPriceStatusColor()}`}>
                {vehicleData.priceEvolution > 0 ? '+' : ''}{vehicleData.priceEvolution}% en 1 an
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="summary" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="summary">Résumé</TabsTrigger>
            <TabsTrigger value="details" disabled={subscription === 'bronze'}>Détails</TabsTrigger>
            <TabsTrigger value="market" disabled={subscription === 'bronze'}>Marché</TabsTrigger>
          </TabsList>
          
          <TabsContent value="summary" className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-center mb-4">
                <div className="text-sm font-medium text-gray-500 mb-1">Estimation de la cote Argus</div>
                <div className="text-3xl font-bold text-auto-blue-500">{formatPrice(vehicleData.estimatedPrice)}</div>
              </div>
              
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Prix minimum du marché</span>
                    <span className="font-medium">{formatPrice(vehicleData.marketMinPrice)}</span>
                  </div>
                  <Progress value={0} className="h-1.5" />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Votre véhicule</span>
                    <span className="font-medium">{formatPrice(vehicleData.estimatedPrice)}</span>
                  </div>
                  <Progress 
                    value={((vehicleData.estimatedPrice - vehicleData.marketMinPrice) / (vehicleData.marketMaxPrice - vehicleData.marketMinPrice)) * 100} 
                    className="h-1.5 bg-gray-200" 
                  />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Prix maximum du marché</span>
                    <span className="font-medium">{formatPrice(vehicleData.marketMaxPrice)}</span>
                  </div>
                  <Progress value={100} className="h-1.5" />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Button className="w-full bg-auto-blue-500 hover:bg-auto-blue-600" size="lg">
                <FileText className="mr-2 h-4 w-4" /> PDF Rapport
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                <Car className="mr-2 h-4 w-4" /> Nouvelle estimation
              </Button>
            </div>
            
            {subscription === 'bronze' && (
              <div className="bg-auto-blue-50 text-auto-blue-700 p-4 rounded-lg border border-auto-blue-100 text-sm flex flex-col space-y-3 mt-4">
                <p>
                  <span className="font-semibold">Accédez à plus de détails</span> avec nos abonnements Argent ou Or.
                </p>
                <Button variant="link" className="text-auto-blue-500 p-0">
                  Voir les abonnements
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="details">
            <div className="text-center p-10 text-gray-500">
              Cette section contient les détails complets du véhicule et est disponible avec les abonnements Argent et Or.
            </div>
          </TabsContent>
          
          <TabsContent value="market">
            <div className="text-center p-10 text-gray-500">
              Cette section présente les tendances du marché et l'évolution des prix, disponible avec les abonnements Argent et Or.
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default VehicleEstimationResult;

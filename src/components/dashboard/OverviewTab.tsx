
import React from 'react';
import { Button } from '@/components/ui/button';
import VehicleValueGauge from './VehicleValueGauge';
import UserMetrics from './UserMetrics';
import MarketListings from './MarketListings';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface EstimationItem {
  id: number;
  licensePlate: string;
  brand: string;
  model: string;
  year: number;
  estimatedPrice: number;
  previousPrice?: number;
  date: Date;
}

interface SubscriptionProps {
  plan: 'bronze' | 'silver' | 'gold';
  displayName: string;
  creditsTotal: number;
  creditsUsed: number;
  renewalDate: Date;
}

interface OverviewTabProps {
  subscription: SubscriptionProps;
  recentEstimations: EstimationItem[];
}

const OverviewTab: React.FC<OverviewTabProps> = ({ subscription, recentEstimations }) => {
  // Sample data for the market trend chart
  const marketTrendData = [
    { month: 'Jan', value: 15200 },
    { month: 'Fév', value: 15400 },
    { month: 'Mar', value: 15150 },
    { month: 'Avr', value: 15800 },
    { month: 'Mai', value: 16200 },
    { month: 'Juin', value: 16100 },
    { month: 'Juil', value: 15900 },
    { month: 'Août', value: 16300 },
    { month: 'Sept', value: 16500 },
    { month: 'Oct', value: 16300 },
    { month: 'Nov', value: 15700 },
    { month: 'Déc', value: 15750 },
  ];

  // Sample market listings data
  const marketListings = [
    {
      id: '1',
      title: 'Peugeot 308 1.6 BlueHDi 120',
      price: 14950,
      priceChange: -2.5,
      image: 'https://via.placeholder.com/100x80?text=Peugeot+308',
      city: 'Lyon',
      url: '#',
    },
    {
      id: '2',
      title: 'Renault Clio 1.5 dCi 90',
      price: 9750,
      priceChange: 1.8,
      image: 'https://via.placeholder.com/100x80?text=Renault+Clio',
      city: 'Paris',
      url: '#',
    },
    {
      id: '3',
      title: 'Citroën C3 1.2 PureTech 82',
      price: 12800,
      priceChange: -1.2,
      image: 'https://via.placeholder.com/100x80?text=Citroen+C3',
      city: 'Marseille',
      url: '#',
    },
  ];

  const latestEstimation = recentEstimations && recentEstimations.length > 0 ? recentEstimations[0] : null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left Column */}
      <div className="lg:col-span-8 space-y-6">
        {/* User Metrics */}
        <UserMetrics 
          remainingEstimations={subscription.creditsTotal - subscription.creditsUsed}
          totalEstimations={subscription.creditsTotal}
          creditsAvailable={subscription.creditsTotal - subscription.creditsUsed}
          renewalDate={subscription.renewalDate}
        />

        {/* Value Gauge & Market Trend */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {latestEstimation && (
            <VehicleValueGauge
              currentValue={latestEstimation.estimatedPrice}
              previousValue={latestEstimation.previousPrice || latestEstimation.estimatedPrice * 0.95} // Fallback if no previous value
              maxValue={latestEstimation.estimatedPrice * 1.2} // Just for gauge scale
              vehicleName={`${latestEstimation.brand} ${latestEstimation.model}`}
            />
          )}

          {/* Market trend chart */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Tendance du marché</CardTitle>
              <CardDescription>Évolution des prix sur 12 mois</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={marketTrendData}
                    margin={{ top: 5, right: 20, left: 5, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                    <XAxis 
                      dataKey="month" 
                      tick={{ fontSize: 12 }} 
                      tickLine={false}
                    />
                    <YAxis 
                      tickFormatter={(value) => `${value / 1000}k€`}
                      tick={{ fontSize: 12 }}
                      tickLine={false}
                      axisLine={false}
                      width={45}
                    />
                    <Tooltip 
                      formatter={(value) => [`${value} €`, 'Valeur']}
                      labelFormatter={(label) => `Mois: ${label}`}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#3b82f6" 
                      strokeWidth={2}
                      dot={{ r: 3 }}
                      activeDot={{ r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Right Column */}
      <div className="lg:col-span-4 space-y-6">
        {/* Market listings */}
        <MarketListings listings={marketListings} />
        
        {/* Quick action buttons */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Actions rapides</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button className="w-full justify-start" variant="outline" asChild>
                <Link to="/dashboard/new-estimation">
                  <Car className="mr-2 h-4 w-4" />
                  Nouvelle estimation
                </Link>
              </Button>
              <Button className="w-full justify-start" variant="outline" asChild>
                <Link to="/dashboard/history">
                  <Card className="mr-2 h-4 w-4" />
                  Voir l'historique complet
                </Link>
              </Button>
              <Button className="w-full justify-start" variant="outline" asChild>
                <Link to="/dashboard/stats">
                  <Card className="mr-2 h-4 w-4" />
                  Statistiques détaillées
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OverviewTab;

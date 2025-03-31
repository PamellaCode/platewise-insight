
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Car } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EstimationItem {
  id: number;
  licensePlate: string;
  brand: string;
  model: string;
  year: number;
  estimatedPrice: number;
  date: Date;
}

interface RecentEstimationsProps {
  estimations: EstimationItem[];
}

const RecentEstimations: React.FC<RecentEstimationsProps> = ({ estimations }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(date);
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Activité récente</CardTitle>
        <CardDescription>Vos dernières estimations de véhicules</CardDescription>
      </CardHeader>
      <CardContent>
        {estimations.length > 0 ? (
          <div className="space-y-4">
            {estimations.map((estimation) => (
              <div key={estimation.id} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div className="flex items-start space-x-3">
                    <div className="bg-auto-blue-100 text-auto-blue-500 p-2 rounded-lg">
                      <Car className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-medium">
                        {estimation.brand} {estimation.model} ({estimation.year})
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        Plaque: {estimation.licensePlate} • Estimé le {formatDate(estimation.date)}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-auto-blue-500">
                      {formatPrice(estimation.estimatedPrice)}
                    </div>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-sm"
                      asChild
                    >
                      <Link to={`/dashboard/estimations/${estimation.id}`}>
                        Voir les détails
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <Car className="h-12 w-12 mx-auto mb-3 opacity-50" />
            <p>Aucune estimation récente</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RecentEstimations;

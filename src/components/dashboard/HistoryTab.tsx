
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Car, FileText } from 'lucide-react';
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

interface HistoryTabProps {
  estimations: EstimationItem[];
}

const HistoryTab: React.FC<HistoryTabProps> = ({ estimations }) => {
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
      <CardHeader>
        <CardTitle>Historique des estimations</CardTitle>
        <CardDescription>Vos estimations de véhicules passées</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {estimations.map((estimation) => (
            <div key={estimation.id} className="border-b pb-4 last:border-0 last:pb-0">
              <div className="flex justify-between items-start">
                <div className="flex items-start space-x-3">
                  <div className="bg-auto-blue-50 text-auto-blue-500 p-2 rounded-lg">
                    <Car className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-medium">
                      {estimation.brand} {estimation.model} ({estimation.year})
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      Plaque: {estimation.licensePlate}
                    </div>
                    <div className="text-sm text-gray-500">
                      Estimé le {formatDate(estimation.date)}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-auto-blue-500 text-lg">
                    {formatPrice(estimation.estimatedPrice)}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2 text-blue-600"
                    asChild
                  >
                    <Link to={`/dashboard/estimations/${estimation.id}`}>
                      <FileText className="h-4 w-4 mr-1 text-blue-600" /> Détails
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default HistoryTab;

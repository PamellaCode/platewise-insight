
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
    <Card className="bg-gray-800/60 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white">Historique des estimations</CardTitle>
        <CardDescription className="text-gray-300">Vos estimations de véhicules passées</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {estimations.map((estimation) => (
            <div key={estimation.id} className="border-b border-gray-700 pb-4 last:border-0 last:pb-0">
              <div className="flex justify-between items-start">
                <div className="flex items-start space-x-3">
                  <div className="bg-gradient-to-br from-argus-blue-800 to-argus-blue-600 text-white p-2 rounded-lg shadow-md">
                    <Car className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-medium text-white">
                      {estimation.brand} {estimation.model} ({estimation.year})
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      Plaque: {estimation.licensePlate}
                    </div>
                    <div className="text-sm text-gray-400">
                      Estimé le {formatDate(estimation.date)}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-argus-red-400 text-lg">
                    {formatPrice(estimation.estimatedPrice)}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2 text-argus-blue-400 border-argus-blue-800 hover:bg-argus-blue-900/30"
                    asChild
                  >
                    <Link to={`/dashboard/estimations/${estimation.id}`}>
                      <FileText className="h-4 w-4 mr-1 text-argus-blue-400" /> Détails
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

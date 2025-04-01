
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CircleDollarSign, Car, RefreshCw } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface UserMetricsProps {
  remainingEstimations: number;
  totalEstimations: number;
  creditsAvailable: number;
  renewalDate: Date;
}

const UserMetrics: React.FC<UserMetricsProps> = ({
  remainingEstimations,
  totalEstimations,
  creditsAvailable,
  renewalDate,
}) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center">
            <Car className="h-4 w-4 mr-2" />
            Estimations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <div className="flex justify-between mb-1 text-sm">
              <span>{remainingEstimations} restantes</span>
              <span>{totalEstimations} au total</span>
            </div>
            <Progress 
              value={(remainingEstimations / totalEstimations) * 100} 
              className="h-2" 
            />
            <p className="text-xs text-muted-foreground mt-2">
              Renouvellement le {formatDate(renewalDate)}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center">
            <CircleDollarSign className="h-4 w-4 mr-2" />
            Crédits disponibles
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{creditsAvailable}</div>
          <button className="text-xs text-indigo-600 font-medium mt-2">
            Acheter des crédits supplémentaires
          </button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center">
            <RefreshCw className="h-4 w-4 mr-2" />
            Prochaine mise à jour
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xl font-medium">{formatDate(renewalDate)}</div>
          <p className="text-xs text-muted-foreground mt-2">
            Données du marché automobile
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserMetrics;

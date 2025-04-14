
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import SubscriptionCard from './SubscriptionCard';
import AssistantAIPromo from './AssistantAIPromo';

interface SubscriptionProps {
  plan: 'essentiel' | 'standard' | 'expert';
  displayName: string;
  creditsTotal: number;
  creditsUsed: number;
  renewalDate: Date;
}

interface EstimationItem {
  id: number;
  licensePlate: string;
  brand: string;
  model: string;
  year: number;
  estimatedPrice: number;
  date: Date;
}

interface OverviewTabProps {
  subscription: SubscriptionProps;
  recentEstimations: EstimationItem[];
}

const RecentEstimations: React.FC<{
  estimations: EstimationItem[];
}> = ({
  estimations
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0
    }).format(price);
  };
  
  return <div className="divide-y divide-gray-200">
      {estimations.map(estimation => <div key={estimation.id} className="py-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">{estimation.brand} {estimation.model}</div>
              <div className="text-sm text-gray-500">Plaque: {estimation.licensePlate}</div>
            </div>
            <div className="font-bold">{formatPrice(estimation.estimatedPrice)}</div>
          </div>
        </div>)}
    </div>;
};

const OverviewTab = ({
  subscription,
  recentEstimations
}: OverviewTabProps) => {
  return <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <SubscriptionCard subscription={subscription} />
      
      <div className="col-span-full lg:col-span-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Estimations récentes</CardTitle>
              <CardDescription>Vos dernières estimations de véhicules</CardDescription>
            </div>
            <Button variant="default" className="text-white" asChild>
              <Link to="/dashboard/new-estimation">
                <Plus className="mr-2 h-4 w-4" />
                Nouvelle estimation
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <RecentEstimations estimations={recentEstimations} />
          </CardContent>
          <CardFooter>
            <Button variant="default" className="w-full text-white" asChild>
              <Link to="/dashboard/estimations">Voir toutes les estimations</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      <AssistantAIPromo />
    </div>;
};

export default OverviewTab;

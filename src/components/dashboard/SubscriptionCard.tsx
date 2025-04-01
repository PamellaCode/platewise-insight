
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SubscriptionProps {
  plan: 'essentiel' | 'standard' | 'expert';
  displayName: string;
  creditsTotal: number;
  creditsUsed: number;
  renewalDate: Date;
}

const SubscriptionCard: React.FC<{ subscription: SubscriptionProps }> = ({ subscription }) => {
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
        <CardTitle className="text-lg">Votre abonnement</CardTitle>
        <CardDescription>Formule {subscription.displayName}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Prochaine facturation</span>
            <span className="font-medium">{formatDate(subscription.renewalDate)}</span>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Crédits d'estimation</span>
              <span className="text-sm font-medium">{subscription.creditsUsed} / {subscription.creditsTotal} utilisés</span>
            </div>
            <Progress
              value={(subscription.creditsUsed / subscription.creditsTotal) * 100}
              className="h-2"
            />
          </div>

          <div className="pt-3 border-t flex flex-col sm:flex-row gap-3">
            <Button size="sm" variant="outline" className="flex items-center" asChild>
              <Link to="/dashboard/subscription">
                <CreditCard className="h-4 w-4 mr-2" /> Gérer l'abonnement
              </Link>
            </Button>
            <Button size="sm">Acheter des crédits</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SubscriptionCard;


import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Car, CreditCard, Plus } from 'lucide-react';
import VehicleEstimationResult from '@/components/VehicleEstimationResult';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // L'utilisateur est abonné à la formule Bronze dans cet exemple
  const subscription = {
    plan: 'bronze' as 'bronze' | 'silver' | 'gold',
    displayName: 'Bronze',
    creditsTotal: 1,
    creditsUsed: 1,
    renewalDate: new Date('2023-12-31'),
  };

  const recentEstimations = [
    {
      id: 1,
      licensePlate: 'AB-123-CD',
      brand: 'Peugeot',
      model: '308',
      year: 2019,
      estimatedPrice: 15700,
      date: new Date('2023-11-15'),
    },
  ];

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
    <DashboardLayout>
      <div className="flex flex-col space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Tableau de bord</h1>
          <Button size="sm" asChild>
            <Link to="/dashboard/new-estimation">
              <Plus className="h-4 w-4 mr-2" /> Nouvelle estimation
            </Link>
          </Button>
        </div>

        {/* Subscription Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="col-span-1">
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

          <Card className="col-span-1 lg:col-span-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Activité récente</CardTitle>
              <CardDescription>Vos dernières estimations de véhicules</CardDescription>
            </CardHeader>
            <CardContent>
              {recentEstimations.length > 0 ? (
                <div className="space-y-4">
                  {recentEstimations.map((estimation) => (
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
        </div>

        {/* Recent Estimation */}
        {recentEstimations.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Dernière estimation</h2>
            <VehicleEstimationResult
              licensePlate={recentEstimations[0].licensePlate}
              subscription={subscription.plan}
            />
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

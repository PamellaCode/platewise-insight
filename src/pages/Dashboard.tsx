
import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Car, CreditCard, FileText, History, MessageCircle, Plus } from 'lucide-react';
import VehicleEstimationResult from '@/components/VehicleEstimationResult';
import { Link, useLocation } from 'react-router-dom';
import Chatbot from '@/components/Chatbot';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  const location = useLocation();
  const currentTab = location.pathname.includes("/dashboard/assistant-ai") 
    ? "assistant-ai" 
    : location.pathname.includes("/dashboard/history") 
      ? "history" 
      : "overview";
  
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

  const allEstimations = [
    ...recentEstimations,
    {
      id: 2,
      licensePlate: 'EF-456-GH',
      brand: 'Renault',
      model: 'Clio',
      year: 2018,
      estimatedPrice: 9800,
      date: new Date('2023-10-20'),
    },
    {
      id: 3,
      licensePlate: 'IJ-789-KL',
      brand: 'Citroën',
      model: 'C3',
      year: 2020,
      estimatedPrice: 13200,
      date: new Date('2023-09-05'),
    },
  ];

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

        <Tabs defaultValue={currentTab} className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="overview" asChild>
              <Link to="/dashboard" className="flex items-center gap-1">
                <Car className="h-4 w-4" />
                <span>Aperçu</span>
              </Link>
            </TabsTrigger>
            <TabsTrigger value="history" asChild>
              <Link to="/dashboard/history" className="flex items-center gap-1">
                <History className="h-4 w-4" />
                <span>Historique</span>
              </Link>
            </TabsTrigger>
            <TabsTrigger value="assistant-ai" asChild>
              <Link to="/dashboard/assistant-ai" className="flex items-center gap-1">
                <MessageCircle className="h-4 w-4" />
                <span>Assistant AI</span>
              </Link>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            {/* Main Dashboard Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-6">
                {/* Subscription Info */}
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

                {/* Recent Activity */}
                <Card>
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
              
              {/* Right Column - Image and Banner */}
              <div className="lg:col-span-5 space-y-6">
                <Card className="border border-auto-blue-100 bg-gradient-to-br from-auto-blue-50 to-auto-teal-50">
                  <CardContent className="p-6 text-center">
                    <div className="bg-white rounded-full p-3 w-16 h-16 mx-auto mb-4 shadow-sm flex items-center justify-center">
                      <MessageCircle className="h-8 w-8 text-argus-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Assistant ArgusAI</h3>
                    <p className="text-gray-600 mb-4">
                      Posez vos questions et obtenez des estimations personnalisées avec notre assistant intelligent.
                    </p>
                    <Button asChild>
                      <Link to="/dashboard/assistant-ai">
                        <MessageCircle className="h-4 w-4 mr-2" /> Discuter avec l'assistant
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Historique des estimations</CardTitle>
                <CardDescription>Vos estimations de véhicules passées</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {allEstimations.map((estimation) => (
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
                            className="mt-2"
                            asChild
                          >
                            <Link to={`/dashboard/estimations/${estimation.id}`}>
                              <FileText className="h-4 w-4 mr-1" /> Détails
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assistant-ai" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8 lg:col-start-3 space-y-6">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xl font-semibold">Assistant ArgusAI</h2>
                  <Button variant="ghost" size="sm" className="flex items-center">
                    <MessageCircle className="h-4 w-4 mr-2" /> Aide
                  </Button>
                </div>
                <Chatbot />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

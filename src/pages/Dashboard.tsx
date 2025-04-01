
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import DashboardTabs from '@/components/dashboard/DashboardTabs';
import OverviewTab from '@/components/dashboard/OverviewTab';
import HistoryTab from '@/components/dashboard/HistoryTab';
import AssistantAITab from '@/components/dashboard/AssistantAITab';

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
    creditsTotal: 5,
    creditsUsed: 2,
    renewalDate: new Date('2024-12-31'),
  };

  // Données d'exemple pour les estimations avec des prix précédents
  const recentEstimations = [
    {
      id: 1,
      licensePlate: 'AB-123-CD',
      brand: 'Peugeot',
      model: '308',
      year: 2019,
      estimatedPrice: 15700,
      previousPrice: 15200, // Ajout du prix précédent
      date: new Date('2023-11-15'),
      status: 'completed' as const,
    },
  ];

  const allEstimations = [
    ...recentEstimations,
    {
      id: 2,
      licensePlate: 'EF-456-GH',
      brand: 'Renault',
      model: 'Clio',
      year: 2018,
      estimatedPrice: 9800,
      previousPrice: 10200, // Prix en baisse
      date: new Date('2023-10-20'),
      status: 'completed' as const,
    },
    {
      id: 3,
      licensePlate: 'IJ-789-KL',
      brand: 'Citroën',
      model: 'C3',
      year: 2020,
      estimatedPrice: 13200,
      previousPrice: 12900, // Prix en hausse
      date: new Date('2023-09-05'),
      status: 'expired' as const,
    },
    {
      id: 4,
      licensePlate: 'MN-012-OP',
      brand: 'Volkswagen',
      model: 'Golf',
      year: 2021,
      estimatedPrice: 19500,
      previousPrice: 19500, // Prix stable
      date: new Date('2023-08-15'),
      status: 'completed' as const,
    },
    {
      id: 5,
      licensePlate: 'QR-345-ST',
      brand: 'Toyota',
      model: 'Yaris',
      year: 2020,
      estimatedPrice: 12800,
      previousPrice: 12400, // Prix en hausse
      date: new Date('2023-07-10'),
      status: 'completed' as const,
    },
  ];

  // Animation pour les transitions d'onglets
  const [tabTransition, setTabTransition] = useState(false);

  useEffect(() => {
    setTabTransition(true);
    const timer = setTimeout(() => setTabTransition(false), 300);
    return () => clearTimeout(timer);
  }, [currentTab]);

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
          <DashboardTabs currentTab={currentTab} />

          <div className={`transition-all duration-300 ${tabTransition ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
            <TabsContent value="overview" className="space-y-4">
              <OverviewTab 
                subscription={subscription}
                recentEstimations={recentEstimations}
              />
            </TabsContent>

            <TabsContent value="history" className="space-y-4">
              <HistoryTab estimations={allEstimations} />
            </TabsContent>

            <TabsContent value="assistant-ai" className="space-y-4">
              <AssistantAITab />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

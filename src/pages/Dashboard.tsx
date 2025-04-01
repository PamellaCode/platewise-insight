
import React from 'react';
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
          <DashboardTabs currentTab={currentTab} />

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
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

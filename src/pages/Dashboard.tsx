
import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import OverviewTab from '@/components/dashboard/OverviewTab';
import { ScrollArea } from '@/components/ui/scroll-area';

interface EstimationItem {
  id: number;
  licensePlate: string;
  brand: string;
  model: string;
  year: number;
  estimatedPrice: number;
  date: Date;
}

interface SubscriptionProps {
  plan: 'essentiel' | 'standard' | 'expert';
  displayName: string;
  creditsTotal: number;
  creditsUsed: number;
  renewalDate: Date;
}

const Dashboard = () => {
  // Mock data for subscription
  const subscription: SubscriptionProps = {
    plan: 'standard',
    displayName: 'Standard',
    creditsTotal: 50,
    creditsUsed: 12,
    renewalDate: new Date('2023-12-31')
  };

  // Mock data for recent estimations
  const recentEstimations: EstimationItem[] = [{
    id: 1,
    licensePlate: 'AB-123-CD',
    brand: 'Peugeot',
    model: '308',
    year: 2019,
    estimatedPrice: 15700,
    date: new Date('2023-11-15')
  }, {
    id: 2,
    licensePlate: 'EF-456-GH',
    brand: 'Renault',
    model: 'Clio',
    year: 2018,
    estimatedPrice: 9800,
    date: new Date('2023-10-20')
  }];
  
  return <DashboardLayout>
      <div className="animate-fade-in h-full">
        <ScrollArea className="h-[calc(100vh-120px)]">
          <div className="space-y-6 max-w-7xl mx-auto pb-8 px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-argus-red-400 via-argus-violet-400 to-argus-blue-400 bg-clip-text text-transparent animate-fade-in">
                Tableau de bord
              </h1>
            </div>
            <OverviewTab subscription={subscription} recentEstimations={recentEstimations} />
          </div>
        </ScrollArea>
      </div>
    </DashboardLayout>;
};

export default Dashboard;

import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import HistoryTab from '@/components/dashboard/HistoryTab';
import { ScrollArea } from '@/components/ui/scroll-area';
const History = () => {
  // We'll use the mock data from the HistoryTab component
  const allEstimations = [{
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
  }, {
    id: 3,
    licensePlate: 'IJ-789-KL',
    brand: 'Citroën',
    model: 'C3',
    year: 2020,
    estimatedPrice: 13200,
    date: new Date('2023-09-05')
  }];
  return <DashboardLayout>
      <div className="animate-fade-in h-full">
        <ScrollArea className="h-[calc(100vh-120px)]">
          <div className="space-y-6 max-w-7xl mx-auto pb-8 px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent animate-fade-in">
                Historique
              </h1>
              
            </div>
            <HistoryTab estimations={allEstimations} />
          </div>
        </ScrollArea>
      </div>
    </DashboardLayout>;
};
export default History;
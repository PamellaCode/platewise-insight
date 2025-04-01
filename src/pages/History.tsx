
import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import HistoryTab from '@/components/dashboard/HistoryTab';

const History = () => {
  // We'll use the mock data from the HistoryTab component
  const allEstimations = [
    {
      id: 1,
      licensePlate: 'AB-123-CD',
      brand: 'Peugeot',
      model: '308',
      year: 2019,
      estimatedPrice: 15700,
      date: new Date('2023-11-15'),
    },
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
        <h1 className="text-2xl font-bold">Historique</h1>
        <HistoryTab estimations={allEstimations} />
      </div>
    </DashboardLayout>
  );
};

export default History;

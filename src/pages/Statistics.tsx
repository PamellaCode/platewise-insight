
import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import StatisticsTab from '@/components/dashboard/StatisticsTab';

const Statistics = () => {
  return (
    <DashboardLayout>
      <div className="animate-fade-in h-full">
        <div className="py-6 px-4 sm:px-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-argus-red-400 via-argus-violet-400 to-argus-blue-400 bg-clip-text text-transparent animate-fade-in mb-6">
            Statistiques
          </h1>
          <StatisticsTab />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Statistics;

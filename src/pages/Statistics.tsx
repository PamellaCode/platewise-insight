
import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import StatisticsTab from '@/components/dashboard/StatisticsTab';

const Statistics = () => {
  return (
    <DashboardLayout>
      <div className="animate-fade-in h-full bg-gradient-to-br from-argus-blue-900/20 to-argus-violet-900/20 backdrop-blur-sm rounded-xl border border-white/10 p-4 shadow-lg">
        <StatisticsTab />
      </div>
    </DashboardLayout>
  );
};

export default Statistics;

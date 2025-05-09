
import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import StatisticsTab from '@/components/dashboard/StatisticsTab';

const Statistics = () => {
  return (
    <DashboardLayout>
      <div className="animate-fade-in h-full">
        <StatisticsTab />
      </div>
    </DashboardLayout>
  );
};

export default Statistics;

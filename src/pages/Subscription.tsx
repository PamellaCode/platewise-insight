
import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import SubscriptionTab from '@/components/dashboard/SubscriptionTab';
import { ScrollArea } from '@/components/ui/scroll-area';
const Subscription = () => {
  return <DashboardLayout>
      <div className="animate-fade-in h-full">
        <ScrollArea className="h-[calc(100vh-120px)]">
          <div className="space-y-6 max-w-7xl mx-auto pb-8 px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-argus-red-400 via-argus-violet-400 to-argus-blue-400 bg-clip-text text-transparent animate-fade-in">
                Abonnement
              </h1>
            </div>
            <SubscriptionTab />
          </div>
        </ScrollArea>
      </div>
    </DashboardLayout>;
};
export default Subscription;

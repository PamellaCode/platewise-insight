
import React from 'react';
import { Button } from '@/components/ui/button';
import VehicleEstimationResult from '@/components/VehicleEstimationResult';
import SubscriptionCard from './SubscriptionCard';
import RecentEstimations from './RecentEstimations';
import AssistantAIPromo from './AssistantAIPromo';

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

interface OverviewTabProps {
  subscription: SubscriptionProps;
  recentEstimations: EstimationItem[];
}

const OverviewTab: React.FC<OverviewTabProps> = ({ subscription, recentEstimations }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left Column */}
      <div className="lg:col-span-7 space-y-6">
        {/* Subscription Info */}
        <SubscriptionCard subscription={subscription} />

        {/* Recent Activity */}
        <RecentEstimations estimations={recentEstimations} />

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
        <AssistantAIPromo />
      </div>
    </div>
  );
};

export default OverviewTab;

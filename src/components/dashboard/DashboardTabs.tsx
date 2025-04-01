import React from 'react';
import { Link } from 'react-router-dom';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart2, Car, CreditCard, History, MessageCircle } from 'lucide-react';
interface DashboardTabsProps {
  currentTab: string;
}
const DashboardTabs: React.FC<DashboardTabsProps> = ({
  currentTab
}) => {
  return <TabsList className="mb-4">
      <TabsTrigger value="overview" asChild>
        
      </TabsTrigger>
      <TabsTrigger value="subscription" asChild>
        
      </TabsTrigger>
      <TabsTrigger value="stats" asChild>
        
      </TabsTrigger>
    </TabsList>;
};
export default DashboardTabs;
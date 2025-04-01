
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
        <Link to="/dashboard" className="flex items-center gap-1">
          <Car className="h-4 w-4" />
          <span>Aperçu</span>
        </Link>
      </TabsTrigger>
      <TabsTrigger value="history" asChild>
        
      </TabsTrigger>
      <TabsTrigger value="subscription" asChild>
        
      </TabsTrigger>
      <TabsTrigger value="assistant-ai" asChild>
        <Link to="/dashboard/assistant-ai" className="flex items-center gap-1">
          <MessageCircle className="h-4 w-4" />
          <span>Assistant IA</span>
        </Link>
      </TabsTrigger>
      <TabsTrigger value="stats" asChild>
        
      </TabsTrigger>
    </TabsList>;
};

export default DashboardTabs;

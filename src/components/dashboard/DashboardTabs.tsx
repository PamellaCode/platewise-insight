
import React from 'react';
import { Link } from 'react-router-dom';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart2, Car, CreditCard, History, MessageCircle, Gauge } from 'lucide-react';

interface DashboardTabsProps {
  currentTab: string;
}

const DashboardTabs: React.FC<DashboardTabsProps> = ({
  currentTab
}) => {
  return (
    <TabsList className="mb-4 flex flex-wrap">
      <TabsTrigger value="overview" asChild>
        <Link to="/dashboard" className="flex items-center gap-1">
          <Gauge className="h-4 w-4" />
          <span>Tableau de bord</span>
        </Link>
      </TabsTrigger>
      <TabsTrigger value="history" asChild>
        <Link to="/dashboard/history" className="flex items-center gap-1">
          <History className="h-4 w-4" />
          <span>Historique</span>
        </Link>
      </TabsTrigger>
      <TabsTrigger value="subscription" asChild>
        <Link to="/dashboard/subscription" className="flex items-center gap-1">
          <CreditCard className="h-4 w-4" />
          <span>Abonnement</span>
        </Link>
      </TabsTrigger>
      <TabsTrigger value="assistant-ai" asChild>
        <Link to="/dashboard/assistant-ai" className="flex items-center gap-1">
          <MessageCircle className="h-4 w-4" />
          <span>Assistant AI</span>
        </Link>
      </TabsTrigger>
      <TabsTrigger value="stats" asChild>
        <Link to="/dashboard/stats" className="flex items-center gap-1">
          <BarChart2 className="h-4 w-4" />
          <span>Statistiques</span>
        </Link>
      </TabsTrigger>
    </TabsList>
  );
};

export default DashboardTabs;

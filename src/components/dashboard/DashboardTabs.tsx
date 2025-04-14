
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart2, History, MessageCircle } from 'lucide-react';

interface DashboardTabsProps {
  currentTab: string;
}

const DashboardTabs: React.FC<DashboardTabsProps> = ({
  currentTab
}) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <TabsList className="mb-4">
      <TabsTrigger value="overview" asChild data-state={isActive('/dashboard') ? 'active' : 'inactive'}>
        <Link to="/dashboard" className="flex items-center gap-2">
          <BarChart2 className="h-4 w-4" />
          <span>Aperçu</span>
        </Link>
      </TabsTrigger>
      <TabsTrigger value="assistant-ai" asChild data-state={isActive('/dashboard/assistant-ai') ? 'active' : 'inactive'}>
        <Link to="/dashboard/assistant-ai" className="flex items-center gap-2">
          <MessageCircle className="h-4 w-4" />
          <span>Assistant IA</span>
        </Link>
      </TabsTrigger>
      <TabsTrigger value="history" asChild data-state={isActive('/dashboard/history') ? 'active' : 'inactive'}>
        <Link to="/dashboard/history" className="flex items-center gap-2">
          <History className="h-4 w-4" />
          <span>Historique</span>
        </Link>
      </TabsTrigger>
    </TabsList>
  );
};

export default DashboardTabs;


import React from 'react';
import { Link } from 'react-router-dom';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart2, History, MessageCircle } from 'lucide-react';

interface DashboardTabsProps {
  currentTab: string;
}

const DashboardTabs: React.FC<DashboardTabsProps> = ({
  currentTab
}) => {
  const isAssistantAI = currentTab === "assistant-ai";
  
  return <TabsList className="mb-4">
      {!isAssistantAI && <>
          <TabsTrigger value="overview" asChild>
            <Link to="/dashboard" className="flex items-center gap-2">
              <History className="h-4 w-4" />
              <span>Aperçu</span>
            </Link>
          </TabsTrigger>
          <TabsTrigger value="history" asChild>
            <Link to="/dashboard/history" className="flex items-center gap-2">
              <History className="h-4 w-4" />
              <span>Historique</span>
            </Link>
          </TabsTrigger>
        </>}
      <TabsTrigger value="assistant-ai" asChild>
        <Link to="/dashboard/assistant-ai" className="flex items-center gap-2">
          <MessageCircle className="h-4 w-4" />
          <span>Assistant IA</span>
        </Link>
      </TabsTrigger>
    </TabsList>;
};

export default DashboardTabs;

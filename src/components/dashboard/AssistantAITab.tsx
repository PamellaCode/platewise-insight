
import React from 'react';
import { MessageCircle } from 'lucide-react';
import Chatbot from '@/components/Chatbot';
import { TooltipProvider } from '@/components/ui/tooltip';

const AssistantAITab: React.FC = () => {
  return <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-8 lg:col-start-3 space-y-6">
        <div className="flex items-center justify-between mb-3">
          <TooltipProvider>
            <div className="flex items-center">
              <MessageCircle className="mr-2 h-5 w-5 text-argus-blue-500" />
              <h2 className="text-lg font-medium">Assistant IA - Estimation Automobile</h2>
            </div>
          </TooltipProvider>
        </div>
        
        <Chatbot />
      </div>
    </div>;
};

export default AssistantAITab;

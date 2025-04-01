import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import Chatbot from '@/components/Chatbot';
const AssistantAITab: React.FC = () => {
  return <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-8 lg:col-start-3 space-y-6">
        <div className="flex items-center justify-between mb-3">
          
          <Button variant="ghost" size="sm" className="flex items-center">
            <MessageCircle className="h-4 w-4 mr-2" /> Aide
          </Button>
        </div>
        <Chatbot />
      </div>
    </div>;
};
export default AssistantAITab;
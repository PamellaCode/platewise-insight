
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Info } from 'lucide-react';
import Chatbot from '@/components/Chatbot';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const AssistantAITab: React.FC = () => {
  return <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-8 lg:col-start-3 space-y-6">
        <div className="flex items-center justify-between mb-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center">
                  <Info className="h-4 w-4 mr-2" /> À propos de l'assistant
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Cet assistant utilise n8n pour traiter vos messages et vous fournir des réponses personnalisées.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <Button variant="ghost" size="sm" className="flex items-center">
            <MessageCircle className="h-4 w-4 mr-2" /> Aide
          </Button>
        </div>
        <Chatbot />
      </div>
    </div>;
};

export default AssistantAITab;


import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Info } from 'lucide-react';
import Chatbot from '@/components/Chatbot';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Alert, AlertDescription } from '@/components/ui/alert';

const AssistantAITab: React.FC = () => {
  return <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-8 lg:col-start-3 space-y-6">
        <div className="flex items-center justify-between mb-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" className="text-argus-violet-400 gap-2">
                  <Info className="h-5 w-5" />
                  À propos de cet assistant
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-gray-800 text-white border-gray-700">
                <p>Cet assistant utilise n8n pour traiter vos messages et vous fournir des réponses personnalisées.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <Alert className="bg-gradient-to-r from-argus-red-900/60 to-argus-blue-900/60 border-argus-violet-800 shadow-md backdrop-blur-sm">
            <AlertDescription className="flex items-center text-white">
              <MessageCircle className="h-4 w-4 mr-2" />
              Assistant AI prêt à répondre à vos questions sur votre véhicule
            </AlertDescription>
          </Alert>
        </div>
        
        <Chatbot />
      </div>
    </div>;
};

export default AssistantAITab;

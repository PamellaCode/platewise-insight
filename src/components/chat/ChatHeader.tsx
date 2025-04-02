
import React from 'react';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatHeaderProps {
  sessionId: string;
  onClearHistory: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ sessionId, onClearHistory }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-argus-blue-500 to-argus-teal-500 text-white">
      <div className="flex items-center">
        <div className="bg-white rounded-full p-2 mr-3">
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white">
            <img 
              src="/lovable-uploads/83105391-8a8a-4e29-94ee-18a986256fd2.png" 
              alt="ArgusAI Logo" 
              className="h-8 w-8 object-contain" 
            />
          </div>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-0">ArgusAI</h3>
          <p className="text-xs opacity-80 mb-0">Session: {sessionId.substring(0, 8)}...</p>
        </div>
      </div>
      
      <Button 
        variant="ghost" 
        size="icon"
        onClick={onClearHistory}
        className="text-white hover:bg-white/20"
        title="Effacer l'historique"
      >
        <Trash2 className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default ChatHeader;

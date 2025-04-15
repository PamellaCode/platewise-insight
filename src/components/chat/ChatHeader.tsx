
import React from 'react';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatHeaderProps {
  sessionId: string;
  onClearHistory: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  sessionId,
  onClearHistory
}) => {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-argus-red-600/95 via-argus-violet-600/95 to-argus-blue-600/95 text-white backdrop-blur-sm shadow-md">
      <div className="flex items-center">
        <div className="bg-white/10 backdrop-blur-md rounded-full p-2 mr-3 border border-white/20">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-argus-blue-500 to-argus-violet-700">
            <img src="/lovable-uploads/8de0bf4a-e266-423d-a7bc-bb1705c2c533.png" alt="ArgusAI Logo" className="h-10 w-10 object-contain" />
          </div>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-0">ArgusAI</h3>
        </div>
      </div>
      
      <Button variant="ghost" size="icon" onClick={onClearHistory} className="text-white hover:bg-white/20" title="Effacer l'historique">
        <Trash2 className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default ChatHeader;

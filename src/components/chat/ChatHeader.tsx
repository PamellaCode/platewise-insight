
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
  return <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-argus-blue-500 to-argus-teal-500 text-white">
      <div className="flex items-center">
        <div className="bg-white rounded-full p-2 mr-3">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white">
            <img src="/lovable-uploads/2da57f4b-a186-4187-8eac-43f7b77087c3.png" alt="ArgusAI Logo" className="h-10 w-10 object-contain" />
          </div>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-0">ArgusAI</h3>
        </div>
      </div>
      
      <Button variant="ghost" size="icon" onClick={onClearHistory} className="text-white hover:bg-white/20" title="Effacer l'historique">
        <Trash2 className="h-5 w-5" />
      </Button>
    </div>;
};

export default ChatHeader;

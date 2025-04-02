
import React from 'react';
import { Car } from 'lucide-react';

interface ChatHeaderProps {
  sessionId: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ sessionId }) => {
  return (
    <div className="flex items-center p-4 border-b bg-gradient-to-r from-argus-blue-500 to-argus-teal-500 text-white">
      <div className="bg-white rounded-full p-2 mr-3">
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-argus-blue-500">
          <Car className="h-5 w-5 text-white" />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-lg mb-0">AssistantAI</h3>
        <p className="text-xs opacity-80 mb-0">En ligne</p>
      </div>
      <div className="text-xs opacity-70">
        Session ID: {sessionId.substring(0, 8)}...
      </div>
    </div>
  );
};

export default ChatHeader;

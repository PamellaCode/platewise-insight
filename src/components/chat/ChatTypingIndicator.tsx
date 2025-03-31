
import React from 'react';
import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import { Car } from 'lucide-react';

const ChatTypingIndicator: React.FC = () => {
  return (
    <div className="flex justify-start">
      <div className="flex items-end gap-2 max-w-[80%]">
        <Avatar className="h-8 w-8 border-2 border-argus-teal-500">
          <AvatarFallback className="bg-argus-blue-500 text-white">
            <Car className="h-5 w-5" />
          </AvatarFallback>
        </Avatar>
        <div className="px-4 py-3 rounded-2xl shadow-sm text-sm bg-white border border-gray-100 text-gray-800 rounded-bl-none">
          <div className="flex space-x-1">
            <div className="w-2 h-2 rounded-full bg-argus-blue-400 animate-bounce" style={{ animationDelay: "0ms" }}></div>
            <div className="w-2 h-2 rounded-full bg-argus-blue-400 animate-bounce" style={{ animationDelay: "300ms" }}></div>
            <div className="w-2 h-2 rounded-full bg-argus-blue-400 animate-bounce" style={{ animationDelay: "600ms" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatTypingIndicator;

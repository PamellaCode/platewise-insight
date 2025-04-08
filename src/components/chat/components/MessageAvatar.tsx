
import React from 'react';
import { User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface MessageAvatarProps {
  sender: 'user' | 'bot';
  text: string;
}

const MessageAvatar: React.FC<MessageAvatarProps> = ({ sender, text }) => {
  if (sender === "bot") {
    return (
      <Avatar className="h-9 w-9 border-2 border-argus-teal-500 shadow-sm">
        <AvatarImage 
          src="/lovable-uploads/2da57f4b-a186-4187-8eac-43f7b77087c3.png" 
          alt="ArgusAI Logo"
          className="p-1" 
        />
        <AvatarFallback className="bg-argus-blue-500 text-white p-0">
          <img 
            src="/lovable-uploads/2da57f4b-a186-4187-8eac-43f7b77087c3.png" 
            alt="ArgusAI Logo" 
            className="h-full w-full object-contain p-1" 
          />
        </AvatarFallback>
      </Avatar>
    );
  } else {
    return (
      <Avatar className="h-9 w-9 border-2 border-argus-blue-400 shadow-sm">
        <AvatarFallback className="bg-argus-blue-400 text-white">
          <User className="h-5 w-5" />
        </AvatarFallback>
      </Avatar>
    );
  }
};

export default MessageAvatar;

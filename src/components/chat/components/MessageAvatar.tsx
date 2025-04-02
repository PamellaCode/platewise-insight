
import React from 'react';
import { User } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import { getMessageIcon } from '../utils/message-formatter';

interface MessageAvatarProps {
  sender: 'user' | 'bot';
  text: string;
}

const MessageAvatar: React.FC<MessageAvatarProps> = ({ sender, text }) => {
  if (sender === "bot") {
    return (
      <Avatar className="h-9 w-9 border-2 border-argus-teal-500 shadow-sm"><AvatarFallback className="bg-argus-blue-500 text-white">
          {getMessageIcon(text)}
        </AvatarFallback>
      </Avatar>
    );
  } else {
    return (
      <Avatar className="h-9 w-9 border-2 border-argus-blue-400 shadow-sm"><AvatarFallback className="bg-argus-blue-400 text-white">
          <User className="h-5 w-5" />
        </AvatarFallback>
      </Avatar>
    );
  }
};

export default MessageAvatar;

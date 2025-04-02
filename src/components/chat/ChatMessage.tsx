
import React from 'react';
import { cn } from '@/lib/utils';
import { Message } from './types';
import { formatTime } from './utils/message-formatter';
import MessageAvatar from './components/MessageAvatar';
import MessageContent from './components/MessageContent';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <div
      className={cn(
        "flex mb-6", 
        message.sender === "user" ? "justify-end" : "justify-start"
      )}
    >
      <div className={cn(
        "flex items-end gap-2 max-w-[85%]", 
        message.sender === "user" ? "flex-row-reverse" : "flex-row"
      )}>
        <MessageAvatar sender={message.sender} text={message.text} />
        
        <div
          className={cn(
            "px-5 py-4 rounded-2xl shadow-sm text-sm",
            message.sender === "user"
              ? "bg-gradient-to-r from-argus-blue-500 to-argus-blue-600 text-white rounded-br-none"
              : "bg-white border border-gray-100 text-gray-800 rounded-bl-none"
          )}
        >
          <MessageContent message={message} />
          
          <span className={cn(
            "block mt-2 text-xs",
            message.sender === "user" ? "opacity-70" : "text-gray-500"
          )}>
            {formatTime(message.timestamp)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;

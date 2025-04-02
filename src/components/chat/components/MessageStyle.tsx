
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface MessageStyleProps {
  sender: 'user' | 'bot';
  children: ReactNode;
  timestamp: Date;
}

/**
 * Composant de style pour les messages du chat
 * Gère le conteneur, la mise en page et l'alignement selon l'expéditeur
 */
export const MessageStyle: React.FC<MessageStyleProps> = ({ 
  sender, 
  children,
  timestamp 
}) => {
  const formattedTime = formatTime(timestamp);

  return (
    <div
      className={cn(
        "flex mb-6", 
        sender === "user" ? "justify-end" : "justify-start"
      )}
    >
      <div className={cn(
        "flex items-end gap-2 max-w-[85%]", 
        sender === "user" ? "flex-row-reverse" : "flex-row"
      )}>
        {children}
      </div>
    </div>
  );
};

export const MessageBubble: React.FC<{
  sender: 'user' | 'bot';
  timestamp: Date;
  children: ReactNode;
}> = ({ sender, timestamp, children }) => {
  const formattedTime = formatTime(timestamp);

  return (
    <div
      className={cn(
        "px-5 py-4 rounded-2xl shadow-sm text-sm",
        sender === "user"
          ? "bg-gradient-to-r from-argus-blue-500 to-argus-blue-600 text-white rounded-br-none"
          : "bg-white border border-gray-100 text-gray-800 rounded-bl-none"
      )}
    >
      {children}
      
      <span className={cn(
        "block mt-2 text-xs",
        sender === "user" ? "opacity-70" : "text-gray-500"
      )}>
        {formattedTime}
      </span>
    </div>
  );
};

/**
 * Format timestamp in HH:MM format
 */
export const formatTime = (date: Date) => {
  return date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
};

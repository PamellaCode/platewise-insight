
import React, { useRef, useEffect } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Message } from './types';
import ChatMessage from './ChatMessage';
import ChatTypingIndicator from './ChatTypingIndicator';
import ChatPromptGroup from './ChatPromptGroup';
import ChatLicensePlateInput from './ChatLicensePlateInput';

interface ChatMessagesListProps {
  messages: Message[];
  isTyping: boolean;
  onPromptClick: (text: string) => void;
  onLicensePlateSubmit: (licensePlate: string) => void;
  followUpPrompts: Array<{ text: string; icon: string }>;
}

const ChatMessagesList: React.FC<ChatMessagesListProps> = ({ 
  messages, 
  isTyping, 
  onPromptClick, 
  onLicensePlateSubmit,
  followUpPrompts 
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <ScrollArea className="flex-grow p-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="space-y-4">
        {messages.map((message) => (
          <div key={message.id}>
            <ChatMessage message={message} />
            
            {/* Affichage du champ de saisie de plaque après le premier message bot */}
            {message.sender === 'bot' && message.showLicensePlateInput && (
              <ChatLicensePlateInput onSubmit={onLicensePlateSubmit} />
            )}
            
            {/* Affichage des questions prédéfinies après avoir obtenu les infos du véhicule */}
            {message.sender === 'bot' && message.showPrompts && (
              <ChatPromptGroup 
                prompts={followUpPrompts} 
                onPromptClick={onPromptClick} 
              />
            )}
          </div>
        ))}
        
        {/* Typing Indicator */}
        {isTyping && <ChatTypingIndicator />}
        
        <div ref={messagesEndRef} />
      </div>
    </ScrollArea>
  );
};

export default ChatMessagesList;

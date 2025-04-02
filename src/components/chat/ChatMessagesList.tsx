
import React, { useRef, useEffect } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Message } from './types';
import ChatMessage from './ChatMessage';
import ChatTypingIndicator from './ChatTypingIndicator';
import ChatPromptGroup from './ChatPromptGroup';
import ChatLicensePlateInput from './ChatLicensePlateInput';
import { Separator } from "@/components/ui/separator";
import { Bot } from 'lucide-react';

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

  // Ajoute une animation pour le dernier message ajouté
  const lastMessageIndex = messages.length - 1;

  return (
    <ScrollArea className="flex-grow p-4 bg-gradient-to-br from-gray-50 to-blue-50">
      {messages.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-center p-6">
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
            <Bot className="h-8 w-8 text-argus-blue-500" />
          </div>
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            Commencez une nouvelle conversation
          </h3>
          <p className="text-sm text-gray-500 max-w-sm">
            Posez une question à notre assistant pour estimer la valeur de votre véhicule.
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {messages.map((message, index) => (
            <div 
              key={message.id} 
              className={index === lastMessageIndex ? "animate-fade-in" : ""}
            >
              <ChatMessage message={message} />
              
              {/* Affichage du champ de saisie de plaque après le premier message bot */}
              {message.sender === 'bot' && message.showLicensePlateInput && (
                <div className="ml-12 mt-2 animate-scale-in">
                  <ChatLicensePlateInput onSubmit={onLicensePlateSubmit} />
                </div>
              )}
              
              {/* Affichage des questions prédéfinies après avoir obtenu les infos du véhicule */}
              {message.sender === 'bot' && message.showPrompts && (
                <div className="mt-4 mb-6 animate-fade-in">
                  <Separator className="mb-4" />
                  <ChatPromptGroup 
                    prompts={followUpPrompts} 
                    onPromptClick={onPromptClick} 
                  />
                </div>
              )}
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="animate-pulse">
              <ChatTypingIndicator />
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      )}
    </ScrollArea>
  );
};

export default ChatMessagesList;

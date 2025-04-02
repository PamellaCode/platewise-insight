
import React from 'react';
import { Card } from '@/components/ui/card';
import ChatHeader from './ChatHeader';
import ChatMessagesList from './ChatMessagesList';
import ChatInput from './ChatInput';
import { useChatMessages } from './useChatMessages';

// Options de suivi après l'estimation
const followUpPrompts = [
  { text: "Comparer mon véhicule à des modèles similaires", icon: "📊" },
  { text: "Comprendre comment la valeur de mon véhicule évolue dans le temps", icon: "📈" },
  { text: "Savoir si c'est le bon moment pour vendre mon véhicule", icon: "⏰" },
  { text: "Conseils pour vendre rapidement", icon: "💡" },
];

const ChatContainer: React.FC = () => {
  const {
    sessionId,
    messages,
    isTyping,
    handleSend,
    handlePromptClick,
    handleLicensePlateSubmit
  } = useChatMessages();
  
  return (
    <Card className="flex flex-col h-[600px] w-full bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
      {/* Header */}
      <ChatHeader sessionId={sessionId} />
      
      {/* Messages Container */}
      <ChatMessagesList 
        messages={messages}
        isTyping={isTyping}
        onPromptClick={handlePromptClick}
        onLicensePlateSubmit={handleLicensePlateSubmit}
        followUpPrompts={followUpPrompts}
      />
      
      {/* Input Area */}
      <ChatInput onSendMessage={handleSend} isTyping={isTyping} />
    </Card>
  );
};

export default ChatContainer;

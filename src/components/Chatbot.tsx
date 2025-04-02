
import React from 'react';
import ChatContainer from './chat/ChatContainer';
import { Toaster } from '@/components/ui/toaster';

const Chatbot: React.FC = () => {
  return (
    <>
      <ChatContainer />
      <Toaster />
    </>
  );
};

export default Chatbot;

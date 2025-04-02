
import React from 'react';
import { Message } from './types';
import { MessageStyle, MessageBubble } from './components/MessageStyle';
import MessageAvatar from './components/MessageAvatar';
import MessageContent from './components/MessageContent';

interface ChatMessageProps {
  message: Message;
}

/**
 * Composant principal pour l'affichage des messages du chat
 * Utilise les composants modulaires refactorisés
 */
const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <MessageStyle sender={message.sender} timestamp={message.timestamp}>
      <MessageAvatar sender={message.sender} text={message.text} />
      
      <MessageBubble sender={message.sender} timestamp={message.timestamp}>
        <MessageContent message={message} />
      </MessageBubble>
    </MessageStyle>
  );
};

export default ChatMessage;

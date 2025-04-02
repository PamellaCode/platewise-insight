
import React from 'react';
import ChatPrompt from './ChatPrompt';

interface ChatPromptGroupProps {
  prompts: Array<{
    text: string;
    icon?: string;
  }>;
  onPromptClick: (text: string) => void;
}

const ChatPromptGroup: React.FC<ChatPromptGroupProps> = ({ prompts, onPromptClick }) => {
  return (
    <div className="flex flex-col space-y-1 mt-3">
      <p className="text-xs text-gray-500 mb-1">Choisissez une option :</p>
      {prompts.map((prompt, index) => (
        <ChatPrompt
          key={index}
          text={prompt.text}
          icon={prompt.icon}
          onClick={() => onPromptClick(prompt.text)}
        />
      ))}
    </div>
  );
};

export default ChatPromptGroup;

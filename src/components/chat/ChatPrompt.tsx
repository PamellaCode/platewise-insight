
import React from 'react';

interface ChatPromptProps {
  text: string;
  icon?: string;
  onClick: () => void;
}

const ChatPrompt: React.FC<ChatPromptProps> = ({ text, icon, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="text-left w-full flex items-center gap-2 px-3 py-2 my-1 rounded-lg hover:bg-blue-50 border border-gray-200 text-sm transition-all hover:border-blue-200"
    >
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </button>
  );
};

export default ChatPrompt;

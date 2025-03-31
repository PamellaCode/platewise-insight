
import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar } from '@/components/ui/avatar';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Bonjour ! Je suis votre assistant AutoCote. Comment puis-je vous aider aujourd'hui ?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newUserMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInput('');
    setIsTyping(true);

    // Simuler une réponse du bot après un délai
    setTimeout(() => {
      const botResponses = [
        "Pour estimer la valeur de votre véhicule, j'ai besoin de sa plaque d'immatriculation.",
        "Je peux vous aider à calculer la cote Argus de votre véhicule. Avez-vous votre plaque d'immatriculation ?",
        "Vous pouvez également saisir votre plaque d'immatriculation dans le champ prévu à cet effet en haut de la page.",
        "Notre système utilise l'IA pour vous fournir une estimation précise basée sur les données de marché actuelles.",
        "Avez-vous des questions spécifiques concernant votre véhicule ou nos abonnements ?",
      ];

      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="chatbot-container border rounded-lg shadow-lg bg-white overflow-hidden flex flex-col h-[400px]">
      <div className="bg-auto-blue-500 text-white p-3">
        <h3 className="font-semibold">Assistant AutoCote</h3>
        <p className="text-xs text-gray-200">En ligne • Répond instantanément</p>
      </div>

      <ScrollArea className="flex-grow p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
          >
            <div
              className={`max-w-[80%] ${
                message.sender === 'user'
                  ? 'bg-auto-blue-500 text-white'
                  : 'bg-gray-100 text-gray-800'
              } rounded-lg p-3`}
            >
              {message.sender === 'bot' && (
                <div className="flex items-center mb-1">
                  <Avatar className="h-6 w-6 mr-2">
                    <div className="bg-auto-gold flex items-center justify-center h-full w-full rounded-full text-xs font-bold">
                      AC
                    </div>
                  </Avatar>
                  <span className="text-xs font-semibold">Assistant</span>
                </div>
              )}
              <p className="text-sm">{message.text}</p>
              <span className="text-xs opacity-70 block text-right mt-1">
                {formatTime(message.timestamp)}
              </span>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start mb-4">
            <div className="bg-gray-100 text-gray-800 rounded-lg p-3">
              <div className="flex space-x-1">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </ScrollArea>

      <form onSubmit={handleSend} className="border-t p-2 flex items-center">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Posez votre question..."
          className="flex-grow border-none focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <Button type="submit" size="sm" variant="ghost" disabled={!input.trim()}>
          <Send className="h-5 w-5" />
        </Button>
      </form>
    </div>
  );
};

export default Chatbot;


import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';

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
    <div className="chatbot-container flex flex-col h-[500px] rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-argus-blue-500 to-argus-blue-400 text-white p-4 flex items-center gap-3">
        <div className="relative">
          <Avatar className="h-10 w-10 border-2 border-white">
            <div className="bg-auto-gold flex items-center justify-center h-full w-full rounded-full text-white text-sm font-bold">
              AC
            </div>
          </Avatar>
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
        </div>
        <div>
          <h3 className="font-bold text-lg">Assistant AutoCote</h3>
          <p className="text-xs text-blue-50 opacity-90">Répond instantanément • Expert automobile</p>
        </div>
      </div>

      <ScrollArea className="flex-grow p-4 bg-gradient-to-b from-gray-50 to-white">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
          >
            {message.sender === 'user' ? (
              <Card className="max-w-[80%] bg-gradient-to-br from-argus-blue-500 to-argus-blue-600 text-white rounded-2xl rounded-tr-none p-3 shadow-md">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-center">
                    <Avatar className="h-6 w-6 mr-2 bg-white/20">
                      <User className="h-4 w-4 text-white" />
                    </Avatar>
                    <span className="text-xs font-medium text-blue-50">Vous</span>
                  </div>
                  <span className="text-xs opacity-70 ml-2">{formatTime(message.timestamp)}</span>
                </div>
                <p className="text-sm">{message.text}</p>
              </Card>
            ) : (
              <Card className="max-w-[80%] bg-white border border-blue-100 rounded-2xl rounded-tl-none p-3 shadow-sm">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-center">
                    <Avatar className="h-6 w-6 mr-2 bg-gradient-to-r from-argus-blue-500 to-auto-gold">
                      <Bot className="h-4 w-4 text-white" />
                    </Avatar>
                    <span className="text-xs font-semibold text-argus-blue-500">Assistant</span>
                  </div>
                  <span className="text-xs text-gray-400 ml-2">{formatTime(message.timestamp)}</span>
                </div>
                <p className="text-sm text-gray-700">{message.text}</p>
              </Card>
            )}
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start mb-4">
            <Card className="max-w-[80%] bg-white border border-blue-100 rounded-2xl rounded-tl-none p-3">
              <div className="flex items-center">
                <Avatar className="h-6 w-6 mr-2 bg-gradient-to-r from-argus-blue-500 to-auto-gold">
                  <Bot className="h-4 w-4 text-white" />
                </Avatar>
                <span className="text-xs font-semibold text-argus-blue-500 mr-2">Assistant</span>
                <div className="flex space-x-1">
                  <span className="w-2 h-2 bg-argus-blue-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-argus-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                  <span className="w-2 h-2 bg-argus-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                </div>
              </div>
            </Card>
          </div>
        )}
        <div ref={messagesEndRef} />
      </ScrollArea>

      <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100 flex items-center gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Posez votre question..."
          className="flex-grow rounded-full border-gray-200 focus-visible:ring-1 focus-visible:ring-argus-blue-500 focus-visible:ring-offset-1 px-4 py-3"
        />
        <Button 
          type="submit" 
          size="icon" 
          className={`rounded-full w-10 h-10 ${!input.trim() ? 'bg-gray-200 text-gray-400' : 'bg-gradient-to-r from-argus-blue-500 to-argus-teal-500 text-white hover:shadow-lg transition-all'}`} 
          disabled={!input.trim()}
        >
          <Send className="h-5 w-5" />
        </Button>
      </form>
    </div>
  );
};

export default Chatbot;

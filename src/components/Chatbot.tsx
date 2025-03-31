
import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isTyping?: boolean;
  hasCarInfo?: boolean;
  carInfo?: {
    model: string;
    year: number;
    mileage: number;
    price: number;
  };
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Bonjour ! Je suis votre assistant AutoCote. Comment puis-je vous aider aujourd'hui ?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const simulateTyping = (text: string, callback: (text: string) => void) => {
    let i = 0;
    const typingSpeed = 30; // ms per character
    const tempText = "";
    
    // Add a typing indicator
    setIsTyping(true);
    
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        callback(text);
      }
    }, typingSpeed);
  };
  
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const newUserMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simuler différentes réponses basées sur l'entrée de l'utilisateur
    setTimeout(() => {
      if (input.toLowerCase().includes('bonjour') || input.toLowerCase().includes('salut')) {
        simulateTyping("Bonjour ! Je suis votre assistant ArgusAI. Comment puis-je vous aider à estimer la valeur de votre véhicule ?", (text) => {
          const botMessage: Message = {
            id: messages.length + 2,
            text,
            sender: 'bot',
            timestamp: new Date()
          };
          setMessages(prev => [...prev, botMessage]);
          setIsTyping(false);
        });
      } 
      else if (input.toLowerCase().includes('estimer') || input.toLowerCase().includes('valeur') || input.toLowerCase().includes('voiture')) {
        simulateTyping("Bien sûr ! Indique-moi la plaque d'immatriculation de ton véhicule.", (text) => {
          const botMessage: Message = {
            id: messages.length + 2,
            text,
            sender: 'bot',
            timestamp: new Date()
          };
          setMessages(prev => [...prev, botMessage]);
          setIsTyping(false);
        });
      }
      else if (input.match(/[A-Z]{2}-\d{3}-[A-Z]{2}/) || input.toLowerCase() === 'ab-123-cd') {
        simulateTyping("Merci ! Je récupère les informations… 🚗🔍", (text) => {
          const botMessage: Message = {
            id: messages.length + 2,
            text,
            sender: 'bot',
            timestamp: new Date(),
            hasCarInfo: true,
            carInfo: {
              model: "Peugeot 208",
              year: 2019,
              mileage: 75000,
              price: 12500
            }
          };
          setMessages(prev => [...prev, botMessage]);
          setIsTyping(false);
        });
      }
      else {
        simulateTyping("Pour estimer la valeur de votre véhicule, j'ai besoin de sa plaque d'immatriculation. Pouvez-vous me la communiquer au format XX-123-XX ?", (text) => {
          const botMessage: Message = {
            id: messages.length + 2,
            text,
            sender: 'bot',
            timestamp: new Date()
          };
          setMessages(prev => [...prev, botMessage]);
          setIsTyping(false);
        });
      }
    }, 1000);
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  return (
    <Card className="flex flex-col h-[600px] w-full bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
      {/* Header */}
      <div className="flex items-center p-4 border-b bg-gradient-to-r from-argus-blue-500 to-argus-teal-500 text-white">
        <div className="bg-white rounded-full p-2 mr-3">
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-argus-blue-500">
            <Car className="h-5 w-5 text-white" />
          </div>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-0">AssistantAI</h3>
          <p className="text-xs opacity-80 mb-0">En ligne</p>
        </div>
      </div>
      
      {/* Messages Container */}
      <ScrollArea className="flex-grow p-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex",
                message.sender === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div className="flex items-end gap-2 max-w-[80%]">
                {message.sender === "bot" && (
                  <Avatar className="h-8 w-8 border-2 border-argus-teal-500">
                    <AvatarFallback className="bg-argus-blue-500 text-white">
                      <Car className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                )}
                
                <div
                  className={cn(
                    "px-4 py-3 rounded-2xl shadow-sm text-sm",
                    message.sender === "user"
                      ? "bg-gradient-to-r from-argus-blue-500 to-argus-blue-600 text-white rounded-br-none"
                      : "bg-white border border-gray-100 text-gray-800 rounded-bl-none"
                  )}
                >
                  {message.text}
                  
                  {/* Car Information Display */}
                  {message.hasCarInfo && message.carInfo && (
                    <div className="mt-3 pt-3 border-t border-gray-200 space-y-2 animate-fade-in">
                      <div className="flex items-center gap-1.5 text-sm">
                        <span className="font-bold">🎯 Modèle :</span> 
                        <span>{message.carInfo.model}, Année : {message.carInfo.year}, Kilométrage : {message.carInfo.mileage.toLocaleString()} km</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm">
                        <span className="font-bold">💰 Estimation actuelle :</span>
                        <span className="font-semibold text-argus-teal-500">
                          {message.carInfo.price.toLocaleString()} € (Basé sur les tendances du marché)
                        </span>
                      </div>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="w-full mt-2 text-sm"
                      >
                        📊 Voir l'évolution du prix
                      </Button>
                      <Button
                        size="sm"
                        className="w-full mt-1 text-sm"
                      >
                        Affiner l'estimation
                      </Button>
                    </div>
                  )}
                  
                  <span className="block mt-1 text-xs opacity-70">
                    {formatTime(message.timestamp)}
                  </span>
                </div>
                
                {message.sender === "user" && (
                  <Avatar className="h-8 w-8 border-2 border-argus-blue-400">
                    <AvatarFallback className="bg-argus-blue-400 text-white">
                      <User className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-end gap-2 max-w-[80%]">
                <Avatar className="h-8 w-8 border-2 border-argus-teal-500">
                  <AvatarFallback className="bg-argus-blue-500 text-white">
                    <Car className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
                <div className="px-4 py-3 rounded-2xl shadow-sm text-sm bg-white border border-gray-100 text-gray-800 rounded-bl-none">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-argus-blue-400 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-2 h-2 rounded-full bg-argus-blue-400 animate-bounce" style={{ animationDelay: "300ms" }}></div>
                    <div className="w-2 h-2 rounded-full bg-argus-blue-400 animate-bounce" style={{ animationDelay: "600ms" }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>
      
      {/* Input Area */}
      <form onSubmit={handleSend} className="p-4 border-t border-gray-100 bg-white">
        <div className="flex space-x-2">
          <Input
            className="flex-grow focus-visible:ring-argus-blue-400"
            placeholder="Écrivez votre message ici..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isTyping}
          />
          <Button 
            type="submit" 
            size="icon"
            disabled={!input.trim() || isTyping}
            className="bg-gradient-to-r from-argus-blue-500 to-argus-teal-500 text-white"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Chatbot;

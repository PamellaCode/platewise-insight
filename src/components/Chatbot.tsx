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
  const [messages, setMessages] = useState<Message[]>([{
    id: 1,
    text: "Bonjour ! Je suis votre assistant AutoCote. Comment puis-je vous aider aujourd'hui ?",
    sender: 'bot',
    timestamp: new Date()
  }]);
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

    // Simuler une réponse du bot après un délai
    setTimeout(() => {
      const botResponses = ["Pour estimer la valeur de votre véhicule, j'ai besoin de sa plaque d'immatriculation.", "Je peux vous aider à calculer la cote Argus de votre véhicule. Avez-vous votre plaque d'immatriculation ?", "Vous pouvez également saisir votre plaque d'immatriculation dans le champ prévu à cet effet en haut de la page.", "Notre système utilise l'IA pour vous fournir une estimation précise basée sur les données de marché actuelles.", "Avez-vous des questions spécifiques concernant votre véhicule ou nos abonnements ?"];
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  return;
};
export default Chatbot;
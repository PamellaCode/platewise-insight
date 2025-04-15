
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simuler une requête API
    setTimeout(() => {
      toast({
        title: "Inscription réussie !",
        description: "Merci de vous être inscrit à notre newsletter.",
      });
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="mt-16 bg-gradient-to-r from-argus-red-900/60 via-argus-violet-900/60 to-argus-blue-900/60 rounded-xl p-8 shadow-xl backdrop-blur-sm border border-white/10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-white">Restez informé des dernières tendances</h2>
          <p className="text-gray-300">
            Inscrivez-vous à notre newsletter pour recevoir nos analyses mensuelles sur l'évolution du marché automobile.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-auto">
          <Input 
            placeholder="Votre email" 
            className="w-full md:w-auto bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
          <Button 
            className="backdrop-blur-sm bg-gradient-to-r from-argus-red-600 via-argus-violet-600 to-argus-blue-600 hover:from-argus-red-500 hover:via-argus-violet-500 hover:to-argus-blue-500 text-white shadow-lg"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Envoi...' : 'S\'abonner'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSection;

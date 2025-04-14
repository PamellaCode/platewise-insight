
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NewsletterSection: React.FC = () => {
  return (
    <div className="mt-16 bg-gradient-to-r from-argus-red-50 via-argus-violet-100 to-argus-blue-100 rounded-xl p-8 shadow-md backdrop-blur-sm border border-white/40">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Restez informé des dernières tendances</h2>
          <p className="text-gray-600">
            Inscrivez-vous à notre newsletter pour recevoir nos analyses mensuelles sur l'évolution du marché automobile.
          </p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Input placeholder="Votre email" className="w-full md:w-auto bg-white/80 backdrop-blur-sm" />
          <Button className="backdrop-blur-sm">S'abonner</Button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;

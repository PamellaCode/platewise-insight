
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AssistantAIPromo: React.FC = () => {
  return (
    <Card className="border border-auto-blue-100 bg-gradient-to-br from-auto-blue-50 to-auto-teal-50">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
            <MessageCircle className="h-8 w-8 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Besoin d'aide ?</h3>
            <p className="text-sm text-gray-500 mt-1">
              Notre assistant IA peut vous aider à estimer la valeur de votre véhicule en temps réel.
            </p>
          </div>
          <Button asChild className="w-full mt-2">
            <Link to="/dashboard/assistant-ai">
              Consulter l'Assistant IA
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AssistantAIPromo;

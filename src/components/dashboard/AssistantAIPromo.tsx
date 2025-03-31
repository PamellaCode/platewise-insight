
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AssistantAIPromo: React.FC = () => {
  return (
    <Card className="border border-auto-blue-100 bg-gradient-to-br from-auto-blue-50 to-auto-teal-50">
      <CardContent className="p-6 text-center">
        <div className="bg-white rounded-full p-3 w-16 h-16 mx-auto mb-4 shadow-sm flex items-center justify-center">
          <MessageCircle className="h-8 w-8 text-argus-blue-500" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Assistant ArgusAI</h3>
        <p className="text-gray-600 mb-4">
          Posez vos questions et obtenez des estimations personnalisées avec notre assistant intelligent.
        </p>
        <Button asChild>
          <Link to="/dashboard/assistant-ai">
            <MessageCircle className="h-4 w-4 mr-2" /> Discuter avec l'assistant
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default AssistantAIPromo;

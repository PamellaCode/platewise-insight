
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const PricingPlans: React.FC = () => {
  const plans = [
    {
      name: 'Bronze',
      price: '5,99€',
      period: 'par mois',
      description: 'Idéal pour les particuliers avec un usage occasionnel.',
      features: [
        '1 estimation par mois',
        'Résultat cote Argus uniquement',
        'Accès au chatbot assistant',
        'Estimations supplémentaires à 3€ par unité',
        'Annulation à tout moment',
      ],
      popular: false,
      color: 'bg-amber-700',
      textColor: 'text-amber-700',
      borderColor: 'border-amber-200',
      buttonVariant: 'outline' as const,
      estimations: 1,
    },
    {
      name: 'Argent',
      price: '9,99€',
      period: 'par mois',
      description: 'Parfait pour les particuliers avec plusieurs véhicules.',
      features: [
        '3 estimations par mois',
        'Résultat cote Argus détaillé',
        'Annonce visuelle pour Leboncoin',
        "Courbe d'évolution de la valeur",
        'Estimations supplémentaires à 3€ par unité',
        'Support prioritaire',
      ],
      popular: true,
      color: 'bg-slate-700',
      textColor: 'text-slate-700',
      borderColor: 'border-slate-200',
      buttonVariant: 'default' as const,
      estimations: 3,
    },
    {
      name: 'Or',
      price: '49,99€',
      period: 'par mois',
      description: 'Solution complète pour les professionnels de l\'automobile.',
      features: [
        '10 estimations par mois',
        'Résultat cote Argus détaillé',
        'Annonce visuelle pour Leboncoin',
        "Courbe d'évolution de la valeur",
        'Accès aux historiques sur 10 véhicules',
        "Carte d'évolution de la valeur du modèle",
        'Estimations supplémentaires à 10€ par unité',
        'Support dédié et prioritaire',
      ],
      popular: false,
      color: 'bg-auto-gold',
      textColor: 'text-auto-gold',
      borderColor: 'border-auto-gold-100',
      buttonVariant: 'outline' as const,
      estimations: 10,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {plans.map((plan) => (
        <Card 
          key={plan.name}
          className={`border ${plan.popular ? 'border-2 ' + plan.borderColor + ' shadow-lg scale-105' : 'border'} rounded-xl overflow-hidden relative animate-fade-in`}
        >
          {plan.popular && (
            <div className="absolute top-0 right-0 bg-auto-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              POPULAIRE
            </div>
          )}
          <div className={`h-2 w-full ${plan.color}`}></div>
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-baseline">
              <span>{plan.name}</span>
            </CardTitle>
            <div className="mt-2">
              <span className="text-3xl font-bold">{plan.price}</span>
              <span className="text-sm text-gray-500 ml-1">{plan.period}</span>
            </div>
            <CardDescription className="mt-2">{plan.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-50 p-3">
                <span className="text-sm font-medium">{plan.estimations} estimation{plan.estimations > 1 ? 's' : ''} par mois</span>
                <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                  <div 
                    className={`${plan.color} h-2 rounded-full`} 
                    style={{ width: `${(plan.estimations / 10) * 100}%` }}
                  ></div>
                </div>
              </div>
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className={`h-5 w-5 ${plan.textColor} mr-2 flex-shrink-0`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              variant={plan.buttonVariant}
              className={`w-full ${plan.buttonVariant === 'outline' ? plan.textColor + ' border-' + plan.textColor.split('-')[1] : 'bg-auto-blue-500 hover:bg-auto-blue-600'}`}
            >
              S'abonner maintenant
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default PricingPlans;

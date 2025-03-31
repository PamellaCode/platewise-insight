
import React from 'react';
import { CheckCircle2, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const PricingPlans: React.FC = () => {
  const plans = [{
    name: 'Bronze',
    price: '5,99€',
    period: 'par mois',
    description: 'Idéal pour les particuliers avec un usage occasionnel.',
    features: ['1 estimation par mois', 'Résultat cote Argus uniquement', 'Accès au chatbot assistant', 'Estimations supplémentaires à 3€ par unité', 'Annulation à tout moment'],
    popular: false,
    color: 'bg-amber-700',
    textColor: 'text-amber-700',
    borderColor: 'border-amber-200',
    buttonVariant: 'outline' as const,
    estimations: 1,
    gradient: 'from-amber-500/20 to-amber-700/20'
  }, {
    name: 'Argent',
    price: '9,99€',
    period: 'par mois',
    description: 'Parfait pour les particuliers avec plusieurs véhicules.',
    features: ['3 estimations par mois', 'Résultat cote Argus détaillé', 'Annonce visuelle pour Leboncoin', "Courbe d'évolution de la valeur", 'Estimations supplémentaires à 3€ par unité', 'Support prioritaire'],
    popular: true,
    color: 'bg-slate-700',
    textColor: 'text-slate-700',
    borderColor: 'border-slate-200',
    buttonVariant: 'default' as const,
    estimations: 3,
    gradient: 'from-slate-500/20 to-slate-700/20'
  }, {
    name: 'Or',
    price: '49,99€',
    period: 'par mois',
    description: 'Solution complète pour les professionnels de l\'automobile.',
    features: ['10 estimations par mois', 'Résultat cote Argus détaillé', 'Annonce visuelle pour Leboncoin', "Courbe d'évolution de la valeur", 'Accès aux historiques sur 10 véhicules', "Carte d'évolution de la valeur du modèle", 'Estimations supplémentaires à 10€ par unité', 'Support dédié et prioritaire'],
    popular: false,
    color: 'bg-auto-gold',
    textColor: 'text-auto-gold',
    borderColor: 'border-auto-gold-100',
    buttonVariant: 'outline' as const,
    estimations: 10,
    gradient: 'from-amber-500/20 to-auto-gold/20'
  }];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-8 px-4">
      {plans.map((plan, index) => (
        <div 
          key={plan.name} 
          className="relative w-full"
        >
          <Card 
            className={`h-full flex flex-col border-2 rounded-2xl overflow-hidden relative group
              ${plan.popular ? plan.borderColor + ' shadow-2xl' : 'border-gray-200 shadow-lg'} 
              w-full min-w-[300px] max-w-[320px] mx-auto
              transition-all duration-500 ease-out
              hover:shadow-2xl hover:-translate-y-2
              before:absolute before:inset-0 before:z-0 before:bg-gradient-to-br before:${plan.gradient} before:opacity-0 
              hover:before:opacity-100 before:transition-opacity before:duration-500`}
          >
            {plan.popular && (
              <div className="absolute -top-4 right-0 left-0 flex justify-center z-20">
                <div className="flex items-center gap-1 bg-auto-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md animate-pulse">
                  <Star className="h-3 w-3" fill="white" /> POPULAIRE
                </div>
              </div>
            )}
            <div className={`h-3 w-full ${plan.color} relative z-10`}>
              <div className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-[2px] ${plan.color}`} />
            </div>
            <CardHeader className="pb-2 relative z-10">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold flex items-baseline">
                  <span>{plan.name}</span>
                </CardTitle>
                <HoverCard>
                  <HoverCardTrigger>
                    <div className={`w-8 h-8 rounded-full ${plan.color} flex items-center justify-center 
                      text-white text-sm font-bold cursor-help transition-transform hover:scale-110`}>?</div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <p className="text-sm">{plan.description}</p>
                    <p className="text-xs mt-2 opacity-80">Cliquez sur "S'abonner maintenant" pour profiter de ces avantages.</p>
                  </HoverCardContent>
                </HoverCard>
              </div>
              <div className="mt-4 relative">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-sm text-gray-500 ml-1">{plan.period}</span>
              </div>
              <CardDescription className="mt-3">{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow relative z-10">
              <div className="space-y-4">
                <div className="rounded-lg bg-gray-50/80 backdrop-blur-sm p-3 group-hover:bg-white/90 transition-colors duration-500">
                  <span className="text-sm font-medium">{plan.estimations} estimation{plan.estimations > 1 ? 's' : ''} par mois</span>
                  <div className="w-full bg-gray-200 h-2 rounded-full mt-2 overflow-hidden">
                    <div className={`${plan.color} h-2 rounded-full transition-all duration-1000 ease-in-out`} 
                      style={{
                        width: `${plan.estimations / 10 * 100}%`,
                        animationName: 'growWidth',
                        animationDuration: '1.5s',
                        animationTimingFunction: 'cubic-bezier(0.65, 0, 0.35, 1)',
                      }}
                    ></div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start group/feature">
                      <CheckCircle2 className={`h-5 w-5 ${plan.textColor} mr-2 flex-shrink-0 transition-transform group-hover/feature:scale-110`} />
                      <span className="text-sm transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter className="mt-auto pt-6 relative z-10">
              <Button 
                variant={plan.buttonVariant} 
                className={`w-full ${
                  plan.buttonVariant === 'outline' 
                    ? plan.textColor + ' border-' + plan.textColor.split('-')[1] + ' hover:bg-' + plan.textColor.split('-')[1] + '/10' 
                    : 'bg-auto-blue-500 hover:bg-auto-blue-600'
                  } py-6 text-base font-semibold transition-all duration-300 group-hover:scale-105 group-hover:shadow-md`} 
                asChild
              >
                <Link to="/register">S'abonner maintenant</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default PricingPlans;

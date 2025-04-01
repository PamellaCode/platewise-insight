import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, CreditCard, AlertCircle } from 'lucide-react';

const SubscriptionTab = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');

  const subscription = {
    plan: 'essentiel' as 'essentiel' | 'standard' | 'expert',
    displayName: 'Essentiel',
    creditsTotal: 1,
    creditsUsed: 1,
    renewalDate: new Date('2023-12-31'),
    status: 'active' as 'active' | 'canceled' | 'past_due',
    price: billingCycle === 'monthly' ? '5,99€' : '57,50€',
    nextBillingDate: new Date('2023-12-31'),
    paymentMethod: {
      type: 'card',
      last4: '4242',
      expiryMonth: 12,
      expiryYear: 2025,
      brand: 'Visa'
    }
  };
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
  };

  const usagePercentage = subscription.creditsUsed / subscription.creditsTotal * 100;
  const plans = [{
    name: 'Essentiel',
    price: billingCycle === 'monthly' ? '5,99€' : '57,50€',
    period: billingCycle === 'monthly' ? 'par mois' : 'par an',
    features: ['1 estimation par mois', 'Résultat cote Argus uniquement', 'Accès au chatbot assistant'],
    popular: false,
    current: subscription.plan === 'essentiel'
  }, {
    name: 'Standard',
    price: billingCycle === 'monthly' ? '9,99€' : '95,90€',
    period: billingCycle === 'monthly' ? 'par mois' : 'par an',
    features: ['3 estimations par mois', 'Résultat cote Argus détaillé', 'Annonce visuelle pour Leboncoin', "Courbe d'évolution de la valeur"],
    popular: true,
    current: subscription.plan === 'standard'
  }, {
    name: 'Expert',
    price: billingCycle === 'monthly' ? '49,99€' : '479,90€',
    period: billingCycle === 'monthly' ? 'par mois' : 'par an',
    features: ['10 estimations par mois', 'Résultat cote Argus détaillé', 'Annonce visuelle pour Leboncoin', "Courbe d'évolution de la valeur", 'Accès aux historiques sur 10 véhicules'],
    popular: false,
    current: subscription.plan === 'expert'
  }];

  return <div className="space-y-8">
      <h1 className="text-2xl font-bold">Mon abonnement</h1>
      
      <Card className="border-2 border-gray-200">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl">Formule {subscription.displayName}</CardTitle>
              <CardDescription>
                {subscription.status === 'active' && 'Abonnement actif'}
                {subscription.status === 'canceled' && 'Abonnement résilié'}
                {subscription.status === 'past_due' && 'Paiement en retard'}
              </CardDescription>
            </div>
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-1" />
              Actif
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Prochaine facturation</h3>
              <p className="font-medium">{formatDate(subscription.nextBillingDate)}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Méthode de paiement</h3>
              <p className="font-medium flex items-center">
                <CreditCard className="h-4 w-4 mr-2" />
                {subscription.paymentMethod.brand} •••• {subscription.paymentMethod.last4}
              </p>
            </div>
          </div>
          
          <div className="space-y-2 pt-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Crédits d'estimation</span>
              <span className="text-sm font-medium">{subscription.creditsUsed} / {subscription.creditsTotal} utilisés</span>
            </div>
            <Progress value={usagePercentage} className="h-2" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-wrap justify-between gap-2">
          <Button variant="outline" size="sm" className="text-blue-600">Modifier le mode de paiement</Button>
          <Button variant="destructive" size="sm">Annuler l'abonnement</Button>
        </CardFooter>
      </Card>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Changer de formule</h2>
        
        <div className="flex justify-center mb-4">
          <Tabs defaultValue="monthly" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="monthly" onClick={() => setBillingCycle('monthly')}>Mensuel</TabsTrigger>
              <TabsTrigger value="annually" onClick={() => setBillingCycle('annually')}>
                Annuel <span className="ml-1 text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">-20%</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map(plan => <Card key={plan.name} className={`border-2 ${plan.current ? 'border-blue-500 shadow-md' : 'border-gray-200'}`}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{plan.name}</CardTitle>
                  {plan.current && <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">Actuel</span>}
                </div>
                <div className="mt-2">
                  <span className="text-2xl font-bold">{plan.price}</span>
                  <span className="text-sm text-gray-500 ml-1">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => <li key={idx} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>)}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant={plan.current ? "outline" : "default"} disabled={plan.current} className={plan.current ? "w-full text-blue-600" : "w-full text-white"}>
                  {plan.current ? 'Formule actuelle' : 'Changer de formule'}
                </Button>
              </CardFooter>
            </Card>)}
        </div>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Acheter des crédits supplémentaires</h2>
        
        <Card className="bg-gray-50">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <p>Besoin de plus d'estimations ? Achetez des crédits supplémentaires pour votre compte.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">1 Crédit</CardTitle>
                    <CardDescription>3,00€</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full text-blue-600">Acheter</Button>
                  </CardFooter>
                </Card>
                
                <Card className="border-2 border-blue-200">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <CardTitle className="text-lg">5 Crédits</CardTitle>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">-10%</span>
                    </div>
                    <CardDescription>13,50€</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="default" size="sm" className="w-full text-white">Acheter</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <CardTitle className="text-lg">10 Crédits</CardTitle>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">-15%</span>
                    </div>
                    <CardDescription>25,50€</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full text-blue-600">Acheter</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Historique de facturation</h2>
        
        <Card>
          <CardContent className="pt-6">
            <div className="rounded-md border">
              <div className="bg-gray-50 px-4 py-3 border-b">
                <div className="grid grid-cols-3 gap-4 font-medium text-sm">
                  <div>Date</div>
                  <div>Description</div>
                  <div className="text-right">Montant</div>
                </div>
              </div>
              <div className="divide-y">
                <div className="px-4 py-3">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>01/11/2023</div>
                    <div>Abonnement Essentiel - Mensuel</div>
                    <div className="text-right">5,99€</div>
                  </div>
                </div>
                <div className="px-4 py-3">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>01/10/2023</div>
                    <div>Abonnement Essentiel - Mensuel</div>
                    <div className="text-right">5,99€</div>
                  </div>
                </div>
                <div className="px-4 py-3">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>17/09/2023</div>
                    <div>Achat de 5 crédits</div>
                    <div className="text-right">13,50€</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
};

export default SubscriptionTab;

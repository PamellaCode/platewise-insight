
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import LicensePlateSearch from '@/components/LicensePlateSearch';
import Chatbot from '@/components/Chatbot';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Car, Check, CreditCard, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const features = [
    {
      name: 'Estimation précise',
      description: 'Notre algorithme d\'IA calcule la valeur précise de votre véhicule basée sur les données du marché en temps réel.',
      icon: <Car className="h-8 w-8 text-auto-gold" />,
    },
    {
      name: 'Simple et rapide',
      description: 'Entrez simplement votre plaque d\'immatriculation et obtenez une estimation détaillée en quelques secondes.',
      icon: <Check className="h-8 w-8 text-auto-gold" />,
    },
    {
      name: 'Sécurité des données',
      description: 'Vos données sont chiffrées et traitées de manière sécurisée. Nous respectons strictement le RGPD.',
      icon: <Shield className="h-8 w-8 text-auto-gold" />,
    },
    {
      name: 'Abonnements flexibles',
      description: 'Choisissez l\'abonnement qui vous convient, du particulier occasionnel au professionnel de l\'automobile.',
      icon: <CreditCard className="h-8 w-8 text-auto-gold" />,
    },
  ];

  const testimonials = [
    {
      name: 'Marie L.',
      role: 'Particulier',
      content: 'Grâce à AutoCote, j\'ai vendu ma voiture 1500€ au-dessus des estimations traditionnelles. L\'estimation était précise et l\'annonce générée m\'a fait gagner un temps précieux !',
      avatarInitial: 'M',
    },
    {
      name: 'Jean D.',
      role: 'Particulier',
      content: 'Interface simple et estimation ultra précise. J\'ai vendu ma voiture en 3 jours au prix exact estimé par AutoCote. Je recommande vivement.',
      avatarInitial: 'J',
    },
    {
      name: 'Garage Martin',
      role: 'Professionnel',
      content: 'Nous utilisons l\'abonnement Or depuis 6 mois et c\'est devenu un outil indispensable pour notre concession. Les estimations sont fiables et les historiques de véhicules nous permettent de faire des offres pertinentes.',
      avatarInitial: 'G',
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Estimez la valeur de votre voiture <span className="text-auto-gold">en quelques secondes</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Grâce à notre technologie d'IA, obtenez une estimation précise de la cote Argus de votre véhicule avec simplement votre plaque d'immatriculation.
          </p>
          
          <div className="max-w-lg mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <LicensePlateSearch />
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button className="bg-auto-gold hover:bg-auto-gold-600 text-auto-blue-700" size="lg" asChild>
              <Link to="/pricing">Voir les abonnements</Link>
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10" size="lg" asChild>
              <Link to="/how-it-works">Comment ça marche</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi choisir AutoCote?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une solution innovante qui révolutionne l'estimation de la valeur des véhicules d'occasion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 border border-gray-200 hover:border-auto-blue-200 transition-all feature-card"
              >
                <div className="mb-4 rounded-full bg-auto-blue-50 p-3 w-14 h-14 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comment ça fonctionne?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Obtenez la valeur précise de votre voiture en 3 étapes simples
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: '01',
                title: 'Saisissez votre plaque',
                description: 'Entrez simplement votre plaque d\'immatriculation dans le champ de recherche.',
              },
              {
                step: '02',
                title: 'Vérification IA',
                description: 'Notre algorithme d\'IA analyse les données et le marché en temps réel.',
              },
              {
                step: '03',
                title: 'Résultat détaillé',
                description: 'Recevez une estimation précise et détaillée de la valeur de votre véhicule.',
              }
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6">
                <div className="text-5xl font-bold text-auto-gold mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-auto-blue-500 hover:bg-auto-blue-600" size="lg" asChild>
              <Link to="/how-it-works">
                En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que nos utilisateurs disent</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez les témoignages de ceux qui ont utilisé AutoCote pour estimer et vendre leurs véhicules
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-auto-blue-100 flex items-center justify-center text-auto-blue-500 font-bold text-xl mr-4">
                    {testimonial.avatarInitial}
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Chat with AI */}
      <section className="py-20 bg-auto-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Posez vos questions à notre assistant IA</h2>
              <p className="text-xl text-gray-600 mb-6">
                Notre assistant intelligent répond à toutes vos questions sur l'estimation de votre véhicule, les abonnements ou le fonctionnement de notre service.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Comment est calculée la cote Argus ?',
                  'Quelle est la différence entre les abonnements ?',
                  'Comment les données sont-elles protégées ?',
                  'Puis-je annuler mon abonnement à tout moment ?'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-auto-gold mr-2 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-auto-blue-500 hover:bg-auto-blue-600" size="lg">
                Discuter avec l'assistant
              </Button>
            </div>
            <div>
              <Chatbot />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-auto-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à connaître la valeur de votre véhicule ?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Essayez gratuitement notre service d'estimation et découvrez la valeur précise de votre véhicule en quelques secondes.
          </p>
          <div className="max-w-lg mx-auto mb-10">
            <LicensePlateSearch />
          </div>
          <Button className="bg-white hover:bg-gray-100 text-auto-blue-500" size="lg" asChild>
            <Link to="/pricing">Voir les abonnements</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;

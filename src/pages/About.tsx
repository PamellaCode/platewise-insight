
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Alexandre Martin",
      role: "Fondateur & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      bio: "Expert en IA avec plus de 10 ans d'expérience dans le secteur automobile."
    },
    {
      name: "Sophie Laurent",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      bio: "Docteure en apprentissage automatique, spécialisée dans les modèles prédictifs."
    },
    {
      name: "Nicolas Dubois",
      role: "Responsable Produit",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      bio: "10 ans d'expérience dans le développement de produits technologiques innovants."
    },
    {
      name: "Marie Leclerc",
      role: "Directrice Marketing",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      bio: "Spécialiste en stratégies marketing digitales et acquisition client."
    }
  ];
  
  const timelineEvents = [
    {
      year: "2020",
      title: "Naissance de l'idée",
      description: "Alexandre Martin, passionné d'IA et d'automobile, conçoit l'idée d'un service d'estimation automobile basé sur l'intelligence artificielle."
    },
    {
      year: "2021",
      title: "Création de l'entreprise",
      description: "ArgusIA est officiellement fondée. L'équipe de base commence à développer les premiers algorithmes d'estimation."
    },
    {
      year: "2022",
      title: "Lancement de la version beta",
      description: "Première version de notre plateforme lancée avec succès. Plus de 1000 utilisateurs testent le service pendant la phase beta."
    },
    {
      year: "2023",
      title: "Lancement officiel",
      description: "ArgusIA ouvre ses portes au grand public. L'application mobile est lancée simultanément avec la plateforme web."
    },
    {
      year: "Aujourd'hui",
      title: "Expansion continue",
      description: "Plus de 50 000 utilisateurs font confiance à ArgusIA pour estimer la valeur de leur véhicule avec précision."
    }
  ];
  
  const values = [
    {
      title: "Innovation",
      description: "Nous repoussons constamment les limites de la technologie pour offrir des estimations toujours plus précises."
    },
    {
      title: "Précision",
      description: "Nos algorithmes sont continuellement affinés pour fournir les estimations les plus précises possibles."
    },
    {
      title: "Transparence",
      description: "Nous expliquons clairement comment nous arrivons à nos estimations, sans frais cachés."
    },
    {
      title: "Accessibilité",
      description: "Nous rendons l'expertise automobile accessible à tous, facilement et rapidement."
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              À propos d'ArgusIA
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              ArgusIA est une startup française spécialisée dans l'estimation de véhicules par intelligence artificielle, 
              offrant des évaluations précises et instantanées basées sur les dernières données du marché automobile.
            </p>
          </div>
          
          {/* Mission Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Notre mission</h2>
              <p className="text-lg text-gray-600">
                Notre mission est de démocratiser l'accès à des estimations automobiles précises, 
                en combinant l'expertise du secteur avec les dernières avancées en intelligence artificielle.
              </p>
              <p className="text-lg text-gray-600">
                Nous croyons que chaque propriétaire de véhicule mérite de connaître la valeur réelle de son bien, 
                sans avoir à se déplacer ou à négocier avec des professionnels qui pourraient sous-estimer sa valeur.
              </p>
              <Button className="mt-4" size="lg" asChild>
                <a href="/how-it-works">Découvrir notre technologie</a>
              </Button>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Nos chiffres clés</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-600">50K+</p>
                  <p className="text-gray-600">Utilisateurs</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-600">98%</p>
                  <p className="text-gray-600">Précision des estimations</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-600">3M+</p>
                  <p className="text-gray-600">Véhicules dans notre base</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-600">24h</p>
                  <p className="text-gray-600">Support client</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nos valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="overflow-hidden border-t-4 border-t-blue-500">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Timeline Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Notre histoire</h2>
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div key={index} className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="rounded-full bg-blue-500 text-white w-12 h-12 flex items-center justify-center font-bold text-sm">
                      {event.year}
                    </div>
                    {index < timelineEvents.length - 1 && (
                      <div className="h-full w-0.5 bg-blue-300 mt-2"></div>
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-bold text-blue-700">{event.title}</h3>
                    <p className="mt-1 text-gray-600">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Notre équipe</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4 border-4 border-blue-100">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt à découvrir la valeur de votre véhicule ?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Essayez ArgusIA dès aujourd'hui et obtenez une estimation précise en quelques minutes. 
              Aucune obligation, aucun engagement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="secondary" size="lg" asChild>
                <a href="/register">S'inscrire gratuitement</a>
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
                <a href="/contact">Nous contacter</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default About;

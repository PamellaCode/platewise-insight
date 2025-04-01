
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { FileText, Check, Shield, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Terms: React.FC = () => {
  const termsOfServiceSections = [
    {
      id: 'acceptance',
      title: 'Acceptation des conditions',
      content: (
        <div className="space-y-3">
          <p>
            En utilisant les services d'ArgusIA, vous acceptez d'être lié par les présentes conditions d'utilisation. 
            Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre service.
          </p>
          <p>
            Nous nous réservons le droit de modifier ces conditions à tout moment. 
            Votre utilisation continue des services après toute modification constitue votre acceptation des conditions modifiées.
          </p>
        </div>
      ),
    },
    {
      id: 'description',
      title: 'Description du service',
      content: (
        <div className="space-y-3">
          <p>
            ArgusIA est un service d'estimation de véhicules basé sur l'intelligence artificielle. 
            Nous fournissons des estimations de la valeur marchande de votre véhicule en utilisant 
            des algorithmes d'apprentissage automatique et des données comparatives du marché.
          </p>
          <p>
            Les estimations fournies sont à titre indicatif uniquement et ne constituent pas une offre d'achat ou de vente.
            La valeur réelle de votre véhicule peut varier en fonction de nombreux facteurs que notre système ne peut pas évaluer à distance.
          </p>
        </div>
      ),
    },
    {
      id: 'account',
      title: 'Comptes utilisateurs',
      content: (
        <div className="space-y-3">
          <p>
            Pour accéder à certaines fonctionnalités de notre service, vous devrez créer un compte. 
            Vous êtes responsable de maintenir la confidentialité de votre mot de passe et des informations de votre compte.
          </p>
          <p>
            Vous êtes entièrement responsable de toutes les activités qui se produisent sous votre compte. 
            Vous acceptez de nous informer immédiatement de toute utilisation non autorisée de votre compte.
          </p>
        </div>
      ),
    },
    {
      id: 'subscription',
      title: 'Abonnements et paiements',
      content: (
        <div className="space-y-3">
          <p>
            Certains aspects de notre service peuvent nécessiter un abonnement payant. 
            Les détails des différents abonnements disponibles sont indiqués sur notre page de tarification.
          </p>
          <p>
            Les abonnements sont facturés à l'avance selon une base mensuelle ou annuelle, selon le plan que vous choisissez. 
            Vous pouvez annuler votre abonnement à tout moment, mais aucun remboursement ne sera émis pour les périodes partiellement utilisées.
          </p>
        </div>
      ),
    },
    {
      id: 'limitations',
      title: 'Limitations de responsabilité',
      content: (
        <div className="space-y-3">
          <p>
            Dans toute la mesure permise par la loi, ArgusIA ne sera pas responsable des dommages directs, indirects, 
            accessoires, spéciaux, consécutifs ou punitifs, ou de toute perte de profits ou de revenus,
            résultant de votre utilisation de nos services.
          </p>
          <p>
            Les estimations fournies par notre service sont basées sur des données disponibles et des algorithmes d'IA,
            mais ne garantissent pas la valeur réelle de votre véhicule sur le marché.
          </p>
        </div>
      ),
    },
    {
      id: 'termination',
      title: 'Résiliation',
      content: (
        <div className="space-y-3">
          <p>
            Nous nous réservons le droit, à notre seule discrétion, de résilier votre accès à tout ou partie de nos services, 
            avec ou sans préavis, pour quelque raison que ce soit, y compris, sans limitation, si nous pensons que vous avez violé ces conditions.
          </p>
          <p>
            Vous pouvez également mettre fin à votre relation juridique avec nous à tout moment en désactivant votre compte 
            et en cessant d'utiliser nos services.
          </p>
        </div>
      ),
    },
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Conditions Générales d'Utilisation
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Veuillez lire attentivement ces conditions avant d'utiliser notre service d'estimation de véhicules.
            </p>
          </div>

          <Card className="mb-8 shadow-lg border-t-4 border-t-blue-500">
            <CardHeader className="bg-blue-50/50">
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-6 w-6 text-blue-600" />
                Conditions d'utilisation d'ArgusIA
              </CardTitle>
              <CardDescription>
                Dernière mise à jour: 15 juin 2023
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700">
                Les présentes Conditions Générales d'Utilisation ("CGU") constituent un accord juridiquement contraignant 
                entre vous et ArgusIA. En utilisant notre service, vous reconnaissez avoir lu, compris et accepté d'être lié par ces conditions.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              {termsOfServiceSections.map((section) => (
                <AccordionItem key={section.id} value={section.id} className="border rounded-lg p-2 bg-white shadow-sm mb-4">
                  <AccordionTrigger className="hover:bg-gray-50 px-4 py-2 rounded-md font-medium">
                    {section.title}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pt-2 pb-4">
                    {section.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start mb-4">
              <div className="bg-blue-600 p-2 rounded-full mr-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-800">Votre accord est important</h3>
                <p className="text-blue-700 mt-2">
                  En utilisant les services d'ArgusIA, vous confirmez avoir lu et accepté ces conditions d'utilisation 
                  ainsi que notre <a href="/privacy" className="font-medium underline">politique de confidentialité</a>.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0 md:space-x-4 mt-6">
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-600 mr-2" />
                <span>Dernière révision: 15 juin 2023</span>
              </div>
              <div className="flex items-center space-x-3">
                <Button variant="outline" asChild>
                  <a href="/contact">Nous contacter</a>
                </Button>
                <Button asChild>
                  <a href="/">Retour à l'accueil</a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default Terms;

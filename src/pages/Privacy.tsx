import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, EyeOff, Users, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Privacy: React.FC = () => {
  const privacyPolicySections = [
    {
      id: "collecte",
      title: "Collecte des données",
      icon: <Users className="h-6 w-6 text-blue-500" />,
      content: <div className="space-y-4">
        <h3 className="font-semibold text-lg">Informations que nous collectons</h3>
        <p>
          Lorsque vous utilisez notre service d'estimation de véhicules, nous collectons les informations suivantes :
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Données d'immatriculation du véhicule</li>
          <li>Marque, modèle et année du véhicule</li>
          <li>Kilométrage et état général du véhicule</li>
          <li>Votre nom, adresse email et numéro de téléphone</li>
          <li>Historique de vos estimations</li>
        </ul>
        <p>
          Ces informations sont nécessaires pour fournir une estimation précise de la valeur de votre véhicule et pour vous contacter concernant les résultats.
        </p>
      </div>
    }, {
      id: "utilisation",
      title: "Utilisation des données",
      icon: <FileText className="h-6 w-6 text-blue-500" />,
      content: <div className="space-y-4">
        <h3 className="font-semibold text-lg">Comment nous utilisons vos données</h3>
        <p>
          Nous utilisons vos informations personnelles aux fins suivantes :
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Fournir et améliorer notre service d'estimation</li>
          <li>Personnaliser votre expérience utilisateur</li>
          <li>Vous contacter concernant votre compte et vos estimations</li>
          <li>Vous envoyer des informations marketing si vous avez accepté de les recevoir</li>
          <li>Analyser l'utilisation de notre plateforme pour l'améliorer</li>
        </ul>
        <p>
          Nous ne vendons jamais vos données personnelles à des tiers. Nous pouvons partager certaines informations anonymisées pour améliorer nos modèles d'estimation.
        </p>
      </div>
    }, {
      id: "protection",
      title: "Protection des données",
      icon: <Lock className="h-6 w-6 text-blue-500" />,
      content: <div className="space-y-4">
        <h3 className="font-semibold text-lg">Comment nous protégeons vos données</h3>
        <p>
          La sécurité de vos données personnelles est notre priorité. Nous mettons en œuvre les mesures suivantes :
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Chiffrement SSL/TLS pour toutes les transmissions de données</li>
          <li>Stockage sécurisé avec chiffrement des données sensibles</li>
          <li>Contrôles d'accès stricts pour notre personnel</li>
          <li>Audits de sécurit�� réguliers</li>
          <li>Mises à jour continues de nos protocoles de sécurité</li>
        </ul>
        <p>
          Nous conservons vos données uniquement pendant la durée nécessaire pour fournir nos services ou conformément aux exigences légales.
        </p>
      </div>
    }, {
      id: "droits",
      title: "Vos droits",
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      content: <div className="space-y-4">
        <h3 className="font-semibold text-lg">Vos droits concernant vos données</h3>
        <p>
          Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Droit d'accès à vos données personnelles</li>
          <li>Droit de rectification des informations inexactes</li>
          <li>Droit à l'effacement de vos données ("droit à l'oubli")</li>
          <li>Droit à la limitation du traitement</li>
          <li>Droit à la portabilité des données</li>
          <li>Droit d'opposition au traitement</li>
        </ul>
        <p>
          Pour exercer l'un de ces droits, veuillez nous contacter à l'adresse <span className="text-blue-600 font-medium">privacy@argusia.fr</span>.
        </p>
      </div>
    }, {
      id: "cookies",
      title: "Cookies",
      icon: <EyeOff className="h-6 w-6 text-blue-500" />,
      content: <div className="space-y-4">
        <h3 className="font-semibold text-lg">Notre politique de cookies</h3>
        <p>
          Nous utilisons des cookies pour améliorer votre expérience sur notre site :
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site</li>
          <li><strong>Cookies analytiques :</strong> nous aident à comprendre comment vous utilisez notre site</li>
          <li><strong>Cookies marketing :</strong> utilisés pour vous proposer des publicités personnalisées</li>
        </ul>
        <p>
          Vous pouvez à tout moment modifier vos préférences de cookies dans les paramètres de votre compte.
        </p>
        <div className="mt-4">
          <Button variant="outline" className="mr-2 text-blue-600">Paramètres des cookies</Button>
          <Button variant="secondary">En savoir plus</Button>
        </div>
      </div>
    }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-argus-blue-600 via-argus-violet-600 to-argus-red-600 bg-clip-text text-transparent">
              Politique de confidentialité
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Chez ArgusIA, nous accordons une grande importance à la protection de vos données personnelles.
              Découvrez comment nous collectons, utilisons et protégeons vos informations.
            </p>
          </div>

          <Card className="mb-8 shadow-lg border-t-4 border-t-argus-blue-500 backdrop-blur-lg bg-black/40 border border-white/10 text-white">
            <CardHeader className="bg-argus-blue-900/30">
              <CardTitle className="flex items-center text-white">
                <Shield className="mr-2 h-6 w-6 text-argus-blue-400" />
                Notre engagement envers votre vie privée
              </CardTitle>
              <CardDescription className="text-gray-300">
                Dernière mise à jour: 15 juin 2023
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-300">
                Chez ArgusIA, nous nous engageons à protéger votre vie privée et à assurer la sécurité de vos données personnelles.
                Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations
                lorsque vous utilisez notre service d'estimation de véhicules alimenté par l'intelligence artificielle.
              </p>
            </CardContent>
          </Card>

          <Tabs defaultValue="collecte" className="space-y-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 bg-black/30 border border-white/10 p-1">
              {privacyPolicySections.map(section => (
                <TabsTrigger key={section.id} value={section.id} className="flex items-center space-x-2 data-[state=active]:bg-argus-blue-900/40 data-[state=active]:text-white text-gray-300">
                  <span className="hidden md:inline-block">{section.icon}</span>
                  <span>{section.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {privacyPolicySections.map(section => (
              <TabsContent key={section.id} value={section.id}>
                <Card className="backdrop-blur-lg bg-black/40 border border-white/10 text-white">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      {section.icon}
                      <span className="ml-2">{section.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {section.content}
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-12 p-6 bg-gradient-to-br from-argus-blue-900/30 to-argus-violet-900/30 rounded-lg border border-white/10 shadow-lg backdrop-blur-md">
            <h2 className="text-2xl font-semibold mb-4 text-white">Des questions sur notre politique de confidentialité ?</h2>
            <p className="mb-6 text-gray-300">
              Si vous avez des questions concernant notre politique de confidentialité ou la façon dont nous traitons vos données,
              n'hésitez pas à nous contacter via notre page dédiée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-argus-blue-600 to-argus-violet-600 hover:from-argus-blue-700 hover:to-argus-violet-700 text-white border border-white/10 shadow-lg" asChild>
                <a href="/contact">Nous contacter</a>
              </Button>
              <Button variant="outline" className="border-argus-blue-600/50 text-argus-blue-400 hover:bg-argus-blue-900/30" asChild>
                <a href="/faq">FAQ sur la confidentialité</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default Privacy;

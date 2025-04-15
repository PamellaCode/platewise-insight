import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Cookie, Check, X, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const Cookies: React.FC = () => {
  const [essentialCookies, setEssentialCookies] = React.useState(true);
  const [analyticalCookies, setAnalyticalCookies] = React.useState(true);
  const [marketingCookies, setMarketingCookies] = React.useState(false);
  
  const cookieTypes = [
    {
      id: 'essential',
      name: 'Cookies essentiels',
      description: 'Ces cookies sont nécessaires au bon fonctionnement du site. Ils permettent la navigation et l\'utilisation des fonctionnalités de base.',
      required: true,
      enabled: essentialCookies,
      onChange: () => {} // Cannot be disabled
    }, {
      id: 'analytical',
      name: 'Cookies analytiques',
      description: 'Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site en collectant et rapportant des informations de manière anonyme.',
      required: false,
      enabled: analyticalCookies,
      onChange: () => setAnalyticalCookies(!analyticalCookies)
    }, {
      id: 'marketing',
      name: 'Cookies marketing',
      description: 'Ces cookies sont utilisés pour suivre les visiteurs sur les sites web. L\'intention est d\'afficher des publicités pertinentes et intéressantes pour l\'utilisateur.',
      required: false,
      enabled: marketingCookies,
      onChange: () => setMarketingCookies(!marketingCookies)
    }
  ];
  
  const saveCookiePreferences = () => {
    console.log({
      essential: essentialCookies,
      analytical: analyticalCookies,
      marketing: marketingCookies
    });
    // Here you would save the preferences to cookies/localStorage
    alert('Vos préférences de cookies ont été enregistrées !');
  };
  
  return <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-argus-blue-600 via-argus-violet-600 to-argus-red-600 bg-clip-text text-transparent">
              Politique des Cookies
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Cette page vous permet de comprendre notre utilisation des cookies et de personnaliser vos préférences.
            </p>
          </div>

          <Card className="mb-8 shadow-lg border-t-4 border-t-argus-blue-500 bg-black/40 backdrop-blur-lg border border-white/10 text-white">
            <CardHeader className="bg-argus-blue-900/30">
              <CardTitle className="flex items-center text-white">
                <Cookie className="mr-2 h-6 w-6 text-argus-blue-400" />
                Notre utilisation des cookies
              </CardTitle>
              <CardDescription className="text-gray-300">
                Dernière mise à jour: 15 juin 2023
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-300">
                ArgusIA utilise des cookies pour améliorer votre expérience sur notre site, analyser le trafic et 
                personnaliser le contenu. Cette page vous explique comment nous utilisons les cookies et vous permet 
                de contrôler vos préférences.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-black/40 backdrop-blur-lg border border-white/10 text-white">
              <CardHeader>
                <CardTitle className="text-white">Qu'est-ce qu'un cookie ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Les cookies sont de petits fichiers texte stockés sur votre ordinateur ou appareil mobile lorsque vous visitez un site web. 
                  Ils sont largement utilisés pour faire fonctionner les sites web ou pour les rendre plus efficaces, 
                  ainsi que pour fournir des informations aux propriétaires du site.
                </p>
                <div className="mt-4 p-4 bg-argus-blue-900/30 rounded-lg border border-argus-blue-700/30">
                  <h3 className="font-semibold text-lg mb-2 text-argus-blue-300">Comment fonctionnent les cookies ?</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>Ils mémorisent vos actions et préférences (comme la connexion, la langue, la taille de police)</li>
                    <li>Ils permettent aux sites de se souvenir de vos visites pour améliorer votre expérience</li>
                    <li>Ils peuvent être utilisés pour personnaliser le contenu et les publicités</li>
                    <li>Certains cookies sont essentiels au fonctionnement du site, tandis que d'autres sont optionnels</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-lg border border-white/10 text-white">
              <CardHeader>
                <CardTitle className="text-white">Gérer vos préférences de cookies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">
                  Vous pouvez personnaliser vos préférences de cookies ci-dessous. Notez que certains cookies sont nécessaires 
                  au bon fonctionnement du site et ne peuvent pas être désactivés.
                </p>
                
                <div className="space-y-6">
                  {cookieTypes.map(cookie => <div key={cookie.id} className="flex items-start justify-between p-4 border border-white/10 rounded-lg bg-black/20">
                      <div className="space-y-1">
                        <div className="font-medium flex items-center text-white">
                          {cookie.name}
                          {cookie.required && <span className="ml-2 text-xs bg-argus-blue-900/50 text-argus-blue-300 px-2 py-0.5 rounded border border-argus-blue-600/30">Requis</span>}
                        </div>
                        <p className="text-sm text-gray-300">{cookie.description}</p>
                      </div>
                      <div className="ml-4">
                        <Switch id={cookie.id} checked={cookie.enabled} onCheckedChange={cookie.onChange} disabled={cookie.required} />
                      </div>
                    </div>)}
                </div>

                <div className="mt-6 flex justify-end gap-3">
                  <Button variant="outline" onClick={() => {
                  setAnalyticalCookies(false);
                  setMarketingCookies(false);
                }} className="text-argus-blue-400 border-argus-blue-600/50 hover:bg-argus-blue-900/30">
                    Tout refuser
                  </Button>
                  <Button variant="outline" onClick={() => {
                  setAnalyticalCookies(true);
                  setMarketingCookies(true);
                }} className="text-argus-blue-400 border-argus-blue-600/50 hover:bg-argus-blue-900/30">
                    Tout accepter
                  </Button>
                  <Button onClick={saveCookiePreferences} className="bg-gradient-to-r from-argus-blue-600 to-argus-violet-600 hover:from-argus-blue-700 hover:to-argus-violet-700 border border-white/10">
                    Enregistrer mes préférences
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="p-6 bg-black/30 backdrop-blur-lg rounded-lg border border-white/10 text-white">
              <h3 className="text-xl font-semibold mb-3">En savoir plus sur notre politique de confidentialité</h3>
              <p className="mb-4 text-gray-300">
                Pour plus d'informations sur la manière dont nous traitons vos données personnelles, 
                veuillez consulter notre politique de confidentialité complète.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" className="border-argus-blue-600/50 text-argus-blue-400 hover:bg-argus-blue-900/30" asChild>
                  <a href="/privacy">Politique de confidentialité</a>
                </Button>
                <Button variant="outline" className="border-argus-violet-600/50 text-argus-violet-400 hover:bg-argus-violet-900/30" asChild>
                  <a href="/terms">Conditions d'utilisation</a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>;
};
export default Cookies;

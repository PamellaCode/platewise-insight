
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import PricingPlans from '@/components/PricingPlans';
import { CheckCircle2, HelpCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Pricing = () => {
  // Questions fréquemment posées sur les abonnements
  const faqs = [
    {
      question: 'Puis-je annuler mon abonnement à tout moment ?',
      answer: 'Oui, vous pouvez annuler votre abonnement à tout moment. Il restera valide jusqu\'à la fin de la période en cours, puis ne sera pas renouvelé.',
    },
    {
      question: 'Comment fonctionnent les crédits d\'estimation ?',
      answer: 'Chaque estimation de véhicule consomme 1 crédit. Les crédits sont renouvelés automatiquement au début de chaque période de facturation, selon votre formule d\'abonnement.',
    },
    {
      question: 'Comment acheter des crédits supplémentaires ?',
      answer: 'Dans votre tableau de bord, vous trouverez une section "Acheter des crédits" où vous pourrez effectuer des achats de crédits supplémentaires selon votre abonnement.',
    },
    {
      question: 'Qu\'est-ce que l\'API d\'historique du véhicule ?',
      answer: 'L\'API d\'historique fournit des données détaillées sur les accidents, l\'entretien et les propriétaires précédents d\'un véhicule. Cette fonctionnalité est disponible uniquement avec l\'abonnement Or.',
    },
    {
      question: 'Comment sont générées les annonces visuelles ?',
      answer: 'Notre système utilise les données du véhicule pour créer automatiquement des visuels professionnels adaptés à la plateforme Leboncoin, incluant les photos, les caractéristiques et le prix recommandé.',
    },
    {
      question: 'La carte d\'évolution de la valeur du modèle est-elle disponible pour tous les véhicules ?',
      answer: 'Oui, cette fonctionnalité est disponible pour la plupart des modèles populaires. Elle présente l\'évolution des prix sur le marché au cours des dernières années.',
    },
  ];

  const features = [
    {
      name: 'Estimation de base',
      bronze: true,
      silver: true,
      gold: true,
    },
    {
      name: 'Nombre d\'estimations par mois',
      bronze: '1',
      silver: '3',
      gold: '10',
    },
    {
      name: 'Résultat cote Argus détaillé',
      bronze: false,
      silver: true,
      gold: true,
    },
    {
      name: 'Génération d\'annonce visuelle Leboncoin',
      bronze: false,
      silver: true,
      gold: true,
    },
    {
      name: 'Courbe d\'évolution de la valeur',
      bronze: false,
      silver: true,
      gold: true,
    },
    {
      name: 'Carte d\'évolution de la valeur du modèle',
      bronze: false,
      silver: true,
      gold: true,
    },
    {
      name: 'Accès aux historiques véhicule',
      bronze: false,
      silver: false,
      gold: '10 véhicules',
    },
    {
      name: 'Prix des estimations supplémentaires',
      bronze: '3€ / unité',
      silver: '3€ / unité',
      gold: '10€ / unité',
    },
    {
      name: 'Support prioritaire',
      bronze: false,
      silver: true,
      gold: true,
    },
    {
      name: 'Support dédié',
      bronze: false,
      silver: false,
      gold: true,
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Plans d'abonnement</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Choisissez la formule qui correspond à vos besoins, du particulier occasionnel au professionnel de l'automobile.
          </p>

          <Tabs defaultValue="monthly" className="max-w-md mx-auto mb-12">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="monthly">Mensuel</TabsTrigger>
              <TabsTrigger value="yearly" disabled>Annuel (Bientôt)</TabsTrigger>
            </TabsList>
            <TabsContent value="monthly" className="pt-6">
              <PricingPlans />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Comparaison des fonctionnalités</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-auto-blue-500 text-white">
                  <th className="p-4 text-left min-w-[200px]">Fonctionnalité</th>
                  <th className="p-4 text-center">Bronze</th>
                  <th className="p-4 text-center">Argent</th>
                  <th className="p-4 text-center">Or</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-4 border">{feature.name}</td>
                    <td className="p-4 border text-center">
                      {typeof feature.bronze === 'boolean' ? (
                        feature.bronze ? <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" /> : '-'
                      ) : (
                        feature.bronze
                      )}
                    </td>
                    <td className="p-4 border text-center">
                      {typeof feature.silver === 'boolean' ? (
                        feature.silver ? <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" /> : '-'
                      ) : (
                        feature.silver
                      )}
                    </td>
                    <td className="p-4 border text-center">
                      {typeof feature.gold === 'boolean' ? (
                        feature.gold ? <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" /> : '-'
                      ) : (
                        feature.gold
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Questions fréquentes</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tout ce que vous devez savoir sur nos abonnements et fonctionnalités
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border rounded-lg p-6 bg-gray-50">
                  <div className="flex items-start">
                    <HelpCircle className="h-6 w-6 text-auto-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-auto-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à commencer?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Essayez notre service d'estimation gratuitement aujourd'hui et découvrez la véritable valeur de votre véhicule.
          </p>
          <div className="space-x-4">
            <Button className="bg-white hover:bg-gray-100 text-auto-blue-500" size="lg" asChild>
              <Link to="/">Essayer gratuitement</Link>
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10" size="lg" asChild>
              <Link to="/contact">Contacter les ventes</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Pricing;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import PricingPlans from '@/components/PricingPlans';
import MainLayout from '@/components/layouts/MainLayout';

const fadeIn = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const staggerContainer = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const toggleBilling = () => {
    setIsAnnual(!isAnnual);
  };

  const faqs = [
    {
      question: "Quelle est la différence entre les différentes formules ?",
      answer: "Nos différentes formules offrent des niveaux de services adaptés à vos besoins. Le plan Essentiel est parfait pour une utilisation occasionnelle, le plan Pro pour les professionnels qui ont besoin d'estimations régulières, et le plan Entreprise pour les sociétés avec des besoins avancés."
    },
    {
      question: "Puis-je changer de formule à tout moment ?",
      answer: "Oui, vous pouvez passer à une formule supérieure à tout moment. Si vous souhaitez passer à une formule inférieure, le changement sera effectif à la fin de votre période de facturation."
    },
    {
      question: "Comment puis-je annuler mon abonnement ?",
      answer: "Vous pouvez annuler votre abonnement à tout moment depuis votre espace client. L'annulation sera effective à la fin de votre période de facturation en cours."
    },
    {
      question: "Proposez-vous une garantie de remboursement ?",
      answer: "Oui, nous proposons une garantie de remboursement de 14 jours si vous n'êtes pas satisfait de nos services. Contactez notre support client pour en savoir plus."
    }
  ];

  return (
    <MainLayout>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-500 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-white/20 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-white/20 translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-white/20"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Abonnements adaptés à vos besoins
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Choisissez le plan qui vous convient et commencez à estimer vos véhicules avec précision dès aujourd'hui.
            </p>

            <div className="flex items-center justify-center mb-12 space-x-4">
              <span className={`text-lg ${!isAnnual ? 'font-semibold' : ''}`}>Mensuel</span>
              <Switch id="billing" checked={isAnnual} onCheckedChange={toggleBilling} />
              <div className="flex items-center">
                <span className={`text-lg ${isAnnual ? 'font-semibold' : ''}`}>Annuel</span>
                <span className="ml-2 bg-white/20 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  -20%
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-cyan-100">
        <div className="container mx-auto px-4">
          <PricingPlans isAnnual={isAnnual} />
        </div>
      </section>

      {/* Features Comparison Section */}
      <section className="py-20 bg-gradient-to-b from-cyan-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-4">Comparaison</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Toutes nos fonctionnalités en détail</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez les fonctionnalités incluses dans chaque formule pour faire le choix qui correspond le mieux à vos besoins.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 text-left text-gray-700 border-b">Fonctionnalité</th>
                  <th className="p-4 text-center text-gray-700 border-b">Essentiel</th>
                  <th className="p-4 text-center text-gray-700 border-b">Pro</th>
                  <th className="p-4 text-center text-gray-700 border-b">Entreprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 border-b">Estimation de base</td>
                  <td className="p-4 text-center border-b"><Check className="h-5 w-5 mx-auto text-green-500" /></td>
                  <td className="p-4 text-center border-b"><Check className="h-5 w-5 mx-auto text-green-500" /></td>
                  <td className="p-4 text-center border-b"><Check className="h-5 w-5 mx-auto text-green-500" /></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 border-b">Historique des prix</td>
                  <td className="p-4 text-center border-b"><Check className="h-5 w-5 mx-auto text-green-500" /></td>
                  <td className="p-4 text-center border-b"><Check className="h-5 w-5 mx-auto text-green-500" /></td>
                  <td className="p-4 text-center border-b"><Check className="h-5 w-5 mx-auto text-green-500" /></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 border-b">Rapports détaillés</td>
                  <td className="p-4 text-center border-b">-</td>
                  <td className="p-4 text-center border-b"><Check className="h-5 w-5 mx-auto text-green-500" /></td>
                  <td className="p-4 text-center border-b"><Check className="h-5 w-5 mx-auto text-green-500" /></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 border-b">API d'intégration</td>
                  <td className="p-4 text-center border-b">-</td>
                  <td className="p-4 text-center border-b">-</td>
                  <td className="p-4 text-center border-b"><Check className="h-5 w-5 mx-auto text-green-500" /></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 border-b">Support prioritaire</td>
                  <td className="p-4 text-center border-b">-</td>
                  <td className="p-4 text-center border-b"><Check className="h-5 w-5 mx-auto text-green-500" /></td>
                  <td className="p-4 text-center border-b"><Check className="h-5 w-5 mx-auto text-green-500" /></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 border-b">Estimations illimitées</td>
                  <td className="p-4 text-center border-b">-</td>
                  <td className="p-4 text-center border-b">-</td>
                  <td className="p-4 text-center border-b"><Check className="h-5 w-5 mx-auto text-green-500" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-teal-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-teal-100 text-teal-800 font-medium text-sm mb-4">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Questions fréquentes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Retrouvez les réponses aux questions les plus posées sur nos abonnements.
            </p>
          </div>

          <motion.div 
            className="max-w-3xl mx-auto grid gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.2}}
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.5}}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à commencer ?</h2>
            <p className="text-xl mb-8 text-white/90">
              Rejoignez des milliers d'utilisateurs satisfaits et commencez à estimer vos véhicules dès aujourd'hui.
            </p>
            <Button 
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              size="lg"
              asChild
            >
              <Link to="/register">
                S'inscrire maintenant
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Pricing;

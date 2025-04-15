
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import NewsletterSection from '@/components/sections/NewsletterSection';

const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: "Comment fonctionne l'estimation de véhicule ?",
      answer: "Notre système utilise l'intelligence artificielle pour analyser les données de votre véhicule à partir de son immatriculation. Nous comparons ensuite avec notre base de données complète pour vous fournir une estimation précise basée sur le modèle, l'année, le kilométrage et l'état général."
    },
    {
      question: "Combien coûte l'utilisation du service ?",
      answer: "Nous proposons plusieurs formules d'abonnement adaptées à vos besoins. Notre formule Essentiel est disponible à partir de 9,99€ par mois. Vous pouvez consulter toutes nos offres dans la section Tarifs pour trouver celle qui vous convient le mieux."
    },
    {
      question: "Les estimations sont-elles fiables ?",
      answer: "Oui, nos estimations sont basées sur des données réelles du marché automobile et mises à jour quotidiennement. Notre technologie d'IA analyse des milliers de transactions similaires pour vous proposer l'estimation la plus précise possible."
    },
    {
      question: "Puis-je estimer plusieurs véhicules ?",
      answer: "Absolument ! Selon votre abonnement, vous pouvez réaliser plusieurs estimations par mois. Notre formule Expert permet des estimations illimitées, idéale pour les professionnels de l'automobile."
    },
    {
      question: "Comment accéder à l'historique de mes estimations ?",
      answer: "Dans votre tableau de bord personnel, rendez-vous dans la section 'Historique'. Vous y trouverez toutes vos estimations précédentes, que vous pouvez consulter et comparer à tout moment."
    },
    {
      question: "Est-il possible d'obtenir une estimation détaillée ?",
      answer: "Oui, nos formules Standard et Expert incluent des rapports détaillés qui présentent tous les facteurs influençant le prix de votre véhicule, ainsi que des comparatifs avec des véhicules similaires sur le marché."
    },
    {
      question: "Comment puis-je contacter le support client ?",
      answer: "Notre équipe de support est disponible par email à support@estimauto.fr ou via le chat intégré à notre plateforme. Les abonnés Expert bénéficient également d'un support téléphonique prioritaire."
    },
    {
      question: "Puis-je annuler mon abonnement à tout moment ?",
      answer: "Oui, tous nos abonnements peuvent être annulés à tout moment depuis votre espace personnel. L'annulation prend effet à la fin de la période de facturation en cours."
    }
  ];

  // Create structured data for FAQPage
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <MainLayout 
      title="FAQ - Vos questions sur l'estimation automobile | ArgusAI"
      description="Trouvez des réponses à toutes vos questions sur notre service d'estimation automobile par IA. Découvrez comment ArgusAI vous aide à connaître la valeur réelle de votre véhicule."
      keywords="FAQ estimation voiture, questions argus automobile, aide estimation véhicule, support ArgusAI"
      structuredData={faqStructuredData}
    >
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-argus-blue-600 via-argus-violet-600 to-argus-red-600 bg-clip-text text-transparent">
              Foire aux questions
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Vous avez des questions sur notre service d'estimation de véhicules ? Consultez nos réponses aux questions les plus fréquentes ci-dessous.
            </p>
          </div>
          
          <div className="bg-black/40 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-white/10">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold hover:text-argus-blue-400 transition-colors text-white">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    <p>{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-4">
              Vous n'avez pas trouvé la réponse à votre question ?
            </p>
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-argus-blue-600 via-argus-violet-600 to-argus-red-600 hover:from-argus-blue-700 hover:via-argus-violet-700 hover:to-argus-red-700 text-white font-semibold py-3 px-8 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 transition-all inline-flex items-center border border-white/10 backdrop-blur-sm"
            >
              Contactez-nous
            </Link>
          </div>
          
          <div className="mt-16">
            <NewsletterSection />
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default FAQ;

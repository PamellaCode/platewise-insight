import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import PricingPlans from '@/components/PricingPlans';
import MainLayout from '@/components/layouts/MainLayout';
import NewsletterSection from '@/components/sections/NewsletterSection';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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
      answer: "Nos différentes formules offrent des niveaux de services adaptés à vos besoins. Le plan Essentiel est parfait pour une utilisation occasionnelle, le plan Standard pour les professionnels qui ont besoin d'estimations régulières, et le plan Expert pour les sociétés avec des besoins avancés."
    }, {
      question: "Puis-je changer de formule à tout moment ?",
      answer: "Oui, vous pouvez passer à une formule supérieure à tout moment. Si vous souhaitez passer à une formule inférieure, le changement sera effectif à la fin de votre période de facturation."
    }, {
      question: "Comment puis-je annuler mon abonnement ?",
      answer: "Vous pouvez annuler votre abonnement à tout moment depuis votre espace client. L'annulation sera effective à la fin de votre période de facturation en cours."
    }, {
      question: "Proposez-vous une garantie de remboursement ?",
      answer: "Oui, nous proposons une garantie de remboursement de 14 jours si vous n'êtes pas satisfait de nos services. Contactez notre support client pour en savoir plus."
    }
  ];
  return <MainLayout>
      <section className="bg-gradient-to-r from-argus-blue-900 via-argus-violet-900 to-argus-red-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-white/10 -translate-x-1/2 -translate-y-1/2 blur-xl"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-white/10 translate-x-1/2 translate-y-1/2 blur-xl"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-white/10 blur-md"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-argus-blue-400 via-argus-violet-400 to-argus-red-400">
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
                <span className="ml-2 bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-2 py-1 rounded-full border border-white/10">
                  -20%
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-argus-blue-900/40 to-argus-violet-900/40 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <PricingPlans isAnnual={isAnnual} />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-argus-violet-900/40 to-argus-blue-900/40 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-argus-blue-800/50 border border-white/10 backdrop-blur-md text-argus-blue-200 font-medium text-sm mb-4">Comparaison</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Toutes nos fonctionnalités en détail</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Découvrez les fonctionnalités incluses dans chaque formule pour faire le choix qui correspond le mieux à vos besoins.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.4)] border border-white/10">
            <Table className="w-full bg-black/40 backdrop-blur-md">
              <TableHeader className="bg-black/60">
                <TableRow>
                  <TableHead className="w-[300px] font-bold text-lg text-white">Fonctionnalité</TableHead>
                  <TableHead className="text-center font-bold text-lg text-white">Essentiel</TableHead>
                  <TableHead className="text-center font-bold text-lg text-white">Standard</TableHead>
                  <TableHead className="text-center font-bold text-lg text-white">Expert</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-white/5 border-b border-white/10">
                  <TableCell className="font-medium text-white">Estimation de base</TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 mx-auto text-argus-blue-400" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 mx-auto text-argus-blue-400" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 mx-auto text-argus-blue-400" />
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-white/5 border-b border-white/10">
                  <TableCell className="font-medium text-white">Historique des prix</TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 mx-auto text-argus-blue-400" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 mx-auto text-argus-blue-400" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 mx-auto text-argus-blue-400" />
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-white/5 border-b border-white/10">
                  <TableCell className="font-medium text-white">Rapports détaillés</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 mx-auto text-argus-red-400" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 mx-auto text-argus-blue-400" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 mx-auto text-argus-blue-400" />
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-white/5 border-b border-white/10">
                  <TableCell className="font-medium text-white">Nombre d'estimations/mois</TableCell>
                  <TableCell className="text-center font-medium text-white">1</TableCell>
                  <TableCell className="text-center font-medium text-white">3</TableCell>
                  <TableCell className="text-center font-medium text-white">10</TableCell>
                </TableRow>
                <TableRow className="hover:bg-white/5 border-b border-white/10">
                  <TableCell className="font-medium text-white">Export des résultats (PDF/Excel)</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 mx-auto text-argus-red-400" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 mx-auto text-argus-blue-400" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 mx-auto text-argus-blue-400" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-argus-blue-900 via-argus-violet-900 to-argus-red-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div className="max-w-3xl mx-auto" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à commencer ?</h2>
            <p className="text-xl mb-8 text-white/90">
              Rejoignez des milliers d'utilisateurs satisfaits et commencez à estimer vos véhicules dès aujourd'hui.
            </p>
            <Button className="bg-gradient-to-r from-argus-blue-600 via-argus-violet-600 to-argus-red-600 text-white hover:from-argus-blue-700 hover:via-argus-violet-700 hover:to-argus-red-700 text-lg px-8 py-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 transition-all duration-300 border border-white/10 backdrop-blur-md" size="lg" asChild>
              <Link to="/register" className="text-white">
                S'inscrire maintenant
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-12">
        <NewsletterSection />
      </div>
    </MainLayout>;
};
export default Pricing;

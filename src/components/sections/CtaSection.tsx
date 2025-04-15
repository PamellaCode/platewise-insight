
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-argus-red-600/95 via-argus-violet-600/95 to-argus-blue-600/95 text-white backdrop-blur-sm shadow-inner">
      <div className="container mx-auto px-4 text-center">
        <motion.div 
          className="max-w-3xl mx-auto" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-improved-dark">Envie de connaître la vraie valeur de votre véhicule ?</h2>
          <p className="text-xl mb-8 text-white/95 leading-relaxed max-w-2xl mx-auto">Obtenez une estimation précise en quelques secondes grâce à notre IA avancée. Accédez à des analyses détaillées et à la valorisation du marché en souscrivant à l'un de nos abonnements.</p>
          <Button 
            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl backdrop-blur-md transition-all duration-300" 
            size="lg" 
            asChild
          >
            <Link to="/register" className="flex items-center justify-center">
              Découvrez nos abonnements !
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;

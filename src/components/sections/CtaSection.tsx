import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
const CtaSection: React.FC = () => {
  return <section className="py-20 bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-500 text-white">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-improved-dark">Envie de connaître la vraie valeur de votre véhicule ?</h2>
          <p className="text-xl mb-8 text-white/95 leading-relaxed max-w-2xl mx-auto">
            Estimez gratuitement votre véhicule en quelques secondes et obtenez une valorisation précise basée sur les données du marché.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" size="lg" asChild>
            <Link to="/register" className="flex items-center justify-center">
              Essayer gratuitement
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>;
};
export default CtaSection;
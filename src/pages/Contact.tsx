
import React, { useState } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'support',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubjectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Message envoyé",
        description: "Nous vous répondrons dans les plus brefs délais.",
        variant: "default",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: 'support',
        message: ''
      });
    }, 1500);
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-argus-blue-600 via-argus-violet-600 to-argus-red-600 bg-clip-text text-transparent">
              Contactez-nous
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Une question, une suggestion ou besoin d'assistance ? 
              Notre équipe est à votre disposition pour vous aider.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <Card className="p-8 shadow-lg bg-black/40 backdrop-blur-lg border border-white/10 text-white">
              <h2 className="text-2xl font-bold mb-6 text-white">Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-300">Votre nom</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Jean Dupont" 
                    required 
                    className="mt-2 bg-black/30 border-white/10 text-white"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-gray-300">Votre email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="jean.dupont@example.com" 
                    required 
                    className="mt-2 bg-black/30 border-white/10 text-white"
                  />
                </div>
                
                <div>
                  <Label className="text-gray-300">Sujet de votre message</Label>
                  <RadioGroup 
                    value={formData.subject} 
                    onValueChange={handleSubjectChange}
                    className="mt-3 space-y-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="support" id="support" className="border-white/30 text-argus-blue-400" />
                      <Label htmlFor="support" className="cursor-pointer text-gray-300">Support technique</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sales" id="sales" className="border-white/30 text-argus-blue-400" />
                      <Label htmlFor="sales" className="cursor-pointer text-gray-300">Renseignements commerciaux</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="partnership" id="partnership" className="border-white/30 text-argus-blue-400" />
                      <Label htmlFor="partnership" className="cursor-pointer text-gray-300">Proposition de partenariat</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" className="border-white/30 text-argus-blue-400" />
                      <Label htmlFor="other" className="cursor-pointer text-gray-300">Autre sujet</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-gray-300">Votre message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Détaillez votre demande ici..." 
                    required 
                    className="mt-2 h-32 bg-black/30 border-white/10 text-white"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-gradient-to-r from-argus-blue-600 via-argus-violet-600 to-argus-red-600 hover:from-argus-blue-700 hover:via-argus-violet-700 hover:to-argus-red-700 border border-white/10" disabled={isSubmitting}>
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
              </form>
            </Card>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-argus-blue-900/30 to-argus-violet-900/30 p-8 rounded-xl border border-white/10 backdrop-blur-lg text-white">
                <h2 className="text-2xl font-bold mb-6">Nos coordonnées</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg text-argus-blue-400">Adresse</h3>
                    <p className="mt-1 text-gray-300">25 rue de la Paix<br />75002 Paris, France</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-argus-blue-400">Téléphone</h3>
                    <p className="mt-1 text-gray-300">+33 1 23 45 67 89</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-argus-blue-400">Email</h3>
                    <p className="mt-1 text-gray-300">contact@argusia.fr</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-argus-blue-400">Horaires d'ouverture</h3>
                    <p className="mt-1 text-gray-300">Lundi - Vendredi: 9h00 - 18h00<br />Fermé les weekends et jours fériés</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/40 backdrop-blur-lg border border-white/10 p-6 rounded-xl text-white">
                <h2 className="text-2xl font-bold mb-6">FAQ</h2>
                <div className="space-y-4">
                  <div className="border-b border-white/10 pb-4">
                    <h3 className="font-semibold text-lg">Quel est le délai de réponse ?</h3>
                    <p className="mt-1 text-gray-300">Nous nous efforçons de répondre à toutes les demandes dans un délai de 24 à 48 heures ouvrées.</p>
                  </div>
                  <div className="border-b border-white/10 pb-4">
                    <h3 className="font-semibold text-lg">Comment puis-je suivre ma demande ?</h3>
                    <p className="mt-1 text-gray-300">Vous recevrez un email de confirmation avec un numéro de suivi après l'envoi de votre message.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Puis-je prendre rendez-vous avec un expert ?</h3>
                    <p className="mt-1 text-gray-300">Oui, vous pouvez demander un rendez-vous téléphonique ou en visioconférence dans le formulaire de contact.</p>
                  </div>
                </div>
                <Button variant="outline" className="mt-6 border-argus-blue-600/50 text-argus-blue-400 hover:bg-argus-blue-900/30" asChild>
                  <a href="/faq">Voir toutes les FAQ</a>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Nous trouver</h2>
            <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/10 shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2150562069455!2d2.3288130999999997!3d48.8689631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e3c844d5635%3A0xb5ca5e53f4542b73!2s25%20Rue%20de%20la%20Paix%2C%2075002%20Paris!5e0!3m2!1sfr!2sfr!4v1655123945548!5m2!1sfr!2sfr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="mt-16 bg-gradient-to-r from-argus-blue-900 via-argus-violet-900 to-argus-red-900 rounded-xl p-8 text-white text-center border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.4)] backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-4">Restez informé</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-300">
              Inscrivez-vous à notre newsletter pour recevoir les dernières actualités, 
              mises à jour et conseils d'ArgusIA.
            </p>
            <div className="flex max-w-md mx-auto flex-col sm:flex-row gap-2">
              <Input 
                placeholder="Votre adresse email" 
                type="email" 
                className="bg-black/30 text-white border-white/10"
              />
              <Button variant="secondary" className="whitespace-nowrap bg-gradient-to-r from-argus-violet-600 to-argus-blue-600 hover:from-argus-violet-700 hover:to-argus-blue-700 text-white border border-white/10">
                S'inscrire
              </Button>
            </div>
            <div className="mt-4 flex items-center justify-center text-sm text-gray-300">
              <Check className="h-4 w-4 mr-1 text-argus-blue-400" />
              <span>En vous inscrivant, vous acceptez notre politique de confidentialité</span>
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default Contact;

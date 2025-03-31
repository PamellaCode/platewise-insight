import React from 'react';
import { motion } from 'framer-motion';
import { Check, HelpCircle, ArrowDown, Info, Settings, Zap, ArrowRight, Sparkles, Rocket, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import MainLayout from '@/components/layouts/MainLayout';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
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
const HowItWorks = () => {
  const steps = [{
    icon: <HelpCircle className="h-12 w-12 text-pink-500" />,
    title: "Entrez votre immatriculation",
    description: "Saisissez simplement le numéro d'immatriculation de votre véhicule dans notre outil d'estimation.",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
    iconBg: "bg-blue-100/10 group-hover:bg-blue-100/20"
  }, {
    icon: <Zap className="h-12 w-12 text-purple-500" />,
    title: "Notre IA analyse votre véhicule",
    description: "Notre intelligence artificielle analyse instantanément les données de votre véhicule et compare avec notre base de données.",
    bgColor: "bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200",
    iconBg: "bg-cyan-100/10 group-hover:bg-cyan-100/20"
  }, {
    icon: <Info className="h-12 w-12 text-blue-500" />,
    title: "Obtenez une estimation détaillée",
    description: "Recevez une estimation précise de la valeur de votre véhicule avec des détails sur les facteurs qui influencent son prix.",
    bgColor: "bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200",
    iconBg: "bg-teal-100/10 group-hover:bg-teal-100/20"
  }, {
    icon: <Settings className="h-12 w-12 text-teal-500" />,
    title: "Affinez votre estimation",
    description: "Ajustez les paramètres comme le kilométrage, l'état ou les options pour affiner l'estimation de votre véhicule.",
    bgColor: "bg-gradient-to-br from-green-50 to-green-100 border-green-200",
    iconBg: "bg-green-100/10 group-hover:bg-green-100/20"
  }];
  const features = [{
    title: "IA de pointe",
    description: "Notre technologie d'intelligence artificielle analyse des millions de données pour une estimation précise.",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
    icon: <Sparkles className="h-5 w-5 text-blue-500" />
  }, {
    title: "Base de données complète",
    description: "Accès à une base de données de véhicules constamment mise à jour avec les dernières tendances du marché.",
    bgColor: "bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200",
    icon: <Rocket className="h-5 w-5 text-cyan-500" />
  }, {
    title: "Rapports détaillés",
    description: "Obtenez des rapports complets sur l'historique, la valeur et les perspectives de revente de votre véhicule.",
    bgColor: "bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200",
    icon: <Info className="h-5 w-5 text-teal-500" />
  }, {
    title: "Interface intuitive",
    description: "Une expérience utilisateur simplifiée pour obtenir rapidement et facilement l'information dont vous avez besoin.",
    bgColor: "bg-gradient-to-br from-green-50 to-green-100 border-green-200",
    icon: <Star className="h-5 w-5 text-green-500" />
  }];
  const testimonials = [{
    text: "J'ai vendu ma voiture 15% plus cher grâce à l'estimation précise d'AutoCote. Je recommande vivement ce service !",
    author: "Marie D.",
    role: "Particulier",
    gradient: "from-blue-500 to-cyan-600"
  }, {
    text: "En tant que professionnel de l'automobile, AutoCote est devenu un outil indispensable pour notre concession.",
    author: "Thomas L.",
    role: "Concessionnaire automobile",
    gradient: "from-teal-500 to-green-600"
  }];
  return <MainLayout>
      <section className="bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-500 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-white/20 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-white/20 translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-white/20"></div>
          
          <motion.div className="absolute top-20 right-[20%] w-12 h-12" animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5]
        }} transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut"
        }}>
            <Star className="w-full h-full text-yellow-300/30" />
          </motion.div>
          
          <motion.div className="absolute bottom-20 left-[30%] w-8 h-8" animate={{
          y: [0, -10, 0],
          opacity: [0.3, 0.7, 0.3]
        }} transition={{
          repeat: Infinity,
          duration: 2.5,
          delay: 0.5,
          ease: "easeInOut"
        }}>
            <Sparkles className="w-full h-full text-yellow-200/30" />
          </motion.div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100" initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }}>
            Comment fonctionne AutoCote ?
          </motion.h1>
          
          <motion.p className="text-xl max-w-3xl mx-auto mb-8 text-white/90" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.2,
          duration: 0.5
        }}>
            Découvrez comment notre technologie d'intelligence artificielle vous aide à obtenir l'estimation la plus précise de la valeur de votre véhicule.
          </motion.p>
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.5
        }} className="relative">
            <motion.div animate={{
            y: [0, 8, 0]
          }} transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut"
          }}>
              <ArrowDown className="h-10 w-10 mx-auto mt-12 text-white/80" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-blue-50 to-cyan-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-4" initial={{
            opacity: 0,
            scale: 0.5
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.3
          }}>
              <Star className="h-4 w-4 text-yellow-500" />
              Processus Simple
              <Star className="h-4 w-4 text-yellow-500" />
            </motion.span>
            
            <motion.h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }}>
              Une estimation en quelques étapes simples
            </motion.h2>
            
            <motion.p className="text-lg text-gray-600 max-w-3xl mx-auto" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }}>
              Obtenez rapidement une estimation précise de votre véhicule grâce à notre processus simplifié.
            </motion.p>
          </div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.2
        }}>
            {steps.map((step, index) => <motion.div key={index} className={`rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center relative border ${step.bgColor} group`} variants={fadeIn} whileHover={{
            y: -8,
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}>
                <div className="flex justify-center mb-6">
                  <motion.div className={`p-3 rounded-full ${step.iconBg} shadow-lg transition-all`} whileHover={{
                rotate: [0, 10, -10, 0],
                scale: 1.05
              }} transition={{
                duration: 0.5
              }}>
                    {step.icon}
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
                  {index < steps.length - 1 && <motion.div animate={{
                x: [0, 5, 0]
              }} transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut"
              }}>
                      
                    </motion.div>}
                </div>
              </motion.div>)}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-cyan-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-800 font-medium text-sm mb-4" initial={{
            opacity: 0,
            scale: 0.5
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.3
          }}>
              <Sparkles className="h-4 w-4 text-cyan-600" />
              Nos avantages
              <Sparkles className="h-4 w-4 text-cyan-600" />
            </motion.span>
            
            <motion.h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }}>
              Pourquoi choisir AutoCote ?
            </motion.h2>
            
            <motion.p className="text-lg text-gray-600 max-w-3xl mx-auto" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }}>
              Notre technologie avancée d'estimation de véhicules offre des avantages uniques.
            </motion.p>
          </div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.2
        }}>
            {features.map((feature, index) => <motion.div key={index} className="feature-card" variants={fadeIn} whileHover={{
            y: -8,
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}>
                <Card className={`overflow-hidden border ${feature.bgColor} hover:shadow-lg transition-all duration-300`}>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <motion.div className="flex items-center justify-center h-10 w-10 text-white" whileHover={{
                      rotate: 360,
                      transition: {
                        duration: 0.7
                      }
                    }}>
                          {feature.icon}
                        </motion.div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>)}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-50 to-teal-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 relative">
              <motion.div className="absolute -inset-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl blur-lg opacity-30" animate={{
              opacity: [0.2, 0.5, 0.2]
            }} transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut"
            }}></motion.div>
              
              <motion.img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" alt="Technologie d'estimation de véhicules" className="rounded-2xl shadow-2xl border-4 border-white relative z-10" initial={{
              opacity: 0,
              x: -50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} whileHover={{
              scale: 1.03,
              transition: {
                duration: 0.3
              }
            }} />
              
              <motion.div className="absolute -right-4 -bottom-4 bg-gradient-to-br from-teal-400 to-green-500 p-3 rounded-full shadow-xl" initial={{
              opacity: 0,
              scale: 0.5,
              rotate: -10
            }} whileInView={{
              opacity: 1,
              scale: 1,
              rotate: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.4,
              duration: 0.5
            }}>
                <Rocket className="h-8 w-8 text-white" />
              </motion.div>
            </div>
            
            <motion.div className="md:w-1/2 md:pl-10" initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <motion.span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 font-medium text-sm mb-4" initial={{
              opacity: 0,
              scale: 0.5
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.3
            }}>
                <Sparkles className="h-4 w-4 text-indigo-600" />
                Technologie avancée
              </motion.span>
              
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Une technologie de pointe à votre service</h2>
              
              <div className="space-y-4">
                {["Analyse en temps réel des données du marché automobile", "Prise en compte de plus de 50 paramètres pour une estimation précise", "Algorithmes d'apprentissage automatique constamment améliorés", "Historique complet des transactions pour des comparaisons pertinentes"].map((item, index) => <motion.div key={index} className="flex items-start" initial={{
                opacity: 0,
                x: 20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.1,
                duration: 0.5
              }}>
                    <div className={`flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-r from-${index % 2 === 0 ? 'blue-400 to-cyan-500' : 'teal-400 to-green-500'} text-white mr-3 flex-shrink-0 mt-1 shadow`}>
                      <Check className="h-4 w-4" />
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </motion.div>)}
              </div>
              
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.5,
              duration: 0.5
            }} className="mt-8">
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 text-left bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300">
                    <span className="flex items-center gap-2">
                      <Info className="h-4 w-4" />
                      <span>Découvrir plus de détails techniques</span>
                    </span>
                    <ArrowDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-3 p-4 bg-white rounded-lg shadow-inner border border-blue-100">
                    <p className="text-gray-700 mb-3">
                      Notre système utilise les dernières avancées en matière d'intelligence artificielle pour analyser des millions de données en temps réel. Des algorithmes d'apprentissage profond identifient les tendances du marché et prédisent l'évolution des prix.
                    </p>
                    <p className="text-gray-700">
                      Chaque estimation est accompagnée d'un indice de confiance basé sur la quantité et la qualité des données disponibles pour votre modèle de véhicule.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-cyan-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-800 font-medium text-sm mb-4" initial={{
            opacity: 0,
            scale: 0.5
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.3
          }}>
              <Star className="h-4 w-4 text-pink-500" />
              Témoignages
              <Star className="h-4 w-4 text-pink-500" />
            </motion.span>
            
            <motion.h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }}>
              Ce que nos utilisateurs disent
            </motion.h2>
            
            <motion.p className="text-lg text-gray-600 max-w-3xl mx-auto" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }}>
              Découvrez les témoignages de personnes qui ont utilisé AutoCote pour estimer leur véhicule.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => <motion.div key={index} className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100 relative overflow-hidden" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.2
          }} whileHover={{
            y: -5,
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}>
                <div className="absolute -right-12 -top-12 w-24 h-24 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 opacity-40"></div>
                <div className="absolute -left-12 -bottom-12 w-24 h-24 rounded-full bg-gradient-to-br from-cyan-50 to-cyan-100 opacity-40"></div>
                
                <div className="flex justify-end mb-4 relative z-10">
                  <motion.div className="text-5xl text-gray-200 font-serif" initial={{
                scale: 1
              }} whileHover={{
                scale: 1.2,
                transition: {
                  duration: 0.3
                }
              }}>
                    "
                  </motion.div>
                </div>
                
                <p className="text-gray-700 mb-6 italic relative z-10">{testimonial.text}</p>
                
                <div className="flex items-center relative z-10">
                  <div className={`h-10 w-10 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center text-white font-semibold shadow-md`}>
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-800">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-500 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-400/10 blur-3xl" animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.4, 0.3]
        }} transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut"
        }}></motion.div>
          
          <motion.div className="absolute bottom-0 left-20 w-64 h-64 rounded-full bg-cyan-400/10 blur-3xl" animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2]
        }} transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
          delay: 1
        }}></motion.div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div className="max-w-3xl mx-auto text-white" initial={{
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Prêt à connaître la vraie valeur de votre véhicule ?</h2>
            <p className="text-xl mb-8 text-white/90">Accédez à une estimation précise en quelques secondes grâce à notre IA. Souscrivez à un abonnement et profitez d’une analyse détaillée basée sur les tendances du marché.</p>
            
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group" size="lg">
                <span className="mr-2">Estimer mon véhicule</span>
                <motion.div animate={{
                x: [0, 5, 0]
              }} transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut"
              }} className="inline-block">
                  <ArrowRight className="inline-block" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <ScrollToTopButton />
    </MainLayout>;
};
export default HowItWorks;
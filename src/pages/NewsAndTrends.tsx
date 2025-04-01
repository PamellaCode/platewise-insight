
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Calendar, ArrowRight } from 'lucide-react';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const MARKET_TRENDS = [
  {
    id: 1,
    title: "Les SUV électriques dominent le marché en 2023",
    excerpt: "Les tendances montrent une forte croissance des SUV électriques, avec une hausse de 45% des ventes par rapport à l'année précédente.",
    category: "marché",
    date: "15 Mai 2023",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "Nouvelle réglementation sur les émissions de CO2",
    excerpt: "La Commission européenne a adopté de nouvelles mesures pour réduire les émissions des véhicules particuliers. Quels impacts sur les prix?",
    category: "réglementation",
    date: "3 Juillet 2023",
    image: "https://images.unsplash.com/photo-1616196334218-11d2fbf84465?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    title: "Impact de l'inflation sur le marché de l'occasion",
    excerpt: "L'inflation continue d'influencer le marché des véhicules d'occasion avec une hausse moyenne des prix de 15% sur certains modèles.",
    category: "prix",
    date: "22 Août 2023",
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 4,
    title: "Les modèles hybrides les plus cotés en 2023",
    excerpt: "Découvrez notre analyse des 5 modèles hybrides qui conservent le mieux leur valeur à la revente cette année.",
    category: "cote",
    date: "10 Octobre 2023",
    image: "https://images.unsplash.com/photo-1501066927591-314112b5888e?w=800&auto=format&fit=crop&q=60"
  },
];

const NewsAndTrends: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('tous');
  
  const categories = ['tous', 'marché', 'prix', 'cote', 'réglementation'];
  
  const filteredTrends = MARKET_TRENDS.filter(trend => {
    const matchesSearch = trend.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          trend.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === 'tous' || trend.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Actualités et Tendances du Marché Automobile
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez les dernières tendances du marché automobile, les évolutions des prix et les facteurs qui influencent la valeur de votre véhicule.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
            <div className="relative w-full md:w-2/3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                className="pl-10"
                placeholder="Rechercher une tendance ou une analyse..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full md:w-auto">
              <TabsList>
                {categories.map(cat => (
                  <TabsTrigger key={cat} value={cat} className="capitalize">
                    {cat}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTrends.length > 0 ? (
              filteredTrends.map(trend => (
                <motion.div
                  key={trend.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video w-full overflow-hidden">
                      <img 
                        src={trend.image} 
                        alt={trend.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    <CardContent className="p-5">
                      <div className="flex justify-between items-center mb-3">
                        <Badge variant="secondary" className="capitalize">
                          {trend.category}
                        </Badge>
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> {trend.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{trend.title}</h3>
                      <p className="text-gray-600 mb-4">{trend.excerpt}</p>
                      <Button variant="link" className="p-0 h-auto flex items-center gap-1 text-blue-600">
                        Lire plus <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <h3 className="text-xl font-medium mb-2">Aucun résultat trouvé</h3>
                <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
              </div>
            )}
          </div>
          
          <div className="mt-16 bg-blue-50 rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Restez informé des dernières tendances</h2>
                <p className="text-gray-600">
                  Inscrivez-vous à notre newsletter pour recevoir nos analyses mensuelles sur l'évolution du marché automobile.
                </p>
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <Input placeholder="Votre email" className="w-full md:w-auto" />
                <Button>S'abonner</Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default NewsAndTrends;

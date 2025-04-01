
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Calendar, ArrowRight, ArrowLeft, X } from 'lucide-react';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import NewsletterSection from '@/components/sections/NewsletterSection';

const MARKET_TRENDS = [
  {
    id: 1,
    title: "Les SUV électriques dominent le marché en 2023",
    excerpt: "Les tendances montrent une forte croissance des SUV électriques, avec une hausse de 45% des ventes par rapport à l'année précédente.",
    content: `
      <p>Les SUV électriques ont connu une croissance spectaculaire en 2023, avec une augmentation de 45% des ventes par rapport à l'année précédente. Cette tendance s'explique par plusieurs facteurs convergents.</p>
      <p>Tout d'abord, l'offre s'est considérablement élargie avec l'arrivée de nouveaux modèles proposés par presque tous les constructeurs. La technologie des batteries a également fait de grands progrès, permettant une autonomie accrue qui réduit l'anxiété liée à la distance parcourable.</p>
      <p>Les politiques publiques favorables aux véhicules électriques, comme les subventions à l'achat et l'installation de bornes de recharge, ont également joué un rôle crucial dans cette croissance.</p>
      <h3>Impact sur le marché de l'occasion</h3>
      <p>Cette forte demande pour les SUV électriques neufs commence à se répercuter sur le marché de l'occasion, où les premiers modèles arrivent maintenant avec une décote intéressante. On observe une valorisation supérieure de ces véhicules par rapport à leurs homologues thermiques sur le marché secondaire.</p>
      <h3>Perspectives futures</h3>
      <p>Les analystes prévoient que cette tendance va se poursuivre au cours des prochaines années, avec une part de marché des SUV électriques qui pourrait atteindre 30% des ventes de véhicules neufs d'ici 2025.</p>
    `,
    category: "marché",
    date: "15 Mai 2023",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "Nouvelle réglementation sur les émissions de CO2",
    excerpt: "La Commission européenne a adopté de nouvelles mesures pour réduire les émissions des véhicules particuliers. Quels impacts sur les prix?",
    content: `
      <p>La Commission européenne vient d'adopter un nouveau règlement visant à réduire davantage les émissions de CO2 des véhicules particuliers et utilitaires légers. Cette réglementation plus stricte aura des conséquences importantes sur le marché automobile.</p>
      <p>À partir de 2025, les constructeurs devront réduire de 15% supplémentaires les émissions moyennes de leur flotte par rapport aux niveaux de 2021. Cette exigence passera à 37,5% pour les voitures particulières et à 31% pour les utilitaires légers d'ici 2030.</p>
      <h3>Impact sur les prix des véhicules</h3>
      <p>Pour se conformer à ces nouvelles normes, les constructeurs devront investir massivement dans les technologies de réduction des émissions et accélérer l'électrification de leur gamme. Ces investissements se répercuteront inévitablement sur les prix de vente des véhicules neufs.</p>
      <p>Nos analyses montrent qu'une augmentation moyenne de 2 000 à 3 500 euros par véhicule est à prévoir dans les deux prochaines années pour les modèles thermiques et hybrides.</p>
      <h3>Conséquences sur le marché de l'occasion</h3>
      <p>Les véhicules d'occasion récents et peu émetteurs devraient voir leur valeur augmenter. À l'inverse, les véhicules plus anciens et plus polluants pourraient subir une dépréciation accélérée, particulièrement dans les zones urbaines où des restrictions de circulation sont mises en place.</p>
    `,
    category: "réglementation",
    date: "3 Juillet 2023",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    title: "Impact de l'inflation sur le marché de l'occasion",
    excerpt: "L'inflation continue d'influencer le marché des véhicules d'occasion avec une hausse moyenne des prix de 15% sur certains modèles.",
    content: `
      <p>L'inflation qui touche l'économie mondiale depuis 2022 continue d'avoir un impact significatif sur le marché des véhicules d'occasion. Nos données montrent une hausse moyenne des prix de 15% sur certains modèles populaires.</p>
      <p>Cette augmentation s'explique par plusieurs facteurs. D'abord, les délais de livraison toujours longs pour les véhicules neufs poussent de nombreux acheteurs vers le marché de l'occasion. Ensuite, la hausse des taux d'intérêt rend les financements plus coûteux, ce qui incite certains acheteurs à se tourner vers des véhicules d'occasion moins chers que les modèles neufs équivalents.</p>
      <h3>Les segments les plus touchés</h3>
      <p>Les citadines et SUV compacts de moins de 5 ans sont les catégories qui ont connu les plus fortes augmentations de prix, avec des hausses allant jusqu'à 18% sur certains modèles populaires. Les véhicules électriques d'occasion récents ont également vu leur valeur augmenter de façon significative.</p>
      <h3>Perspectives pour les prochains mois</h3>
      <p>Les analystes prévoient une stabilisation progressive des prix à partir du second semestre 2023, à mesure que les chaînes d'approvisionnement des constructeurs retrouvent un fonctionnement normal et que les délais de livraison des véhicules neufs se réduisent.</p>
    `,
    category: "prix",
    date: "22 Août 2023",
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 4,
    title: "Les modèles hybrides les plus cotés en 2023",
    excerpt: "Découvrez notre analyse des 5 modèles hybrides qui conservent le mieux leur valeur à la revente cette année.",
    content: `
      <p>Face à la transition écologique et aux restrictions de circulation dans les centres-villes, les véhicules hybrides représentent une solution intermédiaire attractive pour de nombreux automobilistes. Notre équipe d'analystes a passé en revue les données du marché pour identifier les 5 modèles hybrides qui conservent le mieux leur valeur à la revente en 2023.</p>
      <h3>Top 5 des modèles hybrides avec la meilleure valeur résiduelle</h3>
      <ol>
        <li><strong>Toyota RAV4 Hybride</strong> - Ce SUV familial conserve en moyenne 72% de sa valeur après 3 ans, grâce à sa réputation de fiabilité et sa consommation maîtrisée.</li>
        <li><strong>Lexus NX 350h</strong> - Le SUV premium de Lexus affiche une valeur résiduelle de 68% après 3 ans, soutenue par son positionnement haut de gamme et sa technologie hybride mature.</li>
        <li><strong>Honda CR-V e:HEV</strong> - Avec 66% de valeur conservée après 3 ans, ce modèle bénéficie d'une image positive et d'une demande soutenue.</li>
        <li><strong>Hyundai Tucson Hybrid</strong> - Son design moderne et sa garantie étendue lui permettent de conserver 64% de sa valeur sur 3 ans.</li>
        <li><strong>Kia Sportage Hybrid</strong> - Le cousin du Tucson complète ce top 5 avec 63% de valeur résiduelle, proposant un excellent rapport équipement/prix.</li>
      </ol>
      <h3>Facteurs influençant la bonne tenue des valeurs</h3>
      <p>Plusieurs éléments communs expliquent la bonne valeur résiduelle de ces modèles: une technologie hybride éprouvée, une réputation de fiabilité, des coûts d'entretien maîtrisés et une demande soutenue sur le marché de l'occasion.</p>
    `,
    category: "cote",
    date: "10 Octobre 2023",
    image: "https://images.unsplash.com/photo-1501066927591-314112b5888e?w=800&auto=format&fit=crop&q=60"
  },
];

const NewsAndTrends: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('tous');
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);
  
  const categories = ['tous', 'marché', 'prix', 'cote', 'réglementation'];
  
  const filteredTrends = MARKET_TRENDS.filter(trend => {
    const matchesSearch = trend.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          trend.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === 'tous' || trend.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleReadMore = (id: number) => {
    setSelectedArticle(id);
    window.scrollTo(0, 0);
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
  };

  const selectedArticleData = MARKET_TRENDS.find(article => article.id === selectedArticle);

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
          
          <AnimatePresence mode="wait">
            {selectedArticle ? (
              <motion.div
                key="article-detail"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden mb-12"
              >
                {selectedArticleData && (
                  <>
                    <div className="relative h-64 md:h-96 overflow-hidden">
                      <img 
                        src={selectedArticleData.image} 
                        alt={selectedArticleData.title}
                        className="w-full h-full object-cover" 
                      />
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={handleCloseArticle}
                        className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="flex justify-between items-center mb-4">
                        <Badge variant="secondary" className="capitalize">
                          {selectedArticleData.category}
                        </Badge>
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> {selectedArticleData.date}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4">{selectedArticleData.title}</h2>
                      <div 
                        className="prose prose-blue max-w-none text-gray-700"
                        dangerouslySetInnerHTML={{ __html: selectedArticleData.content }}
                      />
                      <div className="mt-8 flex justify-between">
                        <Button 
                          variant="outline" 
                          onClick={handleCloseArticle}
                          className="flex items-center gap-2"
                        >
                          <ArrowLeft className="h-4 w-4" />
                          Retour aux articles
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="article-list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
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
                            <Button 
                              variant="link" 
                              className="p-0 h-auto flex items-center gap-1 text-blue-600"
                              onClick={() => handleReadMore(trend.id)}
                            >
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
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="mt-16">
            <NewsletterSection />
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default NewsAndTrends;

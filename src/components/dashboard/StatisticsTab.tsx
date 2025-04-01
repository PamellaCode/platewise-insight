import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart3, LineChart, PieChart, TrendingUp } from 'lucide-react';
import MonthlyChart from './statistics/MonthlyChart';
import BrandsChart from './statistics/BrandsChart';
import PriceRangeChart from './statistics/PriceRangeChart';
import StatsOverviewCard from './statistics/StatsOverviewCard';
import { ScrollArea } from '@/components/ui/scroll-area';
const StatisticsTab = () => {
  // Sample data for the charts
  const monthlyData = [{
    name: 'Jan',
    estimations: 4,
    value: 4
  }, {
    name: 'Fév',
    estimations: 3,
    value: 3
  }, {
    name: 'Mar',
    estimations: 5,
    value: 5
  }, {
    name: 'Avr',
    estimations: 2,
    value: 2
  }, {
    name: 'Mai',
    estimations: 7,
    value: 7
  }, {
    name: 'Juin',
    estimations: 6,
    value: 6
  }, {
    name: 'Juil',
    estimations: 8,
    value: 8
  }, {
    name: 'Août',
    estimations: 9,
    value: 9
  }, {
    name: 'Sep',
    estimations: 11,
    value: 11
  }, {
    name: 'Oct',
    estimations: 13,
    value: 13
  }, {
    name: 'Nov',
    estimations: 8,
    value: 8
  }, {
    name: 'Déc',
    estimations: 12,
    value: 12
  }];
  const brandData = [{
    name: 'Peugeot',
    value: 35
  }, {
    name: 'Renault',
    value: 28
  }, {
    name: 'Citroën',
    value: 15
  }, {
    name: 'Volkswagen',
    value: 12
  }, {
    name: 'Toyota',
    value: 10
  }];
  const priceRangeData = [{
    name: '0-5k€',
    value: 15
  }, {
    name: '5k-10k€',
    value: 35
  }, {
    name: '10k-15k€',
    value: 25
  }, {
    name: '15k-20k€',
    value: 18
  }, {
    name: '+20k€',
    value: 7
  }];
  const COLORS = ['#0EA5E9', '#F97316', '#8B5CF6', '#10B981', '#F43F5E'];
  const [activeTab, setActiveTab] = useState('overview');
  return <ScrollArea className="h-[calc(100vh-120px)]">
      <div className="space-y-6 max-w-7xl mx-auto pb-8 px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent animate-fade-in">
            Statistiques
          </h1>
          
        </div>

        <Tabs defaultValue="overview" className="space-y-6" onValueChange={setActiveTab} value={activeTab}>
          <div className="overflow-x-auto pb-2">
            <TabsList className="grid w-full sm:w-auto sm:inline-flex grid-cols-4 rounded-lg p-1 bg-muted/30 shadow-sm">
              <TabsTrigger value="overview" className="flex gap-2 items-center data-[state=active]:bg-white data-[state=active]:shadow-sm" onClick={() => setActiveTab('overview')}>
                <TrendingUp className="h-4 w-4" />
                <span className="hidden sm:inline">Aperçu</span>
              </TabsTrigger>
              <TabsTrigger value="monthly" className="flex gap-2 items-center data-[state=active]:bg-white data-[state=active]:shadow-sm" onClick={() => setActiveTab('monthly')}>
                <LineChart className="h-4 w-4" />
                <span className="hidden sm:inline">Mensuel</span>
              </TabsTrigger>
              <TabsTrigger value="brands" className="flex gap-2 items-center data-[state=active]:bg-white data-[state=active]:shadow-sm" onClick={() => setActiveTab('brands')}>
                <PieChart className="h-4 w-4" />
                <span className="hidden sm:inline">Marques</span>
              </TabsTrigger>
              <TabsTrigger value="prices" className="flex gap-2 items-center data-[state=active]:bg-white data-[state=active]:shadow-sm" onClick={() => setActiveTab('prices')}>
                <BarChart3 className="h-4 w-4" />
                <span className="hidden sm:inline">Prix</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="overview" className="animate-fade-in">
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <StatsOverviewCard title="Estimations totales" description="Le nombre total d'estimations réalisées" value="88" change="+12% par rapport au mois dernier" trend="up" icon={<TrendingUp className="h-5 w-5" />} color="#0EA5E9" />
              
              <StatsOverviewCard title="Moyenne des prix" description="Prix moyen des véhicules estimés" value="12 500 €" change="+5% par rapport au mois dernier" trend="up" icon={<BarChart3 className="h-5 w-5" />} color="#F97316" />
              
              <StatsOverviewCard title="Marque la plus estimée" description="Marque avec le plus d'estimations" value="Peugeot" change="35% des estimations totales" icon={<PieChart className="h-5 w-5" />} color="#8B5CF6" />
            </div>
            
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mt-6">
              <MonthlyChart data={monthlyData} />
              <BrandsChart data={brandData} colors={COLORS} />
            </div>
          </TabsContent>

          <TabsContent value="monthly" className="animate-fade-in">
            <MonthlyChart data={monthlyData} fullSize={true} />
          </TabsContent>

          <TabsContent value="brands" className="animate-fade-in">
            <BrandsChart data={brandData} colors={COLORS} fullSize={true} />
          </TabsContent>

          <TabsContent value="prices" className="animate-fade-in">
            <PriceRangeChart data={priceRangeData} colors={COLORS} />
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>;
};
export default StatisticsTab;
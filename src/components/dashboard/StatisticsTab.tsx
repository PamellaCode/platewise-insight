
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart3, LineChart, PieChart, TrendingUp } from 'lucide-react';
import MonthlyChart from './statistics/MonthlyChart';
import BrandsChart from './statistics/BrandsChart';
import PriceRangeChart from './statistics/PriceRangeChart';
import StatsOverviewCard from './statistics/StatsOverviewCard';

const StatisticsTab = () => {
  // Sample data for the charts
  const monthlyData = [
    { name: 'Jan', estimations: 4, value: 4 },
    { name: 'Fév', estimations: 3, value: 3 },
    { name: 'Mar', estimations: 5, value: 5 },
    { name: 'Avr', estimations: 2, value: 2 },
    { name: 'Mai', estimations: 7, value: 7 },
    { name: 'Juin', estimations: 6, value: 6 },
    { name: 'Juil', estimations: 8, value: 8 },
    { name: 'Août', estimations: 9, value: 9 },
    { name: 'Sep', estimations: 11, value: 11 },
    { name: 'Oct', estimations: 13, value: 13 },
    { name: 'Nov', estimations: 8, value: 8 },
    { name: 'Déc', estimations: 12, value: 12 },
  ];

  const brandData = [
    { name: 'Peugeot', value: 35 },
    { name: 'Renault', value: 28 },
    { name: 'Citroën', value: 15 },
    { name: 'Volkswagen', value: 12 },
    { name: 'Toyota', value: 10 },
  ];

  const priceRangeData = [
    { name: '0-5k€', value: 15 },
    { name: '5k-10k€', value: 35 },
    { name: '10k-15k€', value: 25 },
    { name: '15k-20k€', value: 18 },
    { name: '+20k€', value: 7 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Statistiques</h1>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4 md:w-auto md:grid-cols-4">
          <TabsTrigger value="overview" className="flex gap-2 items-center">
            <TrendingUp className="h-4 w-4" />
            <span className="hidden sm:inline">Aperçu</span>
          </TabsTrigger>
          <TabsTrigger value="monthly" className="flex gap-2 items-center">
            <LineChart className="h-4 w-4" />
            <span className="hidden sm:inline">Mensuel</span>
          </TabsTrigger>
          <TabsTrigger value="brands" className="flex gap-2 items-center">
            <PieChart className="h-4 w-4" />
            <span className="hidden sm:inline">Marques</span>
          </TabsTrigger>
          <TabsTrigger value="prices" className="flex gap-2 items-center">
            <BarChart3 className="h-4 w-4" />
            <span className="hidden sm:inline">Prix</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <StatsOverviewCard
              title="Estimations totales"
              description="Le nombre total d'estimations réalisées"
              value="88"
              change="+12% par rapport au mois dernier"
            />
            
            <StatsOverviewCard
              title="Moyenne des prix"
              description="Prix moyen des véhicules estimés"
              value="12 500 €"
              change="+5% par rapport au mois dernier"
            />
            
            <StatsOverviewCard
              title="Marque la plus estimée"
              description="Marque avec le plus d'estimations"
              value="Peugeot"
              change="35% des estimations totales"
            />
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <MonthlyChart data={monthlyData} />
            <BrandsChart data={brandData} colors={COLORS} />
          </div>
        </TabsContent>

        <TabsContent value="monthly">
          <MonthlyChart data={monthlyData} fullSize={true} />
        </TabsContent>

        <TabsContent value="brands">
          <BrandsChart data={brandData} colors={COLORS} fullSize={true} />
        </TabsContent>

        <TabsContent value="prices">
          <PriceRangeChart data={priceRangeData} colors={COLORS} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StatisticsTab;


import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart3, LineChart, PieChart, TrendingUp } from 'lucide-react';
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart as RechartsLineChart, Pie, PieChart as RechartsPieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

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
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Estimations totales</CardTitle>
                <CardDescription>Le nombre total d'estimations réalisées</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">88</div>
                <p className="text-xs text-muted-foreground">+12% par rapport au mois dernier</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Moyenne des prix</CardTitle>
                <CardDescription>Prix moyen des véhicules estimés</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">12 500 €</div>
                <p className="text-xs text-muted-foreground">+5% par rapport au mois dernier</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Marque la plus estimée</CardTitle>
                <CardDescription>Marque avec le plus d'estimations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">Peugeot</div>
                <p className="text-xs text-muted-foreground">35% des estimations totales</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Estimations mensuelles</CardTitle>
                <CardDescription>Nombre d'estimations par mois</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{
                  estimations: {
                    label: "Estimations",
                    color: "#0088FE"
                  }
                }} className="h-[300px]">
                  <RechartsLineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Line 
                      type="monotone" 
                      dataKey="estimations" 
                      stroke="#0088FE" 
                      activeDot={{ r: 8 }} 
                    />
                  </RechartsLineChart>
                </ChartContainer>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Répartition par marque</CardTitle>
                <CardDescription>Pourcentage d'estimations par marque</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{
                  value: {
                    label: "Estimations",
                    color: "#0088FE"
                  }
                }} className="h-[300px]">
                  <RechartsPieChart>
                    <Pie
                      data={brandData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {brandData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                  </RechartsPieChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="monthly">
          <Card>
            <CardHeader>
              <CardTitle>Estimation mensuelles</CardTitle>
              <CardDescription>Évolution du nombre d'estimations au cours de l'année</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{
                estimations: {
                  label: "Estimations",
                  color: "#0088FE"
                }
              }} className="h-[400px]">
                <RechartsLineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="estimations" 
                    stroke="#0088FE" 
                    activeDot={{ r: 8 }} 
                  />
                </RechartsLineChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="brands">
          <Card>
            <CardHeader>
              <CardTitle>Répartition par marque</CardTitle>
              <CardDescription>Pourcentage d'estimations par marque de véhicule</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{
                value: {
                  label: "Estimations",
                  color: "#0088FE"
                }
              }} className="h-[400px]">
                <RechartsPieChart>
                  <Pie
                    data={brandData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {brandData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                </RechartsPieChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="prices">
          <Card>
            <CardHeader>
              <CardTitle>Répartition par gamme de prix</CardTitle>
              <CardDescription>Nombre d'estimations par tranche de prix</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{
                value: {
                  label: "Estimations",
                  color: "#0088FE"
                }
              }} className="h-[400px]">
                <BarChart data={priceRangeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Bar dataKey="value" fill="#0088FE">
                    {priceRangeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StatisticsTab;


import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartLegend, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Cell, Legend, Pie, PieChart as RechartsPieChart } from 'recharts';

interface BrandData {
  name: string;
  value: number;
}

interface BrandsChartProps {
  data: BrandData[];
  colors: string[];
  fullSize?: boolean;
}

const BrandsChart: React.FC<BrandsChartProps> = ({ data, colors, fullSize = false }) => {
  return (
    <Card className={fullSize ? 'w-full' : ''}>
      <CardHeader>
        <CardTitle>Répartition par marque</CardTitle>
        <CardDescription>Pourcentage d'estimations par marque de véhicule</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer 
          config={{
            value: {
              label: "Estimations",
              color: "#0088FE"
            }
          }} 
          className={fullSize ? "h-[400px]" : "h-[300px]"}
        >
          <RechartsPieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={fullSize ? 120 : 80}
              fill="#8884d8"
              dataKey="value"
              label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend />
          </RechartsPieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default BrandsChart;

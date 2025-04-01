
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from 'recharts';

interface PriceRangeData {
  name: string;
  value: number;
}

interface PriceRangeChartProps {
  data: PriceRangeData[];
  colors: string[];
}

const PriceRangeChart: React.FC<PriceRangeChartProps> = ({ data, colors }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Répartition par gamme de prix</CardTitle>
        <CardDescription>Nombre d'estimations par tranche de prix</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer 
          config={{
            value: {
              label: "Estimations",
              color: "#0088FE"
            }
          }} 
          className="h-[400px]"
        >
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="value" fill="#0088FE">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default PriceRangeChart;

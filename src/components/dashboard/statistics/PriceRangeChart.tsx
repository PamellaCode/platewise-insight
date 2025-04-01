
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

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
    <Card className="border border-gray-100 hover:border-gray-200 transition-all hover:shadow-md">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">Répartition par gamme de prix</CardTitle>
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
          className="h-[450px]"
        >
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
            <XAxis 
              dataKey="name" 
              tickLine={false} 
              axisLine={{ stroke: '#e5e7eb' }}
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              tickLine={false} 
              axisLine={{ stroke: '#e5e7eb' }} 
              tick={{ fontSize: 12 }}
              allowDecimals={false}
            />
            <ChartTooltip 
              cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
              content={<ChartTooltipContent />} 
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar 
              dataKey="value" 
              radius={[4, 4, 0, 0]}
              barSize={50}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={colors[index % colors.length]} 
                  className="hover:opacity-80 transition-opacity"
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default PriceRangeChart;

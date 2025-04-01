
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { CartesianGrid, Line, LineChart as RechartsLineChart, XAxis, YAxis } from 'recharts';

interface MonthlyChartProps {
  data: { name: string; estimations: number; value: number; }[];
  fullSize?: boolean;
}

const MonthlyChart: React.FC<MonthlyChartProps> = ({ data, fullSize = false }) => {
  return (
    <Card className={fullSize ? 'w-full' : ''}>
      <CardHeader>
        <CardTitle>Estimation mensuelles</CardTitle>
        <CardDescription>
          {fullSize 
            ? "Évolution du nombre d'estimations au cours de l'année" 
            : "Nombre d'estimations par mois"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer 
          config={{
            estimations: {
              label: "Estimations",
              color: "#0088FE"
            }
          }} 
          className={fullSize ? "h-[400px]" : "h-[300px]"}
        >
          <RechartsLineChart data={data}>
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
  );
};

export default MonthlyChart;

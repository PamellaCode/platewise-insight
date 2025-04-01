
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { CartesianGrid, Line, LineChart as RechartsLineChart, XAxis, YAxis, ResponsiveContainer } from 'recharts';

interface MonthlyChartProps {
  data: { name: string; estimations: number; value: number; }[];
  fullSize?: boolean;
}

const MonthlyChart: React.FC<MonthlyChartProps> = ({ data, fullSize = false }) => {
  return (
    <Card className={`${fullSize ? 'w-full' : ''} border border-gray-100 hover:border-gray-200 transition-all hover:shadow-md`}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">Estimation mensuelles</CardTitle>
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
              color: "#0EA5E9"
            }
          }} 
          className={fullSize ? "h-[450px]" : "h-[300px]"}
        >
          <RechartsLineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="name" tickLine={false} axisLine={{ stroke: '#e5e7eb' }} />
            <YAxis tickLine={false} axisLine={{ stroke: '#e5e7eb' }} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} verticalAlign="top" />
            <Line 
              type="monotone" 
              dataKey="estimations" 
              stroke="#0EA5E9" 
              strokeWidth={2}
              activeDot={{ r: 8, fill: "#0EA5E9", stroke: "white", strokeWidth: 2 }} 
              dot={{ r: 3, fill: "white", stroke: "#0EA5E9", strokeWidth: 2 }}
            />
          </RechartsLineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default MonthlyChart;

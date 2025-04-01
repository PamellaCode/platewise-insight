
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
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = 25 + innerRadius + (outerRadius - innerRadius);
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill={colors[index % colors.length]}
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        className="text-xs font-medium"
      >
        {`${name} (${(percent * 100).toFixed(0)}%)`}
      </text>
    );
  };

  return (
    <Card className={`${fullSize ? 'w-full' : ''} border border-gray-100 hover:border-gray-200 transition-all hover:shadow-md`}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">Répartition par marque</CardTitle>
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
          className={fullSize ? "h-[450px]" : "h-[300px]"}
        >
          <RechartsPieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={fullSize ? 150 : 90}
              innerRadius={fullSize ? 60 : 40}
              fill="#8884d8"
              dataKey="value"
              label={fullSize ? renderCustomizedLabel : ({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
              paddingAngle={2}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={colors[index % colors.length]} 
                  stroke="white"
                  strokeWidth={2}
                />
              ))}
            </Pie>
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend 
              layout="horizontal" 
              verticalAlign="bottom" 
              align="center"
              formatter={(value, entry, index) => (
                <span style={{ color: colors[index % colors.length] }}>{value}</span>
              )}
            />
          </RechartsPieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default BrandsChart;


import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingDown, TrendingUp } from 'lucide-react';

interface StatsCardProps {
  title: string;
  description: string;
  value: string | number;
  change: string;
  trend?: 'up' | 'down' | 'neutral';
  icon?: React.ReactNode;
  color?: string;
}

const StatsOverviewCard: React.FC<StatsCardProps> = ({ 
  title, 
  description, 
  value, 
  change,
  trend,
  icon,
  color = '#0088FE'
}) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md border border-gray-100 hover:border-gray-200">
      <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
        <div>
          <CardTitle className="text-base font-semibold">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        {icon && (
          <div 
            className="p-2 rounded-full"
            style={{ backgroundColor: `${color}20` }}
          >
            <div style={{ color: color }}>{icon}</div>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold" style={{ color: color }}>{value}</div>
        <div className="flex items-center text-xs mt-1">
          {trend === 'up' && <TrendingUp className="mr-1 h-3 w-3 text-green-500" />}
          {trend === 'down' && <TrendingDown className="mr-1 h-3 w-3 text-red-500" />}
          <p className={`${trend === 'up' ? 'text-green-500' : trend === 'down' ? 'text-red-500' : 'text-gray-500'}`}>
            {change}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsOverviewCard;

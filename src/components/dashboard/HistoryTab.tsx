
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Car, FileText, Filter, Search, TrendingUp, TrendingDown, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger 
} from "@/components/ui/popover";

interface EstimationItem {
  id: number;
  licensePlate: string;
  brand: string;
  model: string;
  year: number;
  estimatedPrice: number;
  previousPrice?: number;
  date: Date;
  status: 'completed' | 'in_progress' | 'expired';
}

interface HistoryTabProps {
  estimations: EstimationItem[];
}

const HistoryTab: React.FC<HistoryTabProps> = ({ estimations }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [brandFilter, setBrandFilter] = useState('');
  const [timeFilter, setTimeFilter] = useState('');

  // Extract unique brands for filter
  const uniqueBrands = Array.from(new Set(estimations.map(est => est.brand)));

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(date);
  };

  const getStatusBadge = (status: EstimationItem['status']) => {
    switch (status) {
      case 'completed':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Complétée</span>;
      case 'in_progress':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">En cours</span>;
      case 'expired':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">Expirée</span>;
      default:
        return null;
    }
  };

  // Filter estimations based on search query and filters
  const filteredEstimations = estimations.filter(estimation => {
    // Search filter
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = estimation.licensePlate.toLowerCase().includes(searchLower) || 
                         estimation.brand.toLowerCase().includes(searchLower) || 
                         estimation.model.toLowerCase().includes(searchLower) || 
                         estimation.year.toString().includes(searchLower);
    
    // Brand filter
    const matchesBrand = brandFilter === '' || estimation.brand === brandFilter;
    
    // Time filter
    let matchesTime = true;
    const now = new Date();
    if (timeFilter === 'last7days') {
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(now.getDate() - 7);
      matchesTime = estimation.date >= sevenDaysAgo;
    } else if (timeFilter === 'last30days') {
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(now.getDate() - 30);
      matchesTime = estimation.date >= thirtyDaysAgo;
    } else if (timeFilter === 'last6months') {
      const sixMonthsAgo = new Date();
      sixMonthsAgo.setMonth(now.getMonth() - 6);
      matchesTime = estimation.date >= sixMonthsAgo;
    }
    
    return matchesSearch && matchesBrand && matchesTime;
  });

  // Helper function to calculate price change
  const getPriceChange = (estimation: EstimationItem) => {
    if (!estimation.previousPrice) return null;
    
    const change = estimation.estimatedPrice - estimation.previousPrice;
    const percentChange = (change / estimation.previousPrice) * 100;
    
    return {
      isIncrease: change > 0,
      percentChange: Math.abs(percentChange).toFixed(1),
      absoluteChange: Math.abs(change)
    };
  };

  // Reset filters function
  const resetFilters = () => {
    setBrandFilter('');
    setTimeFilter('');
    setSearchQuery('');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Historique des estimations</CardTitle>
        <CardDescription>Suivez l'évolution de la valeur de vos véhicules</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex flex-col md:flex-row gap-4">
          {/* Search field */}
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Rechercher par plaque, marque, modèle..." 
              className="pl-9" 
              value={searchQuery} 
              onChange={e => setSearchQuery(e.target.value)} 
            />
          </div>
          
          {/* Filters */}
          <div className="flex gap-2">
            {/* Brand filter */}
            <Select value={brandFilter} onValueChange={setBrandFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Marque" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Toutes les marques</SelectItem>
                {uniqueBrands.map(brand => (
                  <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            {/* Time period filter */}
            <Select value={timeFilter} onValueChange={setTimeFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Période" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Toutes les périodes</SelectItem>
                <SelectItem value="last7days">7 derniers jours</SelectItem>
                <SelectItem value="last30days">30 derniers jours</SelectItem>
                <SelectItem value="last6months">6 derniers mois</SelectItem>
              </SelectContent>
            </Select>
            
            {/* Reset filters button - only show if filters are active */}
            {(brandFilter || timeFilter || searchQuery) && (
              <Button variant="outline" size="default" onClick={resetFilters}>
                Réinitialiser
              </Button>
            )}
          </div>
        </div>

        <div className="space-y-6">
          {filteredEstimations.length > 0 ? (
            filteredEstimations.map((estimation) => {
              const priceChange = getPriceChange(estimation);
              
              return (
                <div key={estimation.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start space-x-3">
                      <div className="bg-auto-blue-50 text-auto-blue-500 p-2 rounded-lg">
                        <Car className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="font-medium">
                          {estimation.brand} {estimation.model} ({estimation.year})
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          Plaque: {estimation.licensePlate}
                        </div>
                        <div className="text-sm text-gray-500">
                          Estimé le {formatDate(estimation.date)}
                        </div>
                        <div className="mt-1">
                          {getStatusBadge(estimation.status)}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-auto-blue-500 text-lg">
                        {formatPrice(estimation.estimatedPrice)}
                      </div>
                      
                      {/* Price change indicator */}
                      {priceChange && (
                        <div className={`flex justify-end items-center mt-1 ${
                          priceChange.isIncrease ? 'text-emerald-600' : 'text-red-600'
                        }`}>
                          {priceChange.isIncrease ? (
                            <TrendingUp className="h-4 w-4 mr-1" />
                          ) : (
                            <TrendingDown className="h-4 w-4 mr-1" />
                          )}
                          <span>{priceChange.percentChange}% ({formatPrice(priceChange.absoluteChange)})</span>
                        </div>
                      )}
                      
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2"
                        asChild
                      >
                        <Link to={`/dashboard/estimations/${estimation.id}`}>
                          <FileText className="h-4 w-4 mr-1" /> Détails
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-8">
              <div className="flex flex-col items-center justify-center text-gray-500">
                <Car className="h-12 w-12 mb-2 opacity-50" />
                <p>Aucune estimation trouvée</p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default HistoryTab;

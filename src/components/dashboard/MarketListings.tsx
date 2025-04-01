
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ExternalLink, TrendingUp, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MarketListing {
  id: string;
  title: string;
  price: number;
  priceChange: number;
  image: string;
  city: string;
  url: string;
}

interface MarketListingsProps {
  listings: MarketListing[];
}

const MarketListings: React.FC<MarketListingsProps> = ({ listings }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Dernières annonces analysées</CardTitle>
        <CardDescription>Basées sur vos précédentes recherches</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-0 divide-y">
          {listings.map((listing) => (
            <div key={listing.id} className="flex items-start p-4">
              <div 
                className="w-16 h-12 rounded bg-cover bg-center mr-4 flex-shrink-0" 
                style={{ backgroundImage: `url(${listing.image})` }}
              />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">{listing.title}</p>
                <p className="text-xs text-gray-500">{listing.city}</p>
                <div className="flex items-center mt-1">
                  <span className="font-bold">{formatPrice(listing.price)}</span>
                  <div className={`ml-2 flex items-center text-xs ${
                    listing.priceChange > 0 ? 'text-emerald-600' : 'text-red-600'
                  }`}>
                    {listing.priceChange > 0 ? (
                      <TrendingUp className="h-3 w-3 mr-1" />
                    ) : (
                      <TrendingDown className="h-3 w-3 mr-1" />
                    )}
                    <span>{Math.abs(listing.priceChange)}%</span>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="ml-2" asChild>
                <a href={listing.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketListings;

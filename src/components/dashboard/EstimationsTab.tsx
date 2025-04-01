import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import { Car, Download, FileText, Filter, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
interface EstimationItem {
  id: number;
  licensePlate: string;
  brand: string;
  model: string;
  year: number;
  estimatedPrice: number;
  date: Date;
  status: 'completed' | 'in_progress' | 'expired';
}
const EstimationsTab = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const {
    toast
  } = useToast();

  // Example data - in a real app this would come from an API
  const allEstimations: EstimationItem[] = [{
    id: 1,
    licensePlate: 'AB-123-CD',
    brand: 'Peugeot',
    model: '308',
    year: 2019,
    estimatedPrice: 15700,
    date: new Date('2023-11-15'),
    status: 'completed'
  }, {
    id: 2,
    licensePlate: 'EF-456-GH',
    brand: 'Renault',
    model: 'Clio',
    year: 2018,
    estimatedPrice: 9800,
    date: new Date('2023-10-20'),
    status: 'completed'
  }, {
    id: 3,
    licensePlate: 'IJ-789-KL',
    brand: 'Citroën',
    model: 'C3',
    year: 2020,
    estimatedPrice: 13200,
    date: new Date('2023-09-05'),
    status: 'expired'
  }, {
    id: 4,
    licensePlate: 'MN-012-OP',
    brand: 'Volkswagen',
    model: 'Golf',
    year: 2021,
    estimatedPrice: 19500,
    date: new Date('2023-11-28'),
    status: 'in_progress'
  }, {
    id: 5,
    licensePlate: 'QR-345-ST',
    brand: 'Toyota',
    model: 'Yaris',
    year: 2020,
    estimatedPrice: 12800,
    date: new Date('2023-10-15'),
    status: 'completed'
  }];

  // Filter estimations based on search query
  const filteredEstimations = allEstimations.filter(estimation => {
    const searchLower = searchQuery.toLowerCase();
    return estimation.licensePlate.toLowerCase().includes(searchLower) || estimation.brand.toLowerCase().includes(searchLower) || estimation.model.toLowerCase().includes(searchLower) || estimation.year.toString().includes(searchLower);
  });
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0
    }).format(price);
  };
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
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
  const handleDownloadReport = (id: number) => {
    // In a real app, this would generate and download a PDF
    toast({
      title: "Rapport téléchargé",
      description: `Le rapport pour l'estimation #${id} a été téléchargé.`
    });
  };
  return <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle>Mes estimations de véhicules</CardTitle>
              <CardDescription>Consultez et gérez vos estimations de prix</CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-2 text-indigo-600">
                <Filter className="h-4 w-4" /> Filtrer
              </Button>
              <Button size="sm" asChild>
                <Link to="/dashboard/new-estimation" className="flex items-center gap-2">
                  <Car className="h-4 w-4" /> Nouvelle estimation
                </Link>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Rechercher par plaque, marque, modèle..." className="pl-9" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Véhicule</TableHead>
                  <TableHead>Plaque</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead className="text-right">Prix estimé</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEstimations.length > 0 ? filteredEstimations.map(estimation => <TableRow key={estimation.id}>
                      <TableCell className="font-medium">
                        {estimation.brand} {estimation.model} ({estimation.year})
                      </TableCell>
                      <TableCell>{estimation.licensePlate}</TableCell>
                      <TableCell>{formatDate(estimation.date)}</TableCell>
                      <TableCell>{getStatusBadge(estimation.status)}</TableCell>
                      <TableCell className="text-right font-bold">
                        {formatPrice(estimation.estimatedPrice)}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="sm" onClick={() => handleDownloadReport(estimation.id)} className="text-indigo-600">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <Link to={`/dashboard/estimations/${estimation.id}`} className="indigo\\a">
                              <FileText className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>) : <TableRow>
                    <TableCell colSpan={6} className="text-center py-8">
                      <div className="flex flex-col items-center justify-center text-gray-500">
                        <Car className="h-12 w-12 mb-2 opacity-50" />
                        <p>Aucune estimation trouvée</p>
                      </div>
                    </TableCell>
                  </TableRow>}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>;
};
export default EstimationsTab;
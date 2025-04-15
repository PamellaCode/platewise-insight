
import React from 'react';
import { useParams } from 'react-router-dom';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import VehicleEstimationResult from '@/components/VehicleEstimationResult';

const EstimationDetail = () => {
  const { id } = useParams<{id: string}>();
  
  // In a real app, we would fetch the estimation details based on the ID
  // For now, we'll just use the existing component with mock data
  
  return (
    <DashboardLayout>
      <div className="space-y-6 bg-gradient-to-br from-argus-blue-900/20 to-argus-violet-900/20 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-argus-blue-400 via-argus-violet-400 to-argus-red-400 bg-clip-text text-transparent">Détails de l'estimation #{id}</h1>
        <VehicleEstimationResult 
          licensePlate="AB-123-CD" 
          subscription="silver" 
        />
      </div>
    </DashboardLayout>
  );
};

export default EstimationDetail;

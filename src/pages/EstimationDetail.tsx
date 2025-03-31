
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
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Détails de l'estimation #{id}</h1>
        <VehicleEstimationResult 
          licensePlate="AB-123-CD" 
          subscription="silver" 
        />
      </div>
    </DashboardLayout>
  );
};

export default EstimationDetail;

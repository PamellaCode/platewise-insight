
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Car, Home } from "lucide-react";
import MainLayout from "@/components/layouts/MainLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout>
      <div className="min-h-[70vh] flex items-center justify-center bg-white">
        <div className="text-center px-4">
          <Car className="h-20 w-20 mx-auto text-auto-blue-300 mb-6" />
          <h1 className="text-6xl font-bold text-auto-blue-500 mb-4">404</h1>
          <p className="text-2xl text-gray-700 mb-6">Cette page n'existe pas</p>
          <p className="text-gray-500 max-w-md mx-auto mb-8">
            La page que vous recherchez a peut-être été déplacée, supprimée ou n'a jamais existé.
          </p>
          <Button size="lg" className="bg-auto-blue-500 hover:bg-auto-blue-600" asChild>
            <Link to="/">
              <Home className="mr-2 h-5 w-5" /> Retourner à l'accueil
            </Link>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;

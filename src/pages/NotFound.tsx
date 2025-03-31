
import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Car, Home, ArrowLeft } from "lucide-react";
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
      <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-blue-50 to-cyan-100">
        <div className="text-center px-4 py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <Car className="h-24 w-24 mx-auto text-blue-400 mb-6" />
              <div className="bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-500 text-transparent bg-clip-text">
                <h1 className="text-8xl font-bold mb-4">404</h1>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Cette page n'existe pas</h2>
            <p className="text-gray-600 max-w-md mx-auto mb-8">
              La page que vous recherchez a peut-être été déplacée, supprimée ou n'a jamais existé.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link to="/">
                  <Home className="mr-2 h-5 w-5" /> Retourner à l'accueil
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600" asChild>
                <Link to="javascript:history.back()">
                  <ArrowLeft className="mr-2 h-5 w-5" /> Page précédente
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;

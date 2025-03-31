
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navigation = [
    {
      name: 'Accueil',
      path: '/'
    }, 
    {
      name: 'Abonnements',
      path: '/pricing'
    }, 
    {
      name: 'Comment ça marche',
      path: '/how-it-works'
    }
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <div className="relative w-40 h-10">
                {/* Fond technologique */}
                <div className="absolute inset-0 bg-gradient-to-r from-argus-blue-500 to-argus-blue-700 rounded-md overflow-hidden flex items-center justify-center">
                  <div className="w-full h-3 absolute bottom-0 flex items-center justify-center bg-[#0a3045] overflow-hidden">
                    {/* Circuit board pattern */}
                    <svg width="100%" height="100%" className="opacity-40">
                      <pattern id="circuit" width="20" height="3" patternUnits="userSpaceOnUse">
                        <path d="M0,1.5 H20 M5,0 V3 M10,0 V3 M15,0 V3" stroke="white" strokeWidth="0.5" fill="none"/>
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#circuit)" />
                    </svg>
                    {/* Logo text */}
                    <div className="z-10 px-2 bg-white text-center rounded-sm">
                      <span className="text-sm font-bold tracking-wider text-gray-900">ARGUS AI</span>
                    </div>
                  </div>
                  
                  {/* Car silhouette */}
                  <div className="absolute top-0 left-0 w-full h-7 flex items-center justify-center">
                    <svg viewBox="0 0 100 40" width="90" height="25" className="fill-white">
                      <path d="M95,20 C95,12 90,10 85,10 L70,10 C65,10 60,15 55,15 L35,15 C30,15 25,10 20,10 L15,10 C10,10 5,12 5,20 L5,25 C5,28 8,30 10,30 L90,30 C92,30 95,28 95,25 L95,20 Z M25,25 C22,25 20,23 20,20 C20,17 22,15 25,15 C28,15 30,17 30,20 C30,23 28,25 25,25 Z M75,25 C72,25 70,23 70,20 C70,17 72,15 75,15 C78,15 80,17 80,20 C80,23 78,25 75,25 Z" />
                      {/* Wheels with "A" logo */}
                      <circle cx="25" cy="20" r="7" fill="#0a3045" stroke="white" strokeWidth="1" />
                      <text x="22" y="23" fontSize="7" fill="white">A</text>
                      <circle cx="75" cy="20" r="7" fill="#0a3045" stroke="white" strokeWidth="1" />
                      <text x="72" y="23" fontSize="7" fill="white">A</text>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            {navigation.map(item => (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path) 
                    ? 'bg-argus-blue-50 text-argus-blue-500' 
                    : 'text-gray-600 hover:text-argus-blue-500 hover:bg-argus-blue-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button 
              variant={location.pathname === '/login' ? 'secondary' : 'default'} 
              asChild
              className="text-white"
            >
              <Link to="/login">Connexion</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link to="/register">S'inscrire</Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-argus-blue-500"
            >
              <span className="sr-only">Ouvrir le menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="pt-2 pb-3 space-y-1 px-4">
            {navigation.map(item => (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path) 
                    ? 'bg-argus-blue-50 text-argus-blue-500' 
                    : 'text-gray-600 hover:text-argus-blue-500 hover:bg-argus-blue-50'
                }`} 
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-3 border-t border-gray-200">
              <Link 
                to="/login" 
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === '/login' 
                    ? 'bg-argus-blue-50 text-argus-blue-500' 
                    : 'text-gray-600 hover:text-argus-blue-500 hover:bg-argus-blue-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Connexion
              </Link>
              <div className="mt-1">
                <Button 
                  variant="secondary"
                  className="w-full" 
                  asChild
                >
                  <Link 
                    to="/register" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    S'inscrire
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

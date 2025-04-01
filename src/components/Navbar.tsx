
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
    },
    {
      name: 'Actualités & Tendances',
      path: '/news-and-trends'
    }
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/8f9a39ff-7c91-49b9-b893-f85887ce27fb.png" 
                alt="ArgusAI Logo" 
                className="h-10"
              />
              <span className="text-xl font-bold text-argus-blue-500">ArgusAI</span>
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

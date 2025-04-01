
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BarChart2, 
  CreditCard, 
  FileText, 
  Home,
  Menu,
  MessageCircle,
  Settings, 
  User, 
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  
  const navigation = [
    { name: 'Tableau de bord', path: '/dashboard', icon: Home },
    { name: 'Mes estimations', path: '/dashboard/estimations', icon: FileText },
    { name: 'Assistant IA', path: '/dashboard/assistant-ai', icon: MessageCircle },
    { name: 'Statistiques', path: '/dashboard/stats', icon: BarChart2 },
    { name: 'Abonnement', path: '/dashboard/subscription', icon: CreditCard },
    { name: 'Profil', path: '/dashboard/profile', icon: User },
    { name: 'Paramètres', path: '/dashboard/settings', icon: Settings },
  ];
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50">
      {/* Sidebar for mobile */}
      <div className={`md:hidden fixed inset-0 flex z-40 transition-opacity ease-linear duration-300 ${
        isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true" onClick={() => setIsSidebarOpen(false)} />
        
        <div className={`relative flex-1 flex flex-col max-w-xs w-full bg-argus-blue-500 transform transition ease-in-out duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setIsSidebarOpen(false)}
            >
              <span className="sr-only">Fermer le menu</span>
              <X className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          
          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <Link to="/dashboard" className="flex items-center space-x-2">
                <img 
                  src="/lovable-uploads/8f9a39ff-7c91-49b9-b893-f85887ce27fb.png" 
                  alt="ArgusAI Logo" 
                  className="h-10" 
                />
                <span className="text-xl font-bold text-white">ArgusAI</span>
              </Link>
            </div>
            <nav className="mt-5 px-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                    isActive(item.path)
                      ? 'bg-argus-blue-700 text-white'
                      : 'text-gray-100 hover:bg-argus-blue-600'
                  }`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <item.icon
                    className={`mr-4 h-6 w-6 ${
                      isActive(item.path) ? 'text-white' : 'text-gray-300 group-hover:text-white'
                    }`}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-argus-blue-700 p-4">
            <div className="flex items-center">
              <div>
                <div className="h-8 w-8 rounded-full bg-argus-teal-300 flex items-center justify-center text-argus-blue-700 font-bold">
                  U
                </div>
              </div>
              <div className="ml-3">
                <p className="text-base font-medium text-white">Utilisateur</p>
                <Button variant="link" className="p-0 h-auto text-xs text-gray-300 hover:text-white">
                  Déconnexion
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex-1 flex flex-col min-h-0 bg-argus-blue-500">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <Link to="/dashboard" className="flex items-center space-x-2">
                  <img 
                    src="/lovable-uploads/8f9a39ff-7c91-49b9-b893-f85887ce27fb.png" 
                    alt="ArgusAI Logo" 
                    className="h-10" 
                  />
                  <span className="text-xl font-bold text-white">ArgusAI</span>
                </Link>
              </div>
              <nav className="mt-5 flex-1 px-2 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive(item.path)
                        ? 'bg-argus-blue-700 text-white'
                        : 'text-gray-100 hover:bg-argus-blue-600'
                    }`}
                  >
                    <item.icon
                      className={`mr-3 h-5 w-5 ${
                        isActive(item.path) ? 'text-white' : 'text-gray-300 group-hover:text-white'
                      }`}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-argus-blue-700 p-4">
              <div className="flex items-center">
                <div>
                  <div className="h-8 w-8 rounded-full bg-argus-teal-300 flex items-center justify-center text-argus-blue-700 font-bold">
                    U
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">Utilisateur</p>
                  <Button variant="link" className="p-0 h-auto text-xs text-gray-300 hover:text-white">
                    Déconnexion
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 flex items-center">
          <button
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-argus-blue-500"
            onClick={() => setIsSidebarOpen(true)}
          >
            <span className="sr-only">Ouvrir le menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
      <Toaster />
    </div>
  );
};

export default DashboardLayout;

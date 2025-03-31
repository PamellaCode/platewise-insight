
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BarChart2, 
  CreditCard, 
  FileText, 
  Home,
  Menu,
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
    { name: 'Historique', path: '/dashboard/history', icon: FileText },
    { name: 'Abonnement', path: '/dashboard/subscription', icon: CreditCard },
    { name: 'Statistiques', path: '/dashboard/stats', icon: BarChart2 },
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
              <Link to="/dashboard" className="flex items-center">
                <div className="relative w-40 h-10">
                  {/* Fond technologique */}
                  <div className="absolute inset-0 bg-gradient-to-r from-argus-blue-500 to-argus-blue-700 rounded-md overflow-hidden flex items-center justify-center">
                    <div className="w-full h-3 absolute bottom-0 flex items-center justify-center bg-[#0a3045] overflow-hidden">
                      {/* Circuit board pattern */}
                      <svg width="100%" height="100%" className="opacity-40">
                        <pattern id="circuit-mobile" width="20" height="3" patternUnits="userSpaceOnUse">
                          <path d="M0,1.5 H20 M5,0 V3 M10,0 V3 M15,0 V3" stroke="white" strokeWidth="0.5" fill="none"/>
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#circuit-mobile)" />
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
                <Link to="/dashboard" className="flex items-center">
                  <div className="relative w-40 h-10">
                    {/* Fond technologique */}
                    <div className="absolute inset-0 bg-gradient-to-r from-argus-blue-500 to-argus-blue-700 rounded-md overflow-hidden flex items-center justify-center">
                      <div className="w-full h-3 absolute bottom-0 flex items-center justify-center bg-[#0a3045] overflow-hidden">
                        {/* Circuit board pattern */}
                        <svg width="100%" height="100%" className="opacity-40">
                          <pattern id="circuit-desktop" width="20" height="3" patternUnits="userSpaceOnUse">
                            <path d="M0,1.5 H20 M5,0 V3 M10,0 V3 M15,0 V3" stroke="white" strokeWidth="0.5" fill="none"/>
                          </pattern>
                          <rect width="100%" height="100%" fill="url(#circuit-desktop)" />
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

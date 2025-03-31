
import React from 'react';
import { Link } from 'react-router-dom';
import { Car } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-auto-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Car className="h-6 w-6" />
              <span className="text-xl font-bold">AutoCote</span>
            </div>
            <p className="text-sm text-gray-300">
              Estimez instantanément la valeur de votre véhicule grâce à notre technologie d'intelligence artificielle.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.7 3H4.3C3.582 3 3 3.582 3 4.3v15.4c0 .718.582 1.3 1.3 1.3h15.4c.718 0 1.3-.582 1.3-1.3V4.3c0-.718-.582-1.3-1.3-1.3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm11.335 9.764H15.67v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.249h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/pricing" className="text-gray-300 hover:text-white text-sm">Abonnements</Link></li>
              <li><Link to="/how-it-works" className="text-gray-300 hover:text-white text-sm">Comment ça marche</Link></li>
              <li><Link to="/demo" className="text-gray-300 hover:text-white text-sm">Démo</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white text-sm">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Société</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white text-sm">À propos</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white text-sm">Blog</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white text-sm">Carrières</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white text-sm">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Légal</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/privacy" className="text-gray-300 hover:text-white text-sm">Confidentialité</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white text-sm">Conditions d'utilisation</Link></li>
              <li><Link to="/cookies" className="text-gray-300 hover:text-white text-sm">Politique des cookies</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-sm text-gray-300">&copy; {currentYear} AutoCote. Tous droits réservés.</p>
          <p className="text-sm text-gray-300 mt-2 md:mt-0">
            Conçu et développé en France avec ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

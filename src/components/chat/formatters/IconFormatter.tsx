
import React from 'react';
import { 
  Check, AlertCircle, Info, Star, ThumbsUp, PiggyBank, 
  Heart, Trophy, Sparkles, HelpCircle, Package
} from 'lucide-react';

/**
 * Détermine l'icône à afficher en fonction du contenu du message
 */
export const getMessageIcon = (text: string) => {
  if (!text) return <Info className="h-5 w-5" />;
  
  const textLower = text.toLowerCase();
  
  // Catégorie: Véhicule
  if (textLower.includes('véhicule') || textLower.includes('voiture') || textLower.includes('auto')) {
    return <img src="/car-icon.svg" alt="Voiture" className="h-5 w-5" />;
  }
  
  // Catégorie: Prix
  if (textLower.includes('prix') || textLower.includes('estimation') || 
      textLower.includes('valeur') || textLower.includes('€') || 
      textLower.includes('euro')) {
    return <PiggyBank className="h-5 w-5" />;
  }
  
  // Catégorie: Salutations
  if (textLower.includes('bienvenue') || textLower.includes('bonjour') || 
      textLower.includes('salut') || textLower.includes('merci')) {
    return <ThumbsUp className="h-5 w-5" />;
  }
  
  // Catégorie: Questions
  if (textLower.includes('question') || textLower.includes('demande') || 
      textLower.includes('comment')) {
    return <HelpCircle className="h-5 w-5" />;
  }
  
  // Catégorie: Nouveautés
  if (textLower.includes('nouveau') || textLower.includes('innovation')) {
    return <Sparkles className="h-5 w-5" />;
  }
  
  // Catégorie: Évaluations
  if (textLower.includes('avis') || textLower.includes('évaluation') || 
      textLower.includes('note')) {
    return <Star className="h-5 w-5" />;
  }
  
  // Catégorie: Préférences
  if (textLower.includes('aime') || textLower.includes('préfère')) {
    return <Heart className="h-5 w-5" />;
  }
  
  // Catégorie: Offres
  if (textLower.includes('offre') || textLower.includes('promotion') || 
      textLower.includes('réduction')) {
    return <Package className="h-5 w-5" />;
  }
  
  // Catégorie: Excellence
  if (textLower.includes('meilleur') || textLower.includes('gagné') || 
      textLower.includes('vainqueur')) {
    return <Trophy className="h-5 w-5" />;
  }
  
  // Catégorie: Alertes
  if (textLower.includes('attention') || textLower.includes('alerte') || 
      textLower.includes('important')) {
    return <AlertCircle className="h-5 w-5" />;
  }
  
  // Catégorie: Confirmation
  if (textLower.includes('bien') || textLower.includes('excellent') || 
      textLower.includes('super')) {
    return <Check className="h-5 w-5" />;
  }
  
  // Par défaut
  return <Info className="h-5 w-5" />;
};

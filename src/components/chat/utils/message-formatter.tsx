
import React from 'react';
import { 
  Check, AlertCircle, Info, Star, ThumbsUp, PiggyBank, 
  Heart, Trophy, Sparkles, HelpCircle, Package
} from 'lucide-react';

// Fonction pour mettre en forme le texte du message avec une mise en page structurée
export const formatMessageText = (text: string) => {
  if (!text) return null;
  
  // Remplacer les liens avec des ancres cliquables
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  let formattedText = text.replace(urlRegex, (url) => {
    // Détermine un texte descriptif pour le lien
    let linkText = "Plus d'informations";
    
    if (url.includes("voiture") || url.includes("auto")) linkText = "📊 Voir les détails du véhicule";
    else if (url.includes("prix") || url.includes("estimation")) linkText = "💰 Voir l'estimation";
    else if (url.includes("contact")) linkText = "📞 Contact";
    else if (url.includes("image") || url.includes("photo")) linkText = "🖼️ Voir l'image";
    else if (url.includes("compare")) linkText = "⚖️ Comparer";
    else if (url.includes("historique")) linkText = "📜 Voir l'historique";
    
    return `<a href="${url}" target="_blank" class="text-argus-blue-500 hover:text-argus-blue-700 underline font-medium inline-flex items-center gap-1">${linkText}</a>`;
  });
  
  // Traitement des titres (texte entre ** ou en début de ligne suivi de :)
  const titleRegex = /\*\*(.*?)\*\*|^([^:]+):/gm;
  formattedText = formattedText.replace(titleRegex, (match, p1, p2) => {
    const title = p1 || p2;
    return `<div class="font-bold text-base mt-3 mb-2 text-argus-blue-700 flex items-center gap-1">
      <span class="text-argus-blue-500">✦</span> ${title}
    </div>`;
  });
  
  // Traitement des listes (lignes commençant par - ou •)
  const listItemRegex = /^[•\-]\s(.*?)$/gm;
  formattedText = formattedText.replace(listItemRegex, 
    '<div class="flex items-start mt-1.5 mb-1.5">' +
    '<span class="text-argus-teal-500 mr-2 mt-0.5">•</span>' +
    '<span>$1</span>' +
    '</div>'
  );

  // Mise en évidence des valeurs importantes (texte entre ` `)
  const highlightRegex = /`(.*?)`/g;
  formattedText = formattedText.replace(highlightRegex, '<span class="font-medium text-argus-teal-600 bg-argus-teal-50 px-1.5 py-0.5 rounded">$1</span>');

  // Formatage des emojis (texte entre : :)
  // Extension avec plus d'emojis
  const emojiRegex = /:([\w+-]+):/g;
  formattedText = formattedText.replace(emojiRegex, (match, emoji) => {
    const emojiMap: {[key: string]: string} = {
      // Emojis généraux
      'check': '✅', 
      'warning': '⚠️',
      'info': 'ℹ️',
      'star': '⭐',
      'sparkles': '✨',
      'thumbsup': '👍',
      'ok': '✓',
      
      // Transports & véhicules
      'car': '🚗',
      'truck': '🚚',
      'moto': '🏍️',
      'bicycle': '🚲',
      'train': '🚆',
      'taxi': '🚕',
      'bus': '🚌',

      // Finances
      'money': '💰',
      'euro': '€',
      'dollar': '💵',
      'bank': '🏦',
      'chart': '📈',
      'chart-down': '📉',
      'coins': '🪙',
      
      // Temps & dates
      'calendar': '📅',
      'time': '⏰',
      'clock': '🕓',
      'hourglass': '⌛',
      
      // Mesures & caractéristiques
      'gauge': '🏁',
      'speed': '⚡',
      'ruler': '📏',
      'weight': '⚖️',
      'power': '💪',
      'fuel': '⛽',
      
      // Notifications & alertes
      'note': '📝',
      'tip': '💡',
      'important': '❗',
      'new': '🆕',
      'fire': '🔥',
      'bell': '🔔',
      
      // Sentiments & expressions
      'smile': '😊',
      'sad': '😔',
      'love': '❤️',
      'eyes': '👀',
      'clap': '👏',
      'think': '🤔',
      
      // Objets & outils
      'key': '🔑',
      'lock': '🔒',
      'tools': '🔧',
      'search': '🔍',
      'phone': '📱',
      'mail': '📧',
      'doc': '📄',
      'folder': '📁',
      
      // Environnement
      'tree': '🌳',
      'sun': '☀️',
      'cloud': '☁️',
      'rain': '🌧️',
      'snow': '❄️',
      'earth': '🌍'
    };
    
    return emojiMap[emoji] || match;
  });

  // Ajout d'espacement entre les paragraphes
  formattedText = formattedText.replace(/\n\n/g, '<div class="my-2"></div>');

  return <div className="message-content leading-relaxed" dangerouslySetInnerHTML={{ __html: formattedText }} />;
};

// Fonction pour déterminer l'icône du message selon son contenu
export const getMessageIcon = (text: string) => {
  if (!text) return <Info className="h-5 w-5" />;
  
  const textLower = text.toLowerCase();
  
  if (textLower.includes('véhicule') || textLower.includes('voiture') || textLower.includes('auto')) {
    return <img src="/car-icon.svg" alt="Voiture" className="h-5 w-5" />
  } else if (textLower.includes('prix') || textLower.includes('estimation') || textLower.includes('valeur') || textLower.includes('€') || textLower.includes('euro')) {
    return <PiggyBank className="h-5 w-5" />
  } else if (textLower.includes('bienvenue') || textLower.includes('bonjour') || textLower.includes('salut') || textLower.includes('merci')) {
    return <ThumbsUp className="h-5 w-5" />
  } else if (textLower.includes('question') || textLower.includes('demande') || textLower.includes('comment')) {
    return <HelpCircle className="h-5 w-5" />
  } else if (textLower.includes('nouveau') || textLower.includes('innovation')) {
    return <Sparkles className="h-5 w-5" />
  } else if (textLower.includes('avis') || textLower.includes('évaluation') || textLower.includes('note')) {
    return <Star className="h-5 w-5" />
  } else if (textLower.includes('aime') || textLower.includes('préfère')) {
    return <Heart className="h-5 w-5" />
  } else if (textLower.includes('offre') || textLower.includes('promotion') || textLower.includes('réduction')) {
    return <Package className="h-5 w-5" />
  } else if (textLower.includes('meilleur') || textLower.includes('gagné') || textLower.includes('vainqueur')) {
    return <Trophy className="h-5 w-5" />
  } else if (textLower.includes('attention') || textLower.includes('alerte') || textLower.includes('important')) {
    return <AlertCircle className="h-5 w-5" />
  } else if (textLower.includes('bien') || textLower.includes('excellent') || textLower.includes('super')) {
    return <Check className="h-5 w-5" />
  } else {
    return <Info className="h-5 w-5" />
  }
};

export const formatTime = (date: Date) => {
  return date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
};

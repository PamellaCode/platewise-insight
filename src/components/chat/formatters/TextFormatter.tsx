
import React from 'react';

/**
 * Enrichit le texte du message avec une mise en page structurée et des éléments interactifs
 */
export const formatMessageText = (text: string) => {
  if (!text) return null;
  
  // Traitement des liens
  let formattedText = replaceLinks(text);
  
  // Traitement des titres
  formattedText = formatTitles(formattedText);
  
  // Traitement des listes
  formattedText = formatListItems(formattedText);
  
  // Traitement des blockquotes
  formattedText = formatBlockquotes(formattedText);
  
  // Traitement des boîtes d'information
  formattedText = formatInfoBoxes(formattedText);
  
  // Mise en évidence des valeurs importantes
  formattedText = highlightValues(formattedText);
  
  // Formatage des emojis
  formattedText = replaceEmojis(formattedText);
  
  // Ajout d'espacement entre les paragraphes
  formattedText = formattedText.replace(/\n\n/g, '<div class="my-3"></div>');
  
  // Conversion des sauts de ligne simples en balises <br>
  formattedText = formattedText.replace(/\n/g, '<br>');

  return <div className="message-content leading-relaxed text-normal" dangerouslySetInnerHTML={{ __html: formattedText }} />;
};

/**
 * Remplace les URLs par des liens cliquables avec texte descriptif et icônes
 */
const replaceLinks = (text: string): string => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, (url) => {
    let linkText = "Plus d'informations";
    let icon = "🔗";
    
    if (url.includes("voiture") || url.includes("auto")) {
      linkText = "Voir les détails du véhicule";
      icon = "🚗";
    }
    else if (url.includes("prix") || url.includes("estimation")) {
      linkText = "Voir l'estimation";
      icon = "💰";
    }
    else if (url.includes("contact")) {
      linkText = "Contact";
      icon = "📞";
    }
    else if (url.includes("image") || url.includes("photo")) {
      linkText = "Voir l'image";
      icon = "🖼️";
    }
    else if (url.includes("compare")) {
      linkText = "Comparer";
      icon = "⚖️";
    }
    else if (url.includes("historique")) {
      linkText = "Voir l'historique";
      icon = "📜";
    }
    
    return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1 my-1 rounded-full bg-argus-blue-50 text-argus-blue-600 hover:bg-argus-blue-100 transition-colors duration-200 no-underline font-medium text-sm">
      <span>${icon}</span>${linkText}
    </a>`;
  });
};

/**
 * Formate les titres (texte entre ** ou en début de ligne suivi de :)
 */
const formatTitles = (text: string): string => {
  const titleRegex = /\*\*(.*?)\*\*|^([^:]+):/gm;
  return text.replace(titleRegex, (match, p1, p2) => {
    const title = p1 || p2;
    return `<div class="font-semibold text-base mt-4 mb-2 text-argus-teal-700 flex items-center gap-2 border-b border-argus-teal-100 pb-1">
      <span class="text-argus-teal-500 inline-flex items-center justify-center h-5 w-5 rounded-full bg-argus-teal-50">✦</span>
      ${title}
    </div>`;
  });
};

/**
 * Formate les éléments de liste (lignes commençant par - ou •)
 */
const formatListItems = (text: string): string => {
  const listItemRegex = /^[•\-]\s(.*?)$/gm;
  return text.replace(listItemRegex, 
    '<div class="flex items-start py-1 my-0.5">' +
    '<span class="inline-flex items-center justify-center h-5 w-5 rounded-full bg-argus-teal-50 text-argus-teal-500 mr-2 flex-shrink-0">•</span>' +
    '<span class="text-gray-700">$1</span>' +
    '</div>'
  );
};

/**
 * Met en évidence les valeurs importantes (texte entre ` `)
 */
const highlightValues = (text: string): string => {
  const highlightRegex = /`(.*?)`/g;
  return text.replace(highlightRegex, '<span class="font-medium text-argus-teal-600 bg-argus-teal-50 px-2 py-0.5 rounded-md mx-0.5">$1</span>');
};

/**
 * Formate les citations en bloc (lignes commençant par >)
 */
const formatBlockquotes = (text: string): string => {
  const blockquoteRegex = /^>\s(.*?)$/gm;
  return text.replace(blockquoteRegex,
    '<blockquote class="pl-4 border-l-4 border-argus-blue-200 bg-argus-blue-50/50 py-3 px-4 rounded-r my-4 text-gray-700 italic">$1</blockquote>'
  );
};

/**
 * Formate les boîtes d'information spéciales (avec préfixes spécifiques)
 */
const formatInfoBoxes = (text: string): string => {
  // Boîte d'information
  text = text.replace(/!INFO:(.*?)(?:\n|$)/g, 
    '<div class="info-box flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-lg p-3 my-4">' +
    '<span class="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex-shrink-0">ℹ️</span>' +
    '<div class="text-blue-800">$1</div>' +
    '</div>'
  );
  
  // Boîte d'avertissement
  text = text.replace(/!ATTENTION:(.*?)(?:\n|$)/g, 
    '<div class="warning-box flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-lg p-3 my-4">' +
    '<span class="inline-flex items-center justify-center h-6 w-6 rounded-full bg-amber-100 text-amber-600 flex-shrink-0">⚠️</span>' +
    '<div class="text-amber-800">$1</div>' +
    '</div>'
  );
  
  // Boîte de conseil
  text = text.replace(/!CONSEIL:(.*?)(?:\n|$)/g, 
    '<div class="tip-box flex items-start gap-3 bg-teal-50 border border-teal-100 rounded-lg p-3 my-4">' +
    '<span class="inline-flex items-center justify-center h-6 w-6 rounded-full bg-teal-100 text-teal-600 flex-shrink-0">💡</span>' +
    '<div class="text-teal-800">$1</div>' +
    '</div>'
  );

  // Boîte de succès
  text = text.replace(/!SUCCÈS:(.*?)(?:\n|$)/g, 
    '<div class="success-box flex items-start gap-3 bg-green-50 border border-green-100 rounded-lg p-3 my-4">' +
    '<span class="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-600 flex-shrink-0">✅</span>' +
    '<div class="text-green-800">$1</div>' +
    '</div>'
  );

  return text;
};

/**
 * Remplace les codes d'emoji (texte entre : :) par leurs représentations visuelles
 */
const replaceEmojis = (text: string): string => {
  const emojiRegex = /:([\w+-]+):/g;
  return text.replace(emojiRegex, (match, emoji) => {
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
      'laugh': '😄',
      'cry': '😢',
      'wink': '😉',
      'cool': '😎',
      'wow': '😮',
      'confused': '😕',
      'angry': '😠',
      
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
      'earth': '🌍',
      
      // Compléments d'émojis
      'rocket': '🚀',
      // 'idea' est le même que 'tip' donc supprimé
      'heart': '❤️',
      'gift': '🎁',
      'trophy': '🏆',
      'medal': '🏅',
      'crown': '👑',
      'diamond': '💎',
      'megaphone': '📢',
      // 'lightbulb' est le même que 'tip' donc supprimé
      'book': '📚',
      'bookmark': '🔖',
      'glasses': '👓',
      'hammer': '🔨',
      'wrench': '🔧',
      'gear': '⚙️',
      'flag': '🚩',
      'pin': '📌',
      'link': '🔗',
      // 'clock' est déjà défini plus haut
      'timer': '⏲️',
      'camera': '📷',
      'video': '📹',
      'music': '🎵',
      'headphones': '🎧'
    };
    
    return emojiMap[emoji] || match;
  });
};

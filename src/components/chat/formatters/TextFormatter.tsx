
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
  formattedText = formattedText.replace(/\n\n/g, '<div class="my-2"></div>');

  return <div className="message-content leading-relaxed" dangerouslySetInnerHTML={{ __html: formattedText }} />;
};

/**
 * Remplace les URLs par des liens cliquables avec texte descriptif
 */
const replaceLinks = (text: string): string => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, (url) => {
    let linkText = "Plus d'informations";
    
    if (url.includes("voiture") || url.includes("auto")) linkText = "📊 Voir les détails du véhicule";
    else if (url.includes("prix") || url.includes("estimation")) linkText = "💰 Voir l'estimation";
    else if (url.includes("contact")) linkText = "📞 Contact";
    else if (url.includes("image") || url.includes("photo")) linkText = "🖼️ Voir l'image";
    else if (url.includes("compare")) linkText = "⚖️ Comparer";
    else if (url.includes("historique")) linkText = "📜 Voir l'historique";
    
    return `<a href="${url}" target="_blank" class="text-argus-blue-500 hover:text-argus-blue-700 underline font-medium inline-flex items-center gap-1">${linkText}</a>`;
  });
};

/**
 * Formate les titres (texte entre ** ou en début de ligne suivi de :)
 */
const formatTitles = (text: string): string => {
  const titleRegex = /\*\*(.*?)\*\*|^([^:]+):/gm;
  return text.replace(titleRegex, (match, p1, p2) => {
    const title = p1 || p2;
    return `<div class="font-bold text-base mt-3 mb-2 text-argus-blue-700 flex items-center gap-1">
      <span class="text-argus-blue-500">✦</span> ${title}
    </div>`;
  });
};

/**
 * Formate les éléments de liste (lignes commençant par - ou •)
 */
const formatListItems = (text: string): string => {
  const listItemRegex = /^[•\-]\s(.*?)$/gm;
  return text.replace(listItemRegex, 
    '<div class="flex items-start mt-1.5 mb-1.5">' +
    '<span class="text-argus-teal-500 mr-2 mt-0.5">•</span>' +
    '<span>$1</span>' +
    '</div>'
  );
};

/**
 * Met en évidence les valeurs importantes (texte entre ` `)
 */
const highlightValues = (text: string): string => {
  const highlightRegex = /`(.*?)`/g;
  return text.replace(highlightRegex, '<span class="font-medium text-argus-teal-600 bg-argus-teal-50 px-1.5 py-0.5 rounded">$1</span>');
};

/**
 * Formate les citations en bloc (lignes commençant par >)
 */
const formatBlockquotes = (text: string): string => {
  const blockquoteRegex = /^>\s(.*?)$/gm;
  return text.replace(blockquoteRegex,
    '<blockquote class="pl-4 border-l-4 border-argus-teal-200 bg-argus-teal-50/50 py-2 px-3 rounded-r my-3 text-gray-700 italic">$1</blockquote>'
  );
};

/**
 * Formate les boîtes d'information spéciales (avec préfixes spécifiques)
 */
const formatInfoBoxes = (text: string): string => {
  // Boîte d'information
  text = text.replace(/!INFO:(.*?)(?:\n|$)/g, 
    '<div class="info-box flex items-start gap-2 bg-blue-50 border-l-4 border-blue-300 p-3 rounded-r my-3">' +
    '<span class="text-blue-500">ℹ️</span>' +
    '<div>$1</div>' +
    '</div>'
  );
  
  // Boîte d'avertissement
  text = text.replace(/!ATTENTION:(.*?)(?:\n|$)/g, 
    '<div class="warning-box flex items-start gap-2 bg-amber-50 border-l-4 border-amber-300 p-3 rounded-r my-3">' +
    '<span class="text-amber-500">⚠️</span>' +
    '<div>$1</div>' +
    '</div>'
  );
  
  // Boîte de conseil
  text = text.replace(/!CONSEIL:(.*?)(?:\n|$)/g, 
    '<div class="tip-box flex items-start gap-2 bg-teal-50 border-l-4 border-teal-300 p-3 rounded-r my-3">' +
    '<span class="text-teal-500">💡</span>' +
    '<div>$1</div>' +
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
      // 'idea' est le même que 'tip' donc nous le supprimons
      'heart': '❤️',
      'gift': '🎁',
      'trophy': '🏆',
      'medal': '🏅',
      'crown': '👑',
      'diamond': '💎',
      'megaphone': '📢',
      // 'lightbulb' est le même que 'tip' donc nous le supprimons
      'book': '📚',
      'bookmark': '🔖',
      'glasses': '👓',
      'hammer': '🔨',
      'wrench': '🔧',
      'gear': '⚙️',
      'flag': '🚩',
      'pin': '📌',
      'link': '🔗',
      // 'clock' est déjà défini plus haut, donc nous le supprimons ici
      'timer': '⏲️',  // Alternative pour éviter la duplication
      'camera': '📷',
      'video': '📹',
      'music': '🎵',
      'headphones': '🎧'
    };
    
    return emojiMap[emoji] || match;
  });
};


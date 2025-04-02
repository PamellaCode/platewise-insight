
import React from 'react';

/**
 * Remplace les URLs par des liens cliquables avec texte descriptif et icônes
 */
export const replaceLinks = (text: string): string => {
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

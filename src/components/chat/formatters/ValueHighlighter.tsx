
import React from 'react';

/**
 * Met en évidence les valeurs importantes (texte entre ` `)
 */
export const highlightValues = (text: string): string => {
  const highlightRegex = /`(.*?)`/g;
  return text.replace(highlightRegex, '<span class="font-medium text-argus-teal-600 bg-argus-teal-50 px-2 py-0.5 rounded-md mx-0.5">$1</span>');
};

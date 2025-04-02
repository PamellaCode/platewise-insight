
import React from 'react';

/**
 * Met en évidence les valeurs importantes (texte entre ` `)
 */
export const highlightValues = (text: string): string => {
  const highlightRegex = /`(.*?)`/g;
  return text.replace(highlightRegex, '<span class="font-medium text-argus-blue-600 bg-argus-blue-50 px-3 py-1 rounded-md mx-1 my-0.5 inline-block shadow-sm border border-argus-blue-100">$1</span>');
};

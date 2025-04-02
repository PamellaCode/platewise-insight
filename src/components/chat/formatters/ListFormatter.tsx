
import React from 'react';

/**
 * Formate les éléments de liste (lignes commençant par - ou •)
 */
export const formatListItems = (text: string): string => {
  const listItemRegex = /^[•\-]\s(.*?)$/gm;
  return text.replace(listItemRegex, 
    '<div class="flex items-start py-1 my-0.5">' +
    '<span class="inline-flex items-center justify-center h-5 w-5 rounded-full bg-argus-teal-50 text-argus-teal-500 mr-2 flex-shrink-0">•</span>' +
    '<span class="text-gray-700">$1</span>' +
    '</div>'
  );
};

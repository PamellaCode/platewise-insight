
import React from 'react';

/**
 * Formate les éléments de liste (lignes commençant par - ou •)
 */
export const formatListItems = (text: string): string => {
  const listItemRegex = /^[•\-]\s(.*?)$/gm;
  return text.replace(listItemRegex, 
    '<div class="flex items-start py-2 my-1">' +
    '<span class="inline-flex items-center justify-center h-6 w-6 rounded-full bg-argus-teal-50 text-argus-teal-500 mr-3 flex-shrink-0 shadow-sm border border-argus-teal-100">•</span>' +
    '<span class="text-gray-700">$1</span>' +
    '</div>'
  );
};

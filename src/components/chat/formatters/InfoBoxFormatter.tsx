
import React from 'react';

/**
 * Formate les boîtes d'information spéciales (avec préfixes spécifiques)
 */
export const formatInfoBoxes = (text: string): string => {
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

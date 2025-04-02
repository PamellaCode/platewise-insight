
import React from 'react';

/**
 * Formate les titres (texte entre ** ou en début de ligne suivi de :)
 */
export const formatTitles = (text: string): string => {
  const titleRegex = /\*\*(.*?)\*\*|^([^:]+):/gm;
  return text.replace(titleRegex, (match, p1, p2) => {
    const title = p1 || p2;
    return `<div class="font-semibold text-base mt-4 mb-2 text-argus-teal-700 flex items-center gap-2 border-b border-argus-teal-100 pb-1">
      <span class="text-argus-teal-500 inline-flex items-center justify-center h-5 w-5 rounded-full bg-argus-teal-50">✦</span>
      ${title}
    </div>`;
  });
};

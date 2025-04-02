
import React from 'react';

/**
 * Formate les citations en bloc (lignes commençant par >)
 */
export const formatBlockquotes = (text: string): string => {
  const blockquoteRegex = /^>\s(.*?)$/gm;
  return text.replace(blockquoteRegex,
    '<blockquote class="pl-5 border-l-4 border-argus-blue-300 bg-argus-blue-50/60 py-3 px-4 rounded-r my-5 text-gray-700 italic shadow-sm">$1</blockquote>'
  );
};

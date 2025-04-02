
import React from 'react';

/**
 * Formate les citations en bloc (lignes commençant par >)
 */
export const formatBlockquotes = (text: string): string => {
  const blockquoteRegex = /^>\s(.*?)$/gm;
  return text.replace(blockquoteRegex,
    '<blockquote class="pl-4 border-l-4 border-argus-blue-200 bg-argus-blue-50/50 py-3 px-4 rounded-r my-4 text-gray-700 italic">$1</blockquote>'
  );
};

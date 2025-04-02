
import React from 'react';
import { getEmojiMap } from './EmojiMap';

/**
 * Remplace les codes d'emoji (texte entre : :) par leurs représentations visuelles
 */
export const replaceEmojis = (text: string): string => {
  const emojiRegex = /:([\w+-]+):/g;
  const emojiMap = getEmojiMap();
  
  return text.replace(emojiRegex, (match, emoji) => {
    return emojiMap[emoji] || match;
  });
};


import React from 'react';
import { replaceLinks } from './LinkFormatter';
import { formatTitles } from './TitleFormatter';
import { formatListItems } from './ListFormatter';
import { formatBlockquotes } from './BlockquoteFormatter';
import { formatInfoBoxes } from './InfoBoxFormatter';
import { highlightValues } from './ValueHighlighter';
import { replaceEmojis } from './EmojiFormatter';

/**
 * Enrichit le texte du message avec une mise en page structurée et des éléments interactifs
 */
export const formatMessageText = (text: string) => {
  if (!text) return null;
  
  // Traitement des liens
  let formattedText = replaceLinks(text);
  
  // Traitement des titres
  formattedText = formatTitles(formattedText);
  
  // Traitement des listes
  formattedText = formatListItems(formattedText);
  
  // Traitement des blockquotes
  formattedText = formatBlockquotes(formattedText);
  
  // Traitement des boîtes d'information
  formattedText = formatInfoBoxes(formattedText);
  
  // Mise en évidence des valeurs importantes
  formattedText = highlightValues(formattedText);
  
  // Formatage des emojis
  formattedText = replaceEmojis(formattedText);
  
  // Ajout d'espacement entre les paragraphes
  formattedText = formattedText.replace(/\n\n/g, '<div class="my-3"></div>');
  
  // Conversion des sauts de ligne simples en balises <br>
  formattedText = formattedText.replace(/\n/g, '<br>');

  return <div className="message-content leading-relaxed text-normal" dangerouslySetInnerHTML={{ __html: formattedText }} />;
};

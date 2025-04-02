
import React from 'react';

/**
 * Fournit une carte des codes d'emoji vers leurs représentations visuelles
 */
export const getEmojiMap = (): {[key: string]: string} => {
  return {
    // Emojis généraux
    'check': '✅', 
    'warning': '⚠️',
    'info': 'ℹ️',
    'star': '⭐',
    'sparkles': '✨',
    'thumbsup': '👍',
    'ok': '✓',
    
    // Transports & véhicules
    'car': '🚗',
    'truck': '🚚',
    'moto': '🏍️',
    'bicycle': '🚲',
    'train': '🚆',
    'taxi': '🚕',
    'bus': '🚌',

    // Finances
    'money': '💰',
    'euro': '€',
    'dollar': '💵',
    'bank': '🏦',
    'chart': '📈',
    'chart-down': '📉',
    'coins': '🪙',
    
    // Temps & dates
    'calendar': '📅',
    'time': '⏰',
    'clock': '🕓',
    'hourglass': '⌛',
    
    // Mesures & caractéristiques
    'gauge': '🏁',
    'speed': '⚡',
    'ruler': '📏',
    'weight': '⚖️',
    'power': '💪',
    'fuel': '⛽',
    
    // Notifications & alertes
    'note': '📝',
    'tip': '💡',
    'important': '❗',
    'new': '🆕',
    'fire': '🔥',
    'bell': '🔔',
    
    // Sentiments & expressions
    'smile': '😊',
    'sad': '😔',
    'love': '❤️',
    'eyes': '👀',
    'clap': '👏',
    'think': '🤔',
    'laugh': '😄',
    'cry': '😢',
    'wink': '😉',
    'cool': '😎',
    'wow': '😮',
    'confused': '😕',
    'angry': '😠',
    
    // Objets & outils
    'key': '🔑',
    'lock': '🔒',
    'tools': '🔧',
    'search': '🔍',
    'phone': '📱',
    'mail': '📧',
    'doc': '📄',
    'folder': '📁',
    
    // Environnement
    'tree': '🌳',
    'sun': '☀️',
    'cloud': '☁️',
    'rain': '🌧️',
    'snow': '❄️',
    'earth': '🌍',
    
    // Compléments d'émojis
    'rocket': '🚀',
    'heart': '❤️',
    'gift': '🎁',
    'trophy': '🏆',
    'medal': '🏅',
    'crown': '👑',
    'diamond': '💎',
    'megaphone': '📢',
    'book': '📚',
    'bookmark': '🔖',
    'glasses': '👓',
    'hammer': '🔨',
    'wrench': '🔧',
    'gear': '⚙️',
    'flag': '🚩',
    'pin': '📌',
    'link': '🔗',
    'timer': '⏲️',
    'camera': '📷',
    'video': '📹',
    'music': '🎵',
    'headphones': '🎧'
  };
};

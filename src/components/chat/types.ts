
export interface CarInfo {
  model: string;
  year: number;
  mileage: number;
  price: number;
}

export interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isTyping?: boolean;
  hasCarInfo?: boolean;
  carInfo?: CarInfo;
  showPrompts?: boolean;
  promptType?: string;
  sessionId?: string;
  showLicensePlateInput?: boolean; // Nouveau champ pour indiquer s'il faut afficher l'input de plaque
}

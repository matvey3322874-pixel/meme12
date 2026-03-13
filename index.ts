export interface PokemonCard {
  id: number;
  name: string;
  rarity: string;
  price: number;
  image: string;
}

// Типы для темы
export type ThemeType = 'light' | 'dark';

export interface ThemeColors {
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  primary: string;
  primaryHover: string;
  cardBg: string;
  headerBg: string;
  filterBg: string;
  buttonBg: string;
  buttonText: string;
  accent: string;
}
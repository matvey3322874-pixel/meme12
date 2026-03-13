import * as React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import { ThemeType, ThemeColors } from '../../../types';

// Цвета для светлой темы
const lightTheme: ThemeColors = {
  background: '#FFFFFF',
  surface: '#F8FAFC',
  text: '#0F172A',
  textSecondary: '#64748B',
  border: '#E2E8F0',
  primary: '#0F172A',
  primaryHover: '#1E293B',
  cardBg: '#FFFFFF',
  headerBg: '#0F172A', // Тёмная шапка даже в светлой теме (как в дизайне)
  filterBg: '#F1F5F9',
  buttonBg: '#0F172A',
  buttonText: '#FFFFFF',
  accent: '#3B82F6'
};

// Цвета для тёмной темы
const darkTheme: ThemeColors = {
  background: '#0F172A',
  surface: '#1E293B',
  text: '#F1F5F9',
  textSecondary: '#94A3B8',
  border: '#334155',
  primary: '#F1F5F9',
  primaryHover: '#E2E8F0',
  cardBg: '#1E293B',
  headerBg: '#020617', // Ещё темнее для шапки
  filterBg: '#334155',
  buttonBg: '#3B82F6',
  buttonText: '#FFFFFF',
  accent: '#60A5FA'
};

interface ThemeContextType {
  theme: ThemeType;
  colors: ThemeColors;
  toggleTheme: () => void;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Проверяем сохранённую тему в localStorage или системные настройки
  const getInitialTheme = (): ThemeType => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme') as ThemeType;
      if (saved && (saved === 'light' || saved === 'dark')) return saved;
      
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    }
    return 'light';
  };

  const [theme, setThemeState] = useState<ThemeType>(getInitialTheme);
  const colors = theme === 'light' ? lightTheme : darkTheme;

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Добавляем/убираем класс на body для глобальных стилей
    if (newTheme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    // Устанавливаем класс при загрузке
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
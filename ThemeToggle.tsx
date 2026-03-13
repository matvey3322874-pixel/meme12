import * as React from 'react';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: 'transparent',
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: '30px',
        padding: '6px 12px',
        cursor: 'pointer',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        fontSize: '14px',
        transition: 'all 0.2s'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
      }}
    >
      {theme === 'light' ? (
        <>
          <span>🌙</span> Тёмная
        </>
      ) : (
        <>
          <span>☀️</span> Светлая
        </>
      )}
    </button>
  );
}
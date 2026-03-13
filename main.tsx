// src/main.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';

// Простой компонент для теста
function App() {
  return (
    <div style={{ 
      padding: '40px', 
      textAlign: 'center',
      background: '#4f46e5',
      color: 'white',
      minHeight: '100vh'
    }}>
      <h1 style={{ fontSize: '48px' }}>🎴 PokeMart EX</h1>
      <p style={{ fontSize: '18px' }}>Если вы это видите - React работает!</p>
    </div>
  );
}

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(<App />);
} else {
  console.error('Root element not found!');
}
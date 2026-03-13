// src/app/App.tsx
import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/theme/ThemeProvider';

function TestPage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Тестовая страница</h1>
      <p>Если вы это видите - базовая функциональность работает</p>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
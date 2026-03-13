// src/app/MainPage.tsx
import * as React from 'react';
import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './components/theme/ThemeProvider';
import { MOCK_POKEMON_CARDS } from '../data/cards';
import { Carousel } from './components/Carousel';
import { Filters } from './components/Filters';
import { ThemeToggle } from './components/theme/ThemeToggle';
import { PokemonCard } from '../types';

export default function MainPage() {
  const [cartItems, setCartItems] = useState<PokemonCard[]>([]);
  const [selectedRarity, setSelectedRarity] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('cards');
  const { colors } = useTheme();
  const navigate = useNavigate();

  const categories = [
    { id: 'cards', name: 'Карты' },
    { id: 'boosters', name: 'Бустеры' },
    { id: 'sell', name: 'Продажа' },
    { id: 'contacts', name: 'Контакты' }
  ];

  const filteredCards = useMemo(() => {
    return MOCK_POKEMON_CARDS.filter(card => {
      const matchesRarity = selectedRarity === 'all' || card.rarity === selectedRarity;
      const matchesSearch = card.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesRarity && matchesSearch;
    });
  }, [selectedRarity, searchQuery]);

  const addToCart = (card: PokemonCard) => {
    setCartItems([...cartItems, card]);
    alert(`✅ ${card.name} добавлен в корзину!`);
  };

  const handleCardClick = (cardId: number) => {
    navigate(`/card/${cardId}`);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.background }}>
      {/* Шапка */}
      <header style={{
        backgroundColor: '#0F172A',
        color: 'white',
        padding: '12px 20px',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          
          {/* Логотип */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{
              fontSize: 'clamp(20px, 5vw, 26px)',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF6347 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              PokeMart
            </span>
            <span style={{
              fontSize: 'clamp(24px, 6vw, 32px)',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #E2E8F0 0%, #94A3B8 50%, #E2E8F0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              border: '2px solid rgba(148, 163, 184, 0.3)',
              borderRadius: '8px',
              padding: '0 6px'
            }}>
              EX
            </span>
          </div>

          {/* Категории */}
          <div style={{
            display: 'flex',
            gap: '8px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            padding: '4px',
            borderRadius: '40px',
            backdropFilter: 'blur(8px)'
          }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '8px 16px',
                  border: 'none',
                  borderRadius: '30px',
                  fontSize: '14px',
                  fontWeight: activeCategory === cat.id ? '600' : '500',
                  cursor: 'pointer',
                  backgroundColor: activeCategory === cat.id ? 'white' : 'transparent',
                  color: activeCategory === cat.id ? '#0F172A' : 'white',
                  transition: 'all 0.2s'
                  }}
              >
                {cat.name}
              </button>
            ))}
          </div>
          
          {/* Правая часть: переключатель темы + корзина */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <ThemeToggle />
            
            <button style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '30px',
              padding: '6px 16px',
              fontSize: 'clamp(14px, 4vw, 16px)',
              fontWeight: '600',
              cursor: 'pointer',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <span>🛒</span> Корзина
              {cartItems.length > 0 && (
                <span style={{
                  backgroundColor: '#EF4444',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Основной контент */}
      <main style={{ 
        maxWidth: '1280px', 
        margin: '0 auto', 
        padding: '24px 16px',
        minHeight: 'calc(100vh - 180px)'
      }}>
        <Filters
          selectedRarity={selectedRarity}
          onRarityChange={setSelectedRarity}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          isOpen={isFilterOpen}
          onToggle={() => setIsFilterOpen(!isFilterOpen)}
        />

        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '20px' 
        }}>
          <h2 style={{ fontSize: '20px', fontWeight: '700', color: colors.text }}>
            Новые поступления
          </h2>
          <span style={{ color: colors.textSecondary, fontSize: '14px' }}>
            {filteredCards.length} карт
          </span>
        </div>
        
        <Carousel
          cards={filteredCards}
          onAddToCart={addToCart}
          onCardClick={handleCardClick}
        />
      </main>

      {/* Футер */}
      <footer style={{
        borderTop: `1px solid ${colors.border}`,
        padding: '20px',
        textAlign: 'center',
        color: colors.textSecondary,
        fontSize: '13px',
        backgroundColor: colors.surface
      }}>
        © 2026 PokeMart EX. Все права защищены.
      </footer>
    </div>
  );
}
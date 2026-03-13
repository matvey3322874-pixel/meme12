// src/app/components/Carousel.tsx
import * as React from 'react';
import { PokemonCard } from '../types';
import { ProductCard } from './ProductCard';

interface CarouselProps {
  cards: PokemonCard[];
  onAddToCart: (card: PokemonCard) => void;
  onCardClick: (cardId: number) => void;  // ← новый проп
}

export function Carousel({ cards, onAddToCart, onCardClick }: CarouselProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Стрелки */}
      <button onClick={() => scroll('left')} style={{ /* ... */ }}>←</button>
      <button onClick={() => scroll('right')} style={{ /* ... */ }}>→</button>
      
      <div ref={scrollRef} style={{ display: 'flex', overflowX: 'auto', gap: '16px' }}>
        {cards.map(card => (
          <div key={card.id} style={{ flex: '0 0 auto', width: '240px' }}>
            <ProductCard 
              card={card} 
              onAddToCart={onAddToCart}
              onClick={() => onCardClick(card.id)}  // ← передаём клик
            />
          </div>
        ))}
      </div>
    </div>
  );
}
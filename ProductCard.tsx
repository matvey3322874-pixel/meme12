// src/app/components/ProductCard.tsx
import * as React from 'react';
import { PokemonCard } from '../types';
import { useTheme } from './theme/ThemeProvider';

interface ProductCardProps {
  card: PokemonCard;
  onAddToCart: (card: PokemonCard) => void;
  onClick: () => void;  // ← новый проп для клика по карточке
}

export function ProductCard({ card, onAddToCart, onClick }: ProductCardProps) {
  const { colors } = useTheme();
  const [imageError, setImageError] = React.useState(false);
  
  const getStockStatus = () => {
    if (card.id % 3 === 0) return { text: 'Нет в наличии', color: '#EF4444' };
    if (card.id % 5 === 0) return { text: 'Осталась 1 шт', color: '#F59E0B' };
    return { text: 'В наличии 10 шт', color: '#10B981' };
  };

  const stock = getStockStatus();

  return (
    <div style={{ /* ... стили карточки ... */ }}>
      
      {/* Вся карточка кликабельна */}
      <div onClick={onClick} style={{ cursor: 'pointer' }}>
        {/* Контейнер изображения */}
        <div style={{ /* ... */ }}>
          <img src={card.image} alt={card.name} />
        </div>
        
        {/* Информация о карте */}
        <div style={{ padding: '12px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: '700', color: colors.text }}>
            {card.name}
          </h3>
          {/* ... остальная информация ... */}
        </div>
      </div>
      
      {/* Кнопка отдельно, чтобы не конфликтовала с кликом */}
      <div style={{ padding: '0 12px 12px 12px' }}>
        <button
          onClick={(e) => {
            e.stopPropagation();  // ← не даём клику по кнопке открывать карту
            onAddToCart(card);
          }}
          disabled={stock.text === 'Нет в наличии'}
          style={{ /* ... стили кнопки ... */ }}
        >
          {stock.text === 'Нет в наличии' ? 'Нет в наличии' : 'В корзину'}
        </button>
      </div>
    </div>
  );
}
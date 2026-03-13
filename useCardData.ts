// src/app/hooks/useCardData.ts
import { useState, useEffect } from 'react';
import { MOCK_POKEMON_CARDS } from '../../data/cards';
import { PokemonCard } from '../../types';

export function useCardData(cardId: number) {
  const [card, setCard] = useState<PokemonCard | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setLoading(true);
      // Здесь потом можно заменить на API запрос
      const found = MOCK_POKEMON_CARDS.find(c => c.id === cardId);
      if (found) {
        setCard(found);
        setError(null);
      } else {
        setError('Карта не найдена');
      }
    } catch (err) {
      setError('Ошибка загрузки карты');
    } finally {
      setLoading(false);
    }
  }, [cardId]);

  return { card, loading, error };
}
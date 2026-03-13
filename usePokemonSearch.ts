import { useState, useEffect, useCallback } from 'react';
import { Pokemon, findPokemonByQuery, POKEMON_DATABASE } from '../../data/pokemonDatabase';

interface UsePokemonSearchReturn {
  query: string;
  setQuery: (query: string) => void;
  suggestions: Pokemon[];
  selectedPokemon: Pokemon | null;
  setSelectedPokemon: (pokemon: Pokemon | null) => void;
  searchResults: Pokemon[];
  isSearching: boolean;
  clearSearch: () => void;
}

export function usePokemonSearch(): UsePokemonSearchReturn {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [searchResults, setSearchResults] = useState<Pokemon[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Обновляем предложения при изменении запроса
  useEffect(() => {
    if (query.length >= 1) {
      setIsSearching(true);
      const results = findPokemonByQuery(query);
      setSuggestions(results);
      
      // Если есть точное совпадение, показываем в результатах
      if (results.length > 0) {
        setSearchResults(results);
      }
    } else {
      setSuggestions([]);
      setSearchResults([]);
    }
    setIsSearching(false);
  }, [query]);

  const clearSearch = useCallback(() => {
    setQuery('');
    setSuggestions([]);
    setSelectedPokemon(null);
    setSearchResults([]);
  }, []);

  return {
    query,
    setQuery,
    suggestions,
    selectedPokemon,
    setSelectedPokemon,
    searchResults,
    isSearching,
    clearSearch
  };
}
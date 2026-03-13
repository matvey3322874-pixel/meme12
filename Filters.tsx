import * as React from 'react';
import { useTheme } from './theme/ThemeProvider';
import { SearchBar } from './search/SearchBar';

interface FiltersProps {
  selectedRarity: string;
  onRarityChange: (rarity: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  isOpen: boolean;
  onToggle: () => void;
  onPokemonSelect?: (pokemon: any) => void; // новый проп
}

export function Filters({ 
  selectedRarity, 
  onRarityChange, 
  searchQuery, 
  onSearchChange,
  isOpen,
  onToggle,
  onPokemonSelect
}: FiltersProps) {
  
  const { colors } = useTheme();
  
  const rarities = ['all', 'AR', 'UR', 'SR', 'RR', 'CSR', 'CHR'];

  const handlePokemonSelect = (pokemon: any) => {
    // Обновляем поисковый запрос
    onSearchChange(pokemon.name.ru);
    
    // Вызываем колбэк если есть
    if (onPokemonSelect) {
      onPokemonSelect(pokemon);
    }
  };

  return (
    <div style={{ marginBottom: '32px' }}>
      {/* Строка поиска - теперь с автодополнением */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
        <SearchBar
          onSearch={onSearchChange}
          onPokemonSelect={handlePokemonSelect}
          placeholder="Поиск карт по имени покемона..."
        />
        
        <button
          onClick={onToggle}
          style={{
            padding: '12px 20px',
            backgroundColor: isOpen ? colors.primary : colors.cardBg,
            border: `1px solid ${colors.border}`,
            borderRadius: '12px',
            fontSize: '15px',
            fontWeight: '500',
            cursor: 'pointer',
            color: isOpen ? colors.buttonText : colors.text,
            whiteSpace: 'nowrap',
            transition: 'all 0.2s'
          }}
        >
          <span style={{ marginRight: '4px' }}>⚡</span> Фильтр
        </button>
      </div>

      {/* Фильтры редкости */}
      {isOpen && (
        <div style={{
          backgroundColor: colors.cardBg,
          border: `1px solid ${colors.border}`,
          borderRadius: '16px',
          padding: '20px',
          marginBottom: '20px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{ 
            fontSize: '16px', 
            fontWeight: '600', 
            color: colors.text,
            marginBottom: '16px' 
          }}>
            Редкость
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {rarities.map(rarity => (
              <button
                key={rarity}
                onClick={() => onRarityChange(rarity)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '30px',
                  border: 'none',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  backgroundColor: selectedRarity === rarity ? colors.primary : colors.filterBg,
                  color: selectedRarity === rarity ? colors.buttonText : colors.text,
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  if (selectedRarity !== rarity) {
                    e.currentTarget.style.backgroundColor = colors.border;
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedRarity !== rarity) {
                    e.currentTarget.style.backgroundColor = colors.filterBg;
                  }
                }}
              >
                {rarity === 'all' ? 'Все' : rarity}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
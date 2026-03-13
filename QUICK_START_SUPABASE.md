# Быстрый старт с Supabase для PokeMart ex

## Шаг 1: Регистрация в Supabase

1. Перейдите на https://supabase.com
2. Нажмите "Start your project"
3. Войдите через GitHub
4. Создайте новую организацию и проект

## Шаг 2: Создание таблицы

1. В панели Supabase откройте **SQL Editor**
2. Создайте новый query
3. Вставьте и выполните этот SQL:

```sql
-- Создаем таблицу для карт
CREATE TABLE pokemon_cards (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  rarity TEXT NOT NULL,
  price INTEGER NOT NULL,
  image TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Добавляем индекс для быстрого поиска
CREATE INDEX idx_pokemon_cards_rarity ON pokemon_cards(rarity);
CREATE INDEX idx_pokemon_cards_price ON pokemon_cards(price);

-- Включаем Row Level Security
ALTER TABLE pokemon_cards ENABLE ROW LEVEL SECURITY;

-- Разрешаем всем читать карты
CREATE POLICY "Allow public read access" ON pokemon_cards
  FOR SELECT USING (true);

-- Вставляем тестовые данные
INSERT INTO pokemon_cards (name, rarity, price, image, description) VALUES
('Charizard ex', 'SAR/CSR', 15500, 'https://images.unsplash.com/photo-1613771404721-1f92d799e49f?w=400&h=400&fit=crop', 'Редкая карта Charizard'),
('Pikachu VMAX', 'UR/MUR', 25000, 'https://images.unsplash.com/photo-1542779283-429940ce8336?w=400&h=400&fit=crop', 'Ультра редкая карта Pikachu'),
('Blastoise ex', 'SR', 4800, 'https://images.unsplash.com/photo-1606503153255-59d56b655807?w=400&h=400&fit=crop', 'Secret Rare Blastoise'),
('Venusaur V', 'RR', 2500, 'https://images.unsplash.com/photo-1592659762303-90081d34b277?w=400&h=400&fit=crop', 'Double Rare Venusaur'),
('Mewtwo VSTAR', 'SAR/CSR', 12500, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=400&fit=crop', 'Special Art Rare Mewtwo'),
('Dragonite V', 'AR/CHR', 3800, 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=400&h=400&fit=crop', 'Character Rare Dragonite'),
('Eevee', 'Common', 150, 'https://images.unsplash.com/photo-1607198725144-0c7e661842df?w=400&h=400&fit=crop', 'Обычная карта Eevee'),
('Snorlax', 'Uncommon', 350, 'https://images.unsplash.com/photo-1603912699214-92627f304eb6?w=400&h=400&fit=crop', 'Необычная карта Snorlax'),
('Gengar ex', 'SR', 5200, 'https://images.unsplash.com/photo-1610034033967-1e24f21e2a34?w=400&h=400&fit=crop', 'Secret Rare Gengar'),
('Gyarados', 'Rare', 800, 'https://images.unsplash.com/photo-1625095449562-d656c80e9e15?w=400&h=400&fit=crop', 'Редкая карта Gyarados'),
('Alakazam', 'Rare', 900, 'https://images.unsplash.com/photo-1606016159991-c8c706c1e7c7?w=400&h=400&fit=crop', 'Редкая карта Alakazam'),
('Machamp', 'Uncommon', 400, 'https://images.unsplash.com/photo-1621799807878-a1b1e6e84dd8?w=400&h=400&fit=crop', 'Необычная карта Machamp'),
('Lugia VSTAR', 'UR/MUR', 28000, 'https://images.unsplash.com/photo-1606503153255-59d56b655807?w=400&h=400&fit=crop', 'Ultra Rare Lugia'),
('Mew ex (Promo)', 'Promo', 1500, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=400&fit=crop', 'Промо карта Mew'),
('Rayquaza VMAX', 'SAR/CSR', 18000, 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=400&h=400&fit=crop', 'Special Art Rare Rayquaza');
```

## Шаг 3: Получение API ключей

1. В Supabase перейдите в **Settings** → **API**
2. Скопируйте:
   - **Project URL** (например: `https://xxxxx.supabase.co`)
   - **anon public** ключ

## Шаг 4: Установка зависимостей

```bash
pnpm install @supabase/supabase-js
```

## Шаг 5: Создание конфигурации

Создайте файл `src/lib/supabase.ts`:

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xxxxx.supabase.co'; // Ваш URL
const supabaseAnonKey = 'ваш_anon_ключ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface PokemonCard {
  id: number;
  name: string;
  rarity: string;
  price: number;
  image: string;
  description?: string;
  created_at?: string;
}
```

## Шаг 6: Обновление App.tsx

Замените начало файла `src/app/App.tsx`:

```typescript
import { useState, useMemo, useEffect } from 'react';
import { Search, ShoppingCart, Filter, X } from 'lucide-react';
import { ProductCard } from './components/ProductCard';
import { Cart } from './components/Cart';
import { Checkout, FormData } from './components/Checkout';
import { OrderSuccess } from './components/OrderSuccess';
import { supabase, PokemonCard } from '../lib/supabase';

interface CartItem extends PokemonCard {
  quantity: number;
}

export default function App() {
  const [cards, setCards] = useState<PokemonCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRarity, setSelectedRarity] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [itemsPerPage, setItemsPerPage] = useState<number>(12);

  // ... остальные useState

  // Загрузка карт из Supabase
  useEffect(() => {
    loadCards();
  }, []);

  async function loadCards() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('pokemon_cards')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      if (data) setCards(data);
    } catch (error) {
      console.error('Ошибка загрузки карт:', error);
    } finally {
      setLoading(false);
    }
  }

  const filteredCards = useMemo(() => {
    let filtered = cards.filter(card => {
      const matchesSearch = card.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRarity = selectedRarity === 'all' || card.rarity === selectedRarity;

      let matchesPrice = true;
      if (priceRange !== 'all') {
        const [min, max] = priceRange.split('-').map(Number);
        matchesPrice = card.price >= min && card.price <= max;
      }

      return matchesSearch && matchesRarity && matchesPrice;
    });

    return filtered.slice(0, itemsPerPage);
  }, [cards, searchQuery, selectedRarity, priceRange, itemsPerPage]);

  // В return добавьте индикатор загрузки
  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Загрузка карт...</p>
        </div>
      </div>
    );
  }

  // ... остальной код
}
```

## Шаг 7: Добавление и редактирование карт

### Через SQL Editor в Supabase:

```sql
-- Добавить новую карту
INSERT INTO pokemon_cards (name, rarity, price, image, description)
VALUES ('Новая карта', 'SR', 5000, 'URL_изображения', 'Описание');

-- Обновить цену
UPDATE pokemon_cards
SET price = 6000
WHERE name = 'Charizard ex';

-- Удалить карту
DELETE FROM pokemon_cards
WHERE id = 1;
```

### Через Supabase Table Editor:

1. Откройте **Table Editor**
2. Выберите таблицу `pokemon_cards`
3. Нажмите **Insert** → **Insert row** для добавления
4. Кликните на любую ячейку для редактирования
5. Изменения сохраняются автоматически

## Шаг 8: Добавление админ-панели (опционально)

Создайте файл `src/app/Admin.tsx` для управления картами:

```typescript
import { useState, useEffect } from 'react';
import { supabase, PokemonCard } from '../lib/supabase';

export function Admin() {
  const [cards, setCards] = useState<PokemonCard[]>([]);

  async function addCard(card: Omit<PokemonCard, 'id'>) {
    const { error } = await supabase
      .from('pokemon_cards')
      .insert([card]);

    if (!error) loadCards();
  }

  async function updateCard(id: number, updates: Partial<PokemonCard>) {
    const { error } = await supabase
      .from('pokemon_cards')
      .update(updates)
      .eq('id', id);

    if (!error) loadCards();
  }

  async function deleteCard(id: number) {
    const { error } = await supabase
      .from('pokemon_cards')
      .delete()
      .eq('id', id);

    if (!error) loadCards();
  }

  // ... UI для управления
}
```

## Готово! 🎉

Теперь ваше приложение использует Supabase как базу данных. Все изменения в таблице `pokemon_cards` будут автоматически отражаться в приложении после перезагрузки страницы.

## Полезные ссылки

- [Документация Supabase](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- [Realtime обновления](https://supabase.com/docs/guides/realtime)

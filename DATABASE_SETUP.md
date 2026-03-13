# Настройка базы данных для PokeMart ex

## Текущая реализация

Сейчас приложение использует статический массив `MOCK_POKEMON_CARDS` в файле `/tmp/sandbox/src/app/App.tsx` (строки 12-118).

## Варианты добавления базы данных

### Вариант 1: Supabase (Рекомендуется для production)

**Преимущества:**
- Бесплатный тариф для небольших проектов
- Встроенная аутентификация
- Realtime обновления
- API из коробки
- Удобная админ-панель

**Как настроить:**

1. Создайте аккаунт на [supabase.com](https://supabase.com)

2. Создайте новый проект

3. В SQL Editor создайте таблицу:

```sql
CREATE TABLE pokemon_cards (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  rarity TEXT NOT NULL,
  price INTEGER NOT NULL,
  image TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Вставьте начальные данные
INSERT INTO pokemon_cards (name, rarity, price, image) VALUES
('Charizard ex', 'SAR/CSR', 15500, 'https://images.unsplash.com/photo-1613771404721-1f92d799e49f?w=400&h=400&fit=crop'),
('Pikachu VMAX', 'UR/MUR', 25000, 'https://images.unsplash.com/photo-1542779283-429940ce8336?w=400&h=400&fit=crop');
```

4. Установите Supabase клиент:

```bash
pnpm install @supabase/supabase-js
```

5. Создайте файл `/src/lib/supabase.ts`:

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseKey);
```

6. Обновите `App.tsx`:

```typescript
import { useEffect, useState } from 'react';
import { supabase } from './lib/supabase';

export default function App() {
  const [cards, setCards] = useState<PokemonCard[]>([]);

  useEffect(() => {
    loadCards();
  }, []);

  async function loadCards() {
    const { data, error } = await supabase
      .from('pokemon_cards')
      .select('*')
      .order('created_at', { ascending: false });

    if (data) {
      setCards(data);
    }
  }

  // Остальной код...
}
```

### Вариант 2: JSON файл (Для разработки/тестирования)

**Преимущества:**
- Простота
- Не требует настройки сервера
- Легко редактировать

**Как настроить:**

1. Создайте файл `/public/cards.json`:

```json
[
  {
    "id": 1,
    "name": "Charizard ex",
    "rarity": "SAR/CSR",
    "price": 15500,
    "image": "https://images.unsplash.com/photo-1613771404721-1f92d799e49f?w=400&h=400&fit=crop"
  },
  {
    "id": 2,
    "name": "Pikachu VMAX",
    "rarity": "UR/MUR",
    "price": 25000,
    "image": "https://images.unsplash.com/photo-1542779283-429940ce8336?w=400&h=400&fit=crop"
  }
]
```

2. Обновите `App.tsx`:

```typescript
useEffect(() => {
  fetch('/cards.json')
    .then(res => res.json())
    .then(data => setCards(data));
}, []);
```

### Вариант 3: Firebase Firestore

**Преимущества:**
- Realtime database
- Хорошая интеграция с Google
- Бесплатный тариф

**Как настроить:**

1. Создайте проект на [firebase.google.com](https://firebase.google.com)

2. Установите Firebase:

```bash
pnpm install firebase
```

3. Создайте `/src/lib/firebase.ts`:

```typescript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

4. Используйте в `App.tsx`:

```typescript
import { collection, getDocs } from 'firebase/firestore';
import { db } from './lib/firebase';

async function loadCards() {
  const querySnapshot = await getDocs(collection(db, 'cards'));
  const cardsData = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  setCards(cardsData);
}
```

### Вариант 4: localStorage (Для локального хранения)

**Преимущества:**
- Работает без интернета
- Нет настройки сервера
- Данные хранятся в браузере пользователя

**Как настроить:**

```typescript
// Сохранение
localStorage.setItem('cards', JSON.stringify(cards));

// Загрузка
const savedCards = localStorage.getItem('cards');
if (savedCards) {
  setCards(JSON.parse(savedCards));
}
```

## Структура данных карты

```typescript
interface PokemonCard {
  id: number;
  name: string;          // Название карты
  rarity: string;        // Common, Uncommon, Rare, RR, AR/CHR, SR, SAR/CSR, UR/MUR, Promo
  price: number;         // Цена в рублях
  image: string;         // URL изображения
}
```

## Дополнительные поля (опционально)

Вы можете расширить интерфейс:

```typescript
interface PokemonCard {
  id: number;
  name: string;
  rarity: string;
  price: number;
  image: string;
  description?: string;   // Описание карты
  set?: string;          // Название сета
  cardNumber?: string;   // Номер карты (например, "123/198")
  condition?: string;    // Состояние карты (NM, LP, MP, HP)
  stock?: number;        // Количество на складе
  language?: string;     // Язык карты
}
```

## Редактирование текущих данных

Если вы хотите просто изменить существующие данные без базы данных, отредактируйте массив `MOCK_POKEMON_CARDS` в файле `/tmp/sandbox/src/app/App.tsx`:

```typescript
const MOCK_POKEMON_CARDS: PokemonCard[] = [
  {
    id: 1,
    name: 'Ваше название',
    rarity: 'SR',
    price: 5000,
    image: 'URL вашего изображения',
  },
  // ... добавьте больше карт
];
```

## Загрузка изображений

### Для Supabase:
1. Создайте Storage bucket в Supabase
2. Загрузите изображения
3. Используйте публичный URL

### Для других вариантов:
- Используйте бесплатные сервисы: Imgur, Cloudinary, AWS S3
- Храните в `/public/images/` и используйте относительные пути
- Используйте внешние URL (Unsplash, Pokemon TCG API)

## Рекомендация

Для Telegram Mini App я рекомендую **Supabase**, так как:
- Легко интегрируется
- Бесплатный тариф достаточен для начала
- Есть готовая админ-панель для управления данными
- Поддерживает аутентификацию через Telegram
- Можно легко масштабировать

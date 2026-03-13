// src/data/pokemonDatabase.ts
export interface Pokemon {
  id: number;
  name: {
    en: string;
    ru: string;
  };
  types: string[];
  image: string;
  generation: number;
}

// Форматирование ID с ведущими нулями (001, 025, 151)
const formatId = (id: number): string => {
  return id.toString().padStart(3, '0');
};

// База данных 1 поколения (151 покемон)
export const POKEMON_DATABASE: Pokemon[] = [
  { id: 1, name: { en: 'Bulbasaur', ru: 'Бульбазавр' }, types: ['Grass', 'Poison'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png', generation: 1 },
  { id: 2, name: { en: 'Ivysaur', ru: 'Айвизавр' }, types: ['Grass', 'Poison'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/2.png', generation: 1 },
  { id: 3, name: { en: 'Venusaur', ru: 'Венузавр' }, types: ['Grass', 'Poison'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/3.png', generation: 1 },
  { id: 4, name: { en: 'Charmander', ru: 'Чармандер' }, types: ['Fire'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png', generation: 1 },
  { id: 5, name: { en: 'Charmeleon', ru: 'Чармелеон' }, types: ['Fire'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/5.png', generation: 1 },
  { id: 6, name: { en: 'Charizard', ru: 'Чаризард' }, types: ['Fire', 'Flying'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png', generation: 1 },
  { id: 7, name: { en: 'Squirtle', ru: 'Сквиртл' }, types: ['Water'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png', generation: 1 },
  { id: 8, name: { en: 'Wartortle', ru: 'Вартортл' }, types: ['Water'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/8.png', generation: 1 },
  { id: 9, name: { en: 'Blastoise', ru: 'Бластойс' }, types: ['Water'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/9.png', generation: 1 },
  { id: 10, name: { en: 'Caterpie', ru: 'Каттерпи' }, types: ['Bug'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10.png', generation: 1 },
  { id: 11, name: { en: 'Metapod', ru: 'Метапод' }, types: ['Bug'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/11.png', generation: 1 },
  { id: 12, name: { en: 'Butterfree', ru: 'Баттерфри' }, types: ['Bug', 'Flying'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/12.png', generation: 1 },
  { id: 13, name: { en: 'Weedle', ru: 'Уидл' }, types: ['Bug', 'Poison'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/13.png', generation: 1 },
  { id: 14, name: { en: 'Kakuna', ru: 'Какуна' }, types: ['Bug', 'Poison'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/14.png', generation: 1 },
  { id: 15, name: { en: 'Beedrill', ru: 'Бидрилл' }, types: ['Bug', 'Poison'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/15.png', generation: 1 },
  { id: 16, name: { en: 'Pidgey', ru: 'Пиджи' }, types: ['Normal', 'Flying'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/16.png', generation: 1 },
  { id: 17, name: { en: 'Pidgeotto', ru: 'Пиджотто' }, types: ['Normal', 'Flying'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/17.png', generation: 1 },
  { id: 18, name: { en: 'Pidgeot', ru: 'Пиджот' }, types: ['Normal', 'Flying'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/18.png', generation: 1 },
  { id: 19, name: { en: 'Rattata', ru: 'Раттата' }, types: ['Normal'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/19.png', generation: 1 },
  { id: 20, name: { en: 'Raticate', ru: 'Ратикейт' }, types: ['Normal'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png', generation: 1 },
  { id: 21, name: { en: 'Spearow', ru: 'Спироу' }, types: ['Normal', 'Flying'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/21.png', generation: 1 },
  { id: 22, name: { en: 'Fearow', ru: 'Фироу' }, types: ['Normal', 'Flying'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/22.png', generation: 1 },
  { id: 23, name: { en: 'Ekans', ru: 'Эканс' }, types: ['Poison'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/23.png', generation: 1 },
  { id: 24, name: { en: 'Arbok', ru: 'Арбок' }, types: ['Poison'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/24.png', generation: 1 },
  { id: 25, name: { en: 'Pikachu', ru: 'Пикачу' }, types: ['Electric'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png', generation: 1 },
  { id: 26, name: { en: 'Raichu', ru: 'Райчу' }, types: ['Electric'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/26.png', generation: 1 },
  { id: 27, name: { en: 'Sandshrew', ru: 'Сэндшрю' }, types: ['Ground'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/27.png', generation: 1 },
  { id: 28, name: { en: 'Sandslash', ru: 'Сэндслэш' }, types: ['Ground'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/28.png', generation: 1 },
  { id: 29, name: { en: 'Nidoran♀', ru: 'Нидоран♀' }, types: ['Poison'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/29.png', generation: 1 },
  { id: 30, name: { en: 'Nidorina', ru: 'Нидорина' }, types: ['Poison'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/30.png', generation: 1 },
  { id: 31, name: { en: 'Nidoqueen', ru: 'Нидоквин' }, types: ['Poison', 'Ground'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/31.png', generation: 1 },
  { id: 32, name: { en: 'Nidoran♂', ru: 'Нидоран♂' }, types: ['Poison'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/32.png', generation: 1 },
  { id: 33, name: { en: 'Nidorino', ru: 'Нидорино' }, types: ['Poison'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/33.png', generation: 1 },
  { id: 34, name: { en: 'Nidoking', ru: 'Нидокинг' }, types: ['Poison', 'Ground'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/34.png', generation: 1 },
  { id: 35, name: { en: 'Clefairy', ru: 'Клефейри' }, types: ['Fairy'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/35.png', generation: 1 },
  { id: 36, name: { en: 'Clefable', ru: 'Клефейбл' }, types: ['Fairy'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/36.png', generation: 1 },
  { id: 37, name: { en: 'Vulpix', ru: 'Вульпикс' }, types: ['Fire'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/37.png', generation: 1 },
  { id: 38, name: { en: 'Ninetales', ru: 'Найнтейлс' }, types: ['Fire'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/38.png', generation: 1 },
  { id: 39, name: { en: 'Jigglypuff', ru: 'Джигглипафф' }, types: ['Normal', 'Fairy'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/39.png', generation: 1 },
  { id: 40, name: { en: 'Wigglytuff', ru: 'Вигглитафф' }, types: ['Normal', 'Fairy'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/40.png', generation: 1 },
  { id: 41, name: { en: 'Zubat', ru: 'Зубат' }, types: ['Poison', 'Flying'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/41.png', generation: 1 },
  { id: 42, name: { en: 'Golbat', ru: 'Голбат' }, types: ['Poison', 'Flying'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/42.png', generation: 1 },
  { id: 43, name: { en: 'Oddish', ru: 'Оддиш' }, types: ['Grass', 'Poison'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/43.png', generation: 1 },
  { id: 44, name: { en: 'Gloom', ru: 'Глум' }, types: ['Grass', 'Poison'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/44.png', generation: 1 },
  { id: 45, name: { en: 'Vileplume', ru: 'Вайлплюм' }, types: ['Grass', 'Poison'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/45.png', generation: 1 },
  { id: 46, name: { en: 'Paras', ru: 'Парас' }, types: ['Bug', 'Grass'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/46.png', generation: 1 },
  { id: 47, name: { en: 'Parasect', ru: 'Парасект' }, types: ['Bug', 'Grass'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/47.png', generation: 1 },
  { id: 48, name: { en: 'Venonat', ru: 'Венонат' }, types: ['Bug', 'Poison'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/48.png', generation: 1 },
  { id: 49, name: { en: 'Venomoth', ru: 'Веномот' }, types: ['Bug', 'Poison'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/49.png', generation: 1 },
  { id: 50, name: { en: 'Diglett', ru: 'Диглетт' }, types: ['Ground'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/50.png', generation: 1 },
  { id: 51, name: { en: 'Dugtrio', ru: 'Дагтрио' }, types: ['Ground'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/51.png', generation: 1 },
  { id: 52, name: { en: 'Meowth', ru: 'Мяут' }, types: ['Normal'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/52.png', generation: 1 },
  { id: 53, name: { en: 'Persian', ru: 'Персиан' }, types: ['Normal'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/53.png', generation: 1 },
  { id: 54, name: { en: 'Psyduck', ru: 'Псайдак' }, types: ['Water'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/54.png', generation: 1 },
  { id: 55, name: { en: 'Golduck', ru: 'Голдак' }, types: ['Water'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/55.png', generation: 1 },
  { id: 56, name: { en: 'Mankey', ru: 'Манки' }, types: ['Fighting'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/56.png', generation: 1 },
  { id: 57, name: { en: 'Primeape', ru: 'Праймейп' }, types: ['Fighting'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/57.png', generation: 1 },
  { id: 58, name: { en: 'Growlithe', ru: 'Гроулит' }, types: ['Fire'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/58.png', generation: 1 },
  { id: 59, name: { en: 'Arcanine', ru: 'Арканайн' }, types: ['Fire'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/59.png', generation: 1 },
  { id: 60, name: { en: 'Poliwag', ru: 'Поливаг' }, types: ['Water'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/60.png', generation: 1 },
  { id: 61, name: { en: 'Poliwhirl', ru: 'Поливирл' }, types: ['Water'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/61.png', generation: 1 },
  { id: 62, name: { en: 'Poliwrath', ru: 'Поливрат' }, types: ['Water', 'Fighting'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/62.png', generation: 1 },
  { id: 63, name: { en: 'Abra', ru: 'Абра' }, types: ['Psychic'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/63.png', generation: 1 },
  { id: 64, name: { en: 'Kadabra', ru: 'Кадабра' }, types: ['Psychic'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/64.png', generation: 1 },
  { id: 65, name: { en: 'Alakazam', ru: 'Алаказам' }, types: ['Psychic'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/65.png', generation: 1 },
  { id: 66, name: { en: 'Machop', ru: 'Мачоп' }, types: ['Fighting'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/66.png', generation: 1 },
  { id: 67, name: { en: 'Machoke', ru: 'Мачок' }, types: ['Fighting'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/67.png', generation: 1 },
  { id: 68, name: { en: 'Machamp', ru: 'Мачамп' }, types: ['Fighting'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/68.png', generation: 1 },
  { id: 69, name: { en: 'Bellsprout', ru: 'Беллспраут' }, types: ['Grass', 'Poison'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/69.png', generation: 1 },
  { id: 70, name: { en: 'Weepinbell', ru: 'Випинбелл' }, types: ['Grass', 'Poison'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/70.png', generation: 1 },
  { id: 71, name: { en: 'Victreebel', ru: 'Виктрибел' }, types: ['Grass', 'Poison'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/71.png', generation: 1 },
  { id: 72, name: { en: 'Tentacool', ru: 'Тентакул' }, types: ['Water', 'Poison'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/72.png', generation: 1 },
  { id: 73, name: { en: 'Tentacruel', ru: 'Тентакруэл' }, types: ['Water', 'Poison'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/73.png', generation: 1 },
  { id: 74, name: { en: 'Geodude', ru: 'Геодуд' }, types: ['Rock', 'Ground'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/74.png', generation: 1 },
  { id: 75, name: { en: 'Graveler', ru: 'Гравелер' }, types: ['Rock', 'Ground'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/75.png', generation: 1 },
  { id: 76, name: { en: 'Golem', ru: 'Голем' }, types: ['Rock', 'Ground'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/76.png', generation: 1 },
  { id: 77, name: { en: 'Ponyta', ru: 'Понита' }, types: ['Fire'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/77.png', generation: 1 },
  { id: 78, name: { en: 'Rapidash', ru: 'Рапидаш' }, types: ['Fire'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/78.png', generation: 1 },
  { id: 79, name: { en: 'Slowpoke', ru: 'Слоупок' }, types: ['Water', 'Psychic'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/79.png', generation: 1 },
  { id: 80, name: { en: 'Slowbro', ru: 'Слоубро' }, types: ['Water', 'Psychic'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/80.png', generation: 1 },
  { id: 81, name: { en: 'Magnemite', ru: 'Магнемайт' }, types: ['Electric', 'Steel'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/81.png', generation: 1 },
  { id: 82, name: { en: 'Magneton', ru: 'Магнетон' }, types: ['Electric', 'Steel'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/82.png', generation: 1 },
  { id: 83, name: { en: 'Farfetch\'d', ru: 'Фарфетчд' }, types: ['Normal', 'Flying'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/83.png', generation: 1 },
  { id: 84, name: { en: 'Doduo', ru: 'Додуо' }, types: ['Normal', 'Flying'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/84.png', generation: 1 },
  { id: 85, name: { en: 'Dodrio', ru: 'Додрио' }, types: ['Normal', 'Flying'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/85.png', generation: 1 },
  { id: 86, name: { en: 'Seel', ru: 'Сил' }, types: ['Water'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/86.png', generation: 1 },
  { id: 87, name: { en: 'Dewgong', ru: 'Дьюгонг' }, types: ['Water', 'Ice'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/87.png', generation: 1 },
  { id: 88, name: { en: 'Grimer', ru: 'Граймер' }, types: ['Poison'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/88.png', generation: 1 },
  { id: 89, name: { en: 'Muk', ru: 'Мак' }, types: ['Poison'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/89.png', generation: 1 },
  { id: 90, name: { en: 'Shellder', ru: 'Шеллдер' }, types: ['Water'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/90.png', generation: 1 },
  { id: 91, name: { en: 'Cloyster', ru: 'Клойстер' }, types: ['Water', 'Ice'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/91.png', generation: 1 },
  { id: 92, name: { en: 'Gastly', ru: 'Гастли' }, types: ['Ghost', 'Poison'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/92.png', generation: 1 },
  { id: 93, name: { en: 'Haunter', ru: 'Хонтер' }, types: ['Ghost', 'Poison'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/93.png', generation: 1 },
  { id: 94, name: { en: 'Gengar', ru: 'Генгар' }, types: ['Ghost', 'Poison'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/94.png', generation: 1 },
  { id: 95, name: { en: 'Onix', ru: 'Оникс' }, types: ['Rock', 'Ground'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/95.png', generation: 1 },
  { id: 96, name: { en: 'Drowzee', ru: 'Дроузи' }, types: ['Psychic'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/96.png', generation: 1 },
  { id: 97, name: { en: 'Hypno', ru: 'Гипно' }, types: ['Psychic'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/97.png', generation: 1 },
  { id: 98, name: { en: 'Krabby', ru: 'Крабби' }, types: ['Water'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/98.png', generation: 1 },
  { id: 99, name: { en: 'Kingler', ru: 'Кинглер' }, types: ['Water'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/99.png', generation: 1 },
  { id: 100, name: { en: 'Voltorb', ru: 'Волторб' }, types: ['Electric'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/100.png', generation: 1 },
  { id: 101, name: { en: 'Electrode', ru: 'Электрод' }, types: ['Electric'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/101.png', generation: 1 },
  { id: 102, name: { en: 'Exeggcute', ru: 'Экзеггьют' }, types: ['Grass', 'Psychic'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/102.png', generation: 1 },
  { id: 103, name: { en: 'Exeggutor', ru: 'Экзегьютор' }, types: ['Grass', 'Psychic'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/103.png', generation: 1 },
  { id: 104, name: { en: 'Cubone', ru: 'Кьюбон' }, types: ['Ground'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/104.png', generation: 1 },
  { id: 105, name: { en: 'Marowak', ru: 'Маровак' }, types: ['Ground'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/105.png', generation: 1 },
  { id: 106, name: { en: 'Hitmonlee', ru: 'Хитмонли' }, types: ['Fighting'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/106.png', generation: 1 },
  { id: 107, name: { en: 'Hitmonchan', ru: 'Хитмончан' }, types: ['Fighting'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/107.png', generation: 1 },
  { id: 108, name: { en: 'Lickitung', ru: 'Ликитунг' }, types: ['Normal'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/108.png', generation: 1 },
  { id: 109, name: { en: 'Koffing', ru: 'Коффинг' }, types: ['Poison'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/109.png', generation: 1 },
  { id: 110, name: { en: 'Weezing', ru: 'Визинг' }, types: ['Poison'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/110.png', generation: 1 },
  { id: 111, name: { en: 'Rhyhorn', ru: 'Райхорн' }, types: ['Ground', 'Rock'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/111.png', generation: 1 },
  { id: 112, name: { en: 'Rhydon', ru: 'Райдон' }, types: ['Ground', 'Rock'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/112.png', generation: 1 },
  { id: 113, name: { en: 'Chansey', ru: 'Ченси' }, types: ['Normal'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/113.png', generation: 1 },
  { id: 114, name: { en: 'Tangela', ru: 'Тангела' }, types: ['Grass'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/114.png', generation: 1 },
  { id: 115, name: { en: 'Kangaskhan', ru: 'Кангасхан' }, types: ['Normal'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/115.png', generation: 1 },
  { id: 116, name: { en: 'Horsea', ru: 'Хорси' }, types: ['Water'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/116.png', generation: 1 },
  { id: 117, name: { en: 'Seadra', ru: 'Сидре' }, types: ['Water'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/117.png', generation: 1 },
  { id: 118, name: { en: 'Goldeen', ru: 'Голдин' }, types: ['Water'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/118.png', generation: 1 },
  { id: 119, name: { en: 'Seaking', ru: 'Сикинг' }, types: ['Water'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/119.png', generation: 1 },
  { id: 120, name: { en: 'Staryu', ru: 'Старью' }, types: ['Water'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/120.png', generation: 1 },
  { id: 121, name: { en: 'Starmie', ru: 'Старми' }, types: ['Water', 'Psychic'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/121.png', generation: 1 },
  { id: 122, name: { en: 'Mr. Mime', ru: 'Мистер Майм' }, types: ['Psychic', 'Fairy'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/122.png', generation: 1 },
  { id: 123, name: { en: 'Scyther', ru: 'Сайтер' }, types: ['Bug', 'Flying'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/123.png', generation: 1 },
  { id: 124, name: { en: 'Jynx', ru: 'Джинкс' }, types: ['Ice', 'Psychic'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/124.png', generation: 1 },
  { id: 125, name: { en: 'Electabuzz', ru: 'Электабазз' }, types: ['Electric'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/125.png', generation: 1 },
  { id: 126, name: { en: 'Magmar', ru: 'Магмар' }, types: ['Fire'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/126.png', generation: 1 },
  { id: 127, name: { en: 'Pinsir', ru: 'Пинсир' }, types: ['Bug'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/127.png', generation: 1 },
  { id: 128, name: { en: 'Tauros', ru: 'Таурос' }, types: ['Normal'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/128.png', generation: 1 },
  { id: 129, name: { en: 'Magikarp', ru: 'Мэджикарп' }, types: ['Water'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/129.png', generation: 1 },
  { id: 130, name: { en: 'Gyarados', ru: 'Гиарадос' }, types: ['Water', 'Flying'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/130.png', generation: 1 },
  { id: 131, name: { en: 'Lapras', ru: 'Лапрас' }, types: ['Water', 'Ice'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/131.png', generation: 1 },
  { id: 132, name: { en: 'Ditto', ru: 'Дитто' }, types: ['Normal'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png', generation: 1 },
  { id: 133, name: { en: 'Eevee', ru: 'Иви' }, types: ['Normal'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/133.png', generation: 1 },
  { id: 134, name: { en: 'Vaporeon', ru: 'Вапореон' }, types: ['Water'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/134.png', generation: 1 },
  { id: 135, name: { en: 'Jolteon', ru: 'Джолтеон' }, types: ['Electric'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/135.png', generation: 1 },
  { id: 136, name: { en: 'Flareon', ru: 'Флареон' }, types: ['Fire'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/136.png', generation: 1 },
  { id: 137, name: { en: 'Porygon', ru: 'Поригон' }, types: ['Normal'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/137.png', generation: 1 },
  { id: 138, name: { en: 'Omanyte', ru: 'Оманайт' }, types: ['Rock', 'Water'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/138.png', generation: 1 },
  { id: 139, name: { en: 'Omastar', ru: 'Омастар' }, types: ['Rock', 'Water'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/139.png', generation: 1 },
  { id: 140, name: { en: 'Kabuto', ru: 'Кабуто' }, types: ['Rock', 'Water'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/140.png', generation: 1 },
  { id: 141, name: { en: 'Kabutops', ru: 'Кабутопс' }, types: ['Rock', 'Water'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/141.png', generation: 1 },
  { id: 142, name: { en: 'Aerodactyl', ru: 'Аэродактиль' }, types: ['Rock', 'Flying'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/142.png', generation: 1 },
  { id: 143, name: { en: 'Snorlax', ru: 'Снорлакс' }, types: ['Normal'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/143.png', generation: 1 },
  { id: 144, name: { en: 'Articuno', ru: 'Артикуно' }, types: ['Ice', 'Flying'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/144.png', generation: 1 },
  { id: 145, name: { en: 'Zapdos', ru: 'Запдос' }, types: ['Electric', 'Flying'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/145.png', generation: 1 },
  { id: 146, name: { en: 'Moltres', ru: 'Молтрес' }, types: ['Fire', 'Flying'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/146.png', generation: 1 },
  { id: 147, name: { en: 'Dratini', ru: 'Дратини' }, types: ['Dragon'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/147.png', generation: 1 },
  { id: 148, name: { en: 'Dragonair', ru: 'Драгонэйр' }, types: ['Dragon'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/148.png', generation: 1 },
  { id: 149, name: { en: 'Dragonite', ru: 'Драгонайт' }, types: ['Dragon', 'Flying'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/149.png', generation: 1 },
  { id: 150, name: { en: 'Mewtwo', ru: 'Мьюту' }, types: ['Psychic'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/150.png', generation: 1 },
  { id: 151, name: { en: 'Mew', ru: 'Мью' }, types: ['Psychic'], image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/151.png', generation: 1 }
];

export const findPokemonByQuery = (query: string): Pokemon[] => {
  if (!query || query.length < 1) return [];
  
  const lowerQuery = query.toLowerCase().trim();
  
  return POKEMON_DATABASE.filter(pokemon => {
    // Поиск по английскому имени
    if (pokemon.name.en.toLowerCase().startsWith(lowerQuery)) return true;
    if (pokemon.name.en.toLowerCase().includes(lowerQuery)) return true;
    
    // Поиск по русскому имени
    if (pokemon.name.ru.toLowerCase().startsWith(lowerQuery)) return true;
    if (pokemon.name.ru.toLowerCase().includes(lowerQuery)) return true;
    
    // Поиск по ID (если ввели число)
    if (!isNaN(Number(query)) && pokemon.id === Number(query)) return true;
    
    return false;
  }).slice(0, 10); // Ограничиваем до 10 результатов
};
  
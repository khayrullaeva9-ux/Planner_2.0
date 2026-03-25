# ✈️ Travel Planner

Персональный планировщик путешествий с поддержкой нескольких пользователей, ролей и share-ссылок.

## Стек

- React 18 + Vite
- Хранение: `localStorage` (данные не покидают браузер)
- Без бэкенда, без зависимостей кроме React

## Быстрый старт

```bash
npm install
npm run dev
```

Открыть: http://localhost:5173

## Сборка

```bash
npm run build     # → dist/
npm run preview   # preview production build
```

## Деплой на GitHub Pages

1. В `vite.config.js` укажи `base: '/имя-репозитория/'`
2. Установи пакет:
   ```bash
   npm install --save-dev gh-pages
   ```
3. Добавь в `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
4. Запусти:
   ```bash
   npm run deploy
   ```

## Структура проекта

```
travel-planner/
├── src/
│   ├── main.jsx       — точка входа React
│   └── App.jsx        — всё приложение (1 файл)
├── index.html
├── vite.config.js
└── package.json
```

## Возможности

- 📍 **Места** — карточки с категориями, фильтрами, Google Maps + Amap
- 📖 **Дневник** — заметки по дням, воспоминания (фото/ссылки)
- 🧳 **Вещи** — чеклист с ответственными и фильтром
- 👥 **Пользователи** — выбор профиля при входе
- 🔐 **Роли** — owner / editor / viewer
- 🔗 **Share-ссылки** — read-only доступ по URL (только Места и Дневник)
- 🇨🇳🇯🇵🇬🇪 **Шаблоны** — Пекин, Япония, Грузия

## Хранение данных

Все данные хранятся в `localStorage` браузера под ключами `tp_*`.  
Данные привязаны к устройству и браузеру — бэкенд не нужен.

---

*Сделано с ❤️ для путешествий*

# ASU Combined App

Объединённое приложение с диаграммой Ганта и таблицей отчётов.

## Структура проекта

```
combined-app/
├── backend/           # Flask API сервер
│   ├── main.py        # Основной сервер с API
│   ├── models.py      # SQLAlchemy модели
│   ├── database.py    # Настройки базы данных
│   └── requirements.txt
│
└── frontend/          # Vue 3 приложение
    ├── src/
    │   ├── App.vue           # Главный компонент с навигацией
    │   ├── api.js            # API клиент
    │   ├── i18n.js           # Локализация
    │   ├── main.js           # Точка входа
    │   ├── views/
    │   │   ├── GanttView.vue     # Страница диаграммы Ганта
    │   │   └── ReportsView.vue   # Страница отчётов
    │   ├── components/
    │   │   ├── GanttChart.vue    # (копировать из My_Gantt_2)
    │   │   ├── TaskModal.vue     # (копировать из My_Gantt_2)
    │   │   ├── ConnectionModal.vue # (копировать из My_Gantt_2)
    │   │   └── AgGridDemo.vue    # (копировать из vue-tables)
    │   ├── locales/           # (копировать из My_Gantt_2)
    │   └── styles/            # (копировать из My_Gantt_2)
    └── public/
        └── data.json          # (копировать из vue-tables)
```

## Установка

### 1. Копирование файлов компонентов

Скопируйте вручную следующие файлы:

**Из My_Gantt_2/frontend/src/components/ в combined-app/frontend/src/components/:**
- GanttChart.vue
- TaskModal.vue
- ConnectionModal.vue

**Из vue-tables/src/components/ в combined-app/frontend/src/components/:**
- AgGridDemo.vue

**Из My_Gantt_2/frontend/src/locales/ в combined-app/frontend/src/locales/:**
- ru.json
- en.json
- ar.json

**Из My_Gantt_2/frontend/src/styles/ в combined-app/frontend/src/styles/:**
- main.css

**Из vue-tables/public/ в combined-app/frontend/public/:**
- data.json

### 2. Установка зависимостей backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

### 3. Установка зависимостей frontend

```bash
cd frontend
npm install
```

## Запуск

### Запуск backend (терминал 1)
```bash
cd backend
venv\Scripts\activate
python main.py
```
Сервер запустится на http://localhost:8000

### Запуск frontend (терминал 2)
```bash
cd frontend
npm run dev
```
Приложение будет доступно на http://localhost:3000

## API

### Диаграмма Ганта
- `GET /api/tasks` — получить все задачи
- `POST /api/tasks` — создать задачу
- `PUT /api/tasks/:id` — обновить задачу
- `DELETE /api/tasks/:id` — удалить задачу
- `POST /api/tasks/seed` — загрузить демо-данные

### Соединения
- `GET /api/connections` — получить все соединения
- `POST /api/connections` — создать соединение
- `PUT /api/connections/:id` — обновить соединение
- `DELETE /api/connections/:id` — удалить соединение

### Отчёты
- `GET /api/reports` — получить все записи
- `POST /api/reports` — создать запись
- `PUT /api/reports/:id` — обновить запись
- `DELETE /api/reports/:id` — удалить запись
- `POST /api/reports/reset` — сбросить данные

## База данных

Используется SQLite. Файл `app.db` создаётся автоматически при первом запуске backend.

### Інструкція по користуванню сервером для демонстрації його можливостей

#### Опис проекту

Цей проект являє собою веб-сервер, що відображає каталог автомобілів, розділений по категоріях. Застосунок складається з трьох основних частин:
1. **Відображення каталогу автомобілів**: головна сторінка, сторінка категорії, сторінка автомобіля.
2. **CLI команда для імпорту** автомобілів і категорій з JSON файлу.
3. **Адмін панель** для керування автомобілями (логін і редагування).

#### Стек технологій
- Node.js 18+
- Express.js
- MongoDB/Mongoose
- Mustache (шаблонізація)
- Docker для контейнеризації

---

### Частина 1: Веб-сервер для відображення каталогу автомобілів

#### Налаштування середовища

1. **Клонуйте репозиторій** і перейдіть в каталог проекту:
   ```bash
   git clone <url_of_repository>
   cd catalog
   ```

2. **Створіть файл конфігурацій `.env`** і додайте MongoDB URI:
   ```
   MONGO_URI=mongodb://mongo:27017/car-catalog
   ```

3. **Встановіть залежності**:
   ```bash
   npm install
   ```

#### Запуск проекту

1. **Локальний запуск**:
   ```bash
   npm start
   ```

2. **Запуск через Docker**:
   - Збірка Docker образу:
     ```bash
     npm run docker:build
     ```
   - Запуск контейнера:
     ```bash
     npm run docker:run
     ```

3. **Запуск через Docker Compose**:
   - Запуск з автоматичним збиранням образів:
     ```bash
     npm run docker-compose:up
     ```

Проект буде доступний за адресою [http://localhost:3000](http://localhost:3000).

#### Структура сторінок

- Головна сторінка: відображає всі автомобілі, розбиті по категоріях.
- Сторінка категорії: назва, опис, фотографія, хлібні крихти та посилання на автомобілі в категорії.
- Сторінка автомобіля: назва, ціна, колір, фотографія, опис і хлібні крихти.

##### Приклад URL-ів:
- `/` – головна сторінка
- `/category-1` – сторінка категорії
- `/category-1/:carsId` – сторінка автомобіляцієї категорії
- `/category-1/car-1` – сторінка автомобіля
- `/admin/login` – сторінка логіну адміна
- `/admin/cars` – сторінка оновлення даних карток
- `/admin/car` – сторінка створення нової картки автомобіля

#### Логування адміна для тестів (шляхи доступні тільки залогованому адміну)
`Username: admin`
`Password: password`

#### Наповнення бази даних тестовими даними

Запустіть міграції для додавання категорій та автомобілів у базу даних:
```bash
npm run import
```

### Частина 2: CLI команда для імпорту даних

Цей застосунок включає CLI команду для імпорту автомобілів і категорій з JSON файлу.

#### Приклад формату JSON файлу
```json
{
  "categories": [
    {
      "name": "Category 1",
      "description": "Description for Category 1",
      "cars": [
        {
          "name": "Car 1",
          "price": 10000,
          "color": "Red",
          "description": "Description for Car 1"
        }
      ]
    }
  ]
}
```

#### Команда для запуску імпорту

```bash
npm run import -- --file=path/to/file.json
```
або використовуй файл в кореневій папці
```bash
npm run import -- import data.json
```

### Частина 3: Адмін панель

Адмін панель складається з:
1. **Сторінки логіну** для доступу до панелі адміністратора.
2. **Сторінки зі списком автомобілів** для редагування назви, опису, ціни, кольору та категорії.

---

### Тестування

Запустіть тести для перевірки функціоналу:
```bash
npm test
```

---

#### Поповнення бази даних тестовими даними

Щоб вручну наповнити базу даних категоріями та автомобілями, запустіть скрипт міграції:

```bash
npm run seed
```

---

### Dockerfile

Проект має Dockerfile для контейнеризації:

```Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "src/app.js"]
```

### Docker Compose

Docker Compose файл для запуску MongoDB і Node.js сервера:

```yaml
version: '3'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      MONGO_URI: "mongodb://mongo:27017/car-catalog"
    depends_on:
      - mongo
  mongo:
    image: mongo:latest
    ports:
      - "27017:27017"
```

---

### Скрипти

- `npm start` – запуск веб-сервера
- `npm run import` – імпорт автомобілів і категорій
- `npm run docker:build` – збірка Docker образу
- `npm run docker:run` – запуск Docker контейнера
- `npm run docker-compose:up` – запуск через Docker Compose
- `npm test` – запуск тестів
- `npm run seed` – запус міграцій

### Автор
### `Backend developer: Alla kaplia`
Portfolio: [GitHub](https://github.com/AllaKaplia)

Contact in: [Telegram](https://t.me/AllaKaplia)

Profile in: [LinkedIn](https://www.linkedin.com/in/alla-kaplia/)

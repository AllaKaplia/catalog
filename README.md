### Server Usage Guide for Demonstration

#### Project Overview

This project is a web server that displays a catalog of cars, divided into categories. The application consists of three main parts:
1. **Car Catalog Display**: Home page, category page, and car detail page.
2. **CLI Command for Importing** cars and categories from a JSON file.
3. **Admin Panel** for managing cars (login and edit functionality).

#### Technology Stack
- Node.js 18+
- Express.js
- MongoDB/Mongoose
- Mustache (templating engine)
- Docker for containerization

---

### Part 1: Web Server for Car Catalog Display

#### Environment Setup

1. **Clone the repository** and navigate to the project directory:
   ```bash
   git clone <url_of_repository>
   cd catalog
   ```

2. **Create a `.env` configuration file** and add the MongoDB URI:
   ```
   MONGO_URI=mongodb://mongo:27017/car-catalog
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

#### Running the Project

1. **Local run**:
   ```bash
   npm start
   ```

2. **Run via Docker**:
   - Build the Docker image:
     ```bash
     npm run docker:build
     ```
   - Run the container:
     ```bash
     npm run docker:run
     ```

3. **Run via Docker Compose**:
   - Start with automatic image building:
     ```bash
     npm run docker-compose:up
     ```

The project will be available at [http://localhost:3000](http://localhost:3000).

#### Page Structure

- Home Page: Displays all cars, grouped by categories.
- Category Page: Shows the category name, description, photo, breadcrumbs, and links to cars in the category.
- Car Page: Shows the car's name, price, color, photo, description, and breadcrumbs.

##### URL Examples:
- `/` – Home page
- `/category-1` – Category page
- `/category-1/:carId` – Car detail page
- `/category-1/car-1` – Specific car page
- `/admin/login` – Admin login page
- `/admin/cars` – Admin car management page
- `/admin/car` – Create a new car page

#### Admin Login for Testing (restricted paths for logged-in admin only)
`Username: admin`  
`Password: password`

#### Populating the Database with Test Data

Run migrations to add test categories and cars to the database:
```bash
npm run import
```

### Part 2: CLI Command for Data Import

This application includes a CLI command to import cars and categories from a JSON file.

#### Example JSON File Format
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

#### Command to Run Import

```bash
npm run import -- --file=path/to/file.json
```

### Part 3: Admin Panel

The Admin Panel consists of:
1. **Login Page** to access the admin panel.
2. **Car List Page** to edit the name, description, price, color, and category of cars.

---

### Testing

Run tests to verify functionality:
```bash
npm test
```

---

#### Populating the Database with Test Data

To manually populate the database with categories and cars, run the migration script:

```bash
npm run seed
```

---

### Dockerfile

The project includes a Dockerfile for containerization:

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

Docker Compose configuration to run MongoDB and the Node.js server:

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

### Scripts

- `npm start` – Start the web server
- `npm run import` – Import cars and categories
- `npm run docker:build` – Build Docker image
- `npm run docker:run` – Run Docker container
- `npm run docker-compose:up` – Start via Docker Compose
- `npm test` – Run tests
- `npm run seed` – Run migrations

### Author
### `Backend developer: Alla kaplia`
Portfolio: [GitHub](https://github.com/AllaKaplia)

Contact in: [Telegram](https://t.me/AllaKaplia)

Profile in: [LinkedIn](https://www.linkedin.com/in/alla-kaplia/)

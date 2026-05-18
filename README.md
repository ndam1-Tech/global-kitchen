# The Global Kitchen API

## Tech Stack
- **Runtime:** Node.js v20
- **Framework:** Express.js
- **Database:** MongoDB (Local) with Mongoose
- **Configuration:** dotenv

## Features
- Create, read, update, and delete recipes
- Filter recipes by category
- Schema validation with required fields, data types, and constraints
- Indexed category field for fast lookups
- Global error handling with proper HTTP status codes
- Async/await for non-blocking database operations
- Layered architecture (Routes, Controllers, Services, Models)

## Installation & Setup

1. Clone the repository:
   git clone [your-repo-url]

2. Install dependencies:
   npm install

3. Create a .env file in the root directory and add:
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/globalkitchen

4. Start the server:
   node app.js

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /recipes | Get all recipes (filter by ?category=) |
| POST | /recipes | Create a new recipe |
| PATCH | /recipes/:id | Update a recipe by ID |
| DELETE | /recipes/:id | Delete a recipe by ID |
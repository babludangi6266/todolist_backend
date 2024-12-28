# To-Do List Backend

This is the backend implementation of a simple To-Do List web application. It is built using Node.js and Express.js with MongoDB as the database.

## Features
- RESTful API for managing to-do items.
- CRUD operations: Create, Read, Update, Delete.
- Basic validation for input data using `express-validator`.
- JWT-based authentication for securing API endpoints.
- Error handling for all API routes.

## Requirements
- Node.js
- MongoDB

## Installation
1. Clone the repository:
   ```bash
   git clone [https://github.com/babludangi6266/todolist_backend.git]
   cd todo-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:
   ```bash
   npm run dev
   ```
   The server will run on `http://localhost:5000`.

## API Endpoints

### Authentication
1. **Register**
   - `POST /api/auth/register`
   - Request Body:
     ```json
     {
       "email": "bablu123@gmail.com",
       "password": "12345"
     }
     ```

2. **Login**
   - `POST /api/auth/login`
   - Request Body:
     ```json
     {
       "email": "bablu123@gmail.com",
       "password": "12345"
     }
     ```

### To-Do Items
1. **Get All To-Do Items**
   - `GET /api/todos`
   - Headers: `Authorization: Bearer <your-token>`

2. **Add a New To-Do Item**
   - `POST /api/todos`
   - Headers: `Authorization: Bearer <your-token>`
   - Request Body:
     ```json
     {
       "name": "To-Do Item Name",
       "description": "Description of the to-do item",
       "completed": false
     }
     ```

3. **Update an Existing To-Do Item**
   - `PUT /api/todos/:id`
   - Headers: `Authorization: Bearer <your-token>`
   - Request Body:
     ```json
     {
       "name": "Updated To-Do Item Name",
       "description": "Updated description",
       "completed": true
     }
     ```

4. **Delete a To-Do Item**
   - `DELETE /api/todos/:id`
   - Headers: `Authorization: Bearer <your-token>`

## Folder Structure
```
.
|-- controllers/       # Handles business logic for routes
|-- models/            # Mongoose schemas
|-- routes/            # API route definitions
|-- middleware/        # Middleware (e.g., authentication)            
|-- .env               # Example environment variables file
|-- index.js          # Entry point for the application

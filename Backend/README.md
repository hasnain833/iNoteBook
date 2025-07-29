# iNotebook Backend

A RESTful API backend for the iNotebook application built with Node.js, Express, and MongoDB.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Make sure MongoDB is running on your local machine at `mongodb://localhost:27017`

3. Start the server:
```bash
npm start
```

For development with auto-restart:
```bash
npm run dev
```

The server will start on `http://localhost:5000`

## API Endpoints

### Authentication

- `POST /api/auth/createuser` - Create a new user
  - Body: `{ "name": "string", "email": "string", "password": "string" }`
  - Headers: `auth-token` (returned in response)

- `POST /api/auth/login` - Login user
  - Body: `{ "email": "string", "password": "string" }`
  - Returns: `{ "message": "Login successful", "token": "jwt_token" }`

- `GET /api/auth/getuser` - Get user details
  - Headers: `auth-token: jwt_token`

### Notes

- `GET /api/notes/fetchallnotes` - Get all notes for authenticated user
  - Headers: `auth-token: jwt_token`

- `POST /api/notes/addnote` - Add a new note
  - Headers: `auth-token: jwt_token`
  - Body: `{ "title": "string", "description": "string", "tag": "string" }`

- `PUT /api/notes/updatenote/:id` - Update a note
  - Headers: `auth-token: jwt_token`
  - Body: `{ "title": "string", "description": "string", "tag": "string" }`

- `DELETE /api/notes/deletenote/:id` - Delete a note
  - Headers: `auth-token: jwt_token`

## Features

- User authentication with JWT tokens
- Password hashing with bcrypt
- Input validation with express-validator
- CORS support for cross-origin requests
- MongoDB integration with Mongoose
- Error handling and logging
- RESTful API design

## Dependencies

- express: Web framework
- mongoose: MongoDB ODM
- bcryptjs: Password hashing
- jsonwebtoken: JWT authentication
- express-validator: Input validation
- nodemon: Development server (dev dependency) 
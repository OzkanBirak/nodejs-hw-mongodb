# Node.js HW MongoDB 1

A simple Node.js project demonstrating CRUD operations with MongoDB.

## Features

- RESTful API for managing resources
- MongoDB integration using Mongoose
- Basic CRUD operations
- Error handling and validation

## Prerequisites

- [Node.js](https://nodejs.org/) (v14+)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)

## Installation

```bash
git clone https://github.com/your-username/nodejs-hw-mongodb-1.git
cd nodejs-hw-mongodb-1
npm install
```

## Configuration

Create a `.env` file in the root directory:

```
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

## Running the App

```bash
npm start
```

The server will run on `http://localhost:3000`.

## API Endpoints

| Method | Endpoint       | Description        |
|--------|----------------|--------------------|
| GET    | /api/items     | Get all items      |
| POST   | /api/items     | Create new item    |
| GET    | /api/items/:id | Get item by ID     |
| PUT    | /api/items/:id | Update item        |
| DELETE | /api/items/:id | Delete item        |

## License

MIT

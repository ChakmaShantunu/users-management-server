# Express REST API Practice

A simple REST API built with **Node.js** and **Express.js** for practicing HTTP methods such as **GET** and **POST**. The project uses mock data stored in arrays and enables communication with frontend applications using **CORS**.

## 🚀 Features

- Express.js server setup
- CORS enabled
- JSON request body parsing
- GET and POST APIs
- Mock data storage using arrays
- Automatic ID generation for new data

## 📦 Technologies Used

- Node.js
- Express.js
- CORS

## 📁 Project Structure

```
.
├── node_modules/
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
```

## ⚙️ Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Navigate to the project folder

```bash
cd <project-folder>
```

3. Install dependencies

```bash
npm install
```

4. Start the server

```bash
node index.js
```

The server will run on:

```
http://localhost:3000
```

## 📌 API Endpoints

### Home

| Method | Endpoint | Description               |
| ------ | -------- | ------------------------- |
| GET    | `/`      | Returns a welcome message |

### Users

| Method | Endpoint | Description    |
| ------ | -------- | -------------- |
| GET    | `/users` | Get all users  |
| POST   | `/users` | Add a new user |

### Restaurants

| Method | Endpoint       | Description          |
| ------ | -------------- | -------------------- |
| GET    | `/restaurants` | Get all restaurants  |
| POST   | `/restaurants` | Add a new restaurant |

### Animals

| Method | Endpoint   | Description      |
| ------ | ---------- | ---------------- |
| GET    | `/animals` | Get all animals  |
| POST   | `/animals` | Add a new animal |

## 📤 Sample POST Request

### POST `/animals`

```json
{
  "name": "Tiger",
  "species": "Bengal Tiger",
  "age": 5
}
```

### Response

```json
{
  "id": 5,
  "name": "Tiger",
  "species": "Bengal Tiger",
  "age": 5
}
```

## 📚 Learning Objectives

- Understand Express.js routing
- Practice GET and POST requests
- Learn middleware (`express.json()` and `cors()`)
- Handle request body data
- Create REST APIs using mock data

## 👨‍💻 Author

**Shantunu Chakma**

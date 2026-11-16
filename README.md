# 📝 Blog API – Node.js & MongoDB

A RESTful Blog API built using **Node.js, Express.js, and MongoDB**. This backend application provides user authentication, JWT-based authorization, user profile management, and complete CRUD operations for blog posts.

## 🚀 Features

### Authentication
- User Registration
- User Login
- Password hashing using bcryptjs
- JWT-based authentication
- Protected routes

### User Management
- Get authenticated user's profile
- Role-based user information

### Blog Management
- Create a new blog post
- Get all blog posts
- Get a single blog post by ID
- Update an existing blog post
- Delete a blog post
- Associate posts with their authors
- Only the post owner can update or delete their posts

### Additional Features
- MongoDB database integration using Mongoose
- Environment variables using dotenv
- CORS support
- HTTP request logging using Morgan
- JSON request handling

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | JavaScript Runtime |
| Express.js | Backend Framework |
| MongoDB | NoSQL Database |
| Mongoose | MongoDB ODM |
| bcryptjs | Password Hashing |
| JSON Web Token | Authentication |
| dotenv | Environment Variables |
| cors | Cross-Origin Resource Sharing |
| Morgan | HTTP Request Logging |
| Nodemon | Development Server |

## 📁 Project Structure

```text
blog-api/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── userController.js
│   │   └── postController.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Post.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   └── postRoutes.js
│   │
│   └── app.js
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/pradum6391-wq/Blog-api.git
```

### 2. Navigate to the Project

```bash
cd blog-api
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/blog_api
JWT_SECRET=your_strong_secret_key
NODE_ENV=development
```
### 5. Start MongoDB

Make sure MongoDB Community Server is installed and running.

### 6. Run the Application

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

The server will run at:

```text
http://localhost:5000
```

## 🔗 API Endpoints

Base URL: `http://localhost:5000`

### Authentication Routes

| Method | Endpoint | Description | Authentication |
|---|---|---|---|
| POST | `/api/auth/register` | Register a user | No |
| POST | `/api/auth/login` | Login a user | No |

### User Routes

| Method | Endpoint | Description | Authentication |
|---|---|---|---|
| GET | `/api/users/profile` | Get user profile | Yes |

### Blog Post Routes

| Method | Endpoint | Description | Authentication |
|---|---|---|---|
| GET | `/api/posts` | Get all posts | No |
| GET | `/api/posts/:id` | Get single post | No |
| POST | `/api/posts` | Create a post | Yes |
| PUT | `/api/posts/:id` | Update a post | Yes |
| DELETE | `/api/posts/:id` | Delete a post | Yes |

### Health Check

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | Check server status |

## 📌 API Request Examples

### 1. Register User

**POST** `/api/auth/register`

```json
{
  "name": "Pradum",
  "email": "pradum@example.com",
  "password": "Pradum123"
}
```

### 2. Login User

**POST** `/api/auth/login`

```json
{
  "email": "pradum@example.com",
  "password": "Pradum123"
}
```

The login response provides a JWT token.

### 3. Access Protected Routes

Add the following header to authenticated requests:

```text
Authorization: Bearer YOUR_JWT_TOKEN
```

### 4. Create Blog Post

**POST** `/api/posts`

```json
{
  "title": "My First Blog Post",
  "content": "This is my first blog post using Node.js and MongoDB.",
  "category": "Technology",
  "tags": ["Node.js", "MongoDB", "Backend"]
}
```

### 5. Update Blog Post

**PUT** `/api/posts/:id`

```json
{
  "title": "My Updated Blog Post",
  "content": "This blog post has been updated.",
  "category": "Web Development",
  "tags": ["Node.js", "Express", "MongoDB"]
}
```

### 6. Delete Blog Post

**DELETE** `/api/posts/:id`

Provide the post ID in the URL and a valid JWT token in the Authorization header.

## 🧪 Testing

The API endpoints were tested locally using **Windows PowerShell and Invoke-RestMethod**.

Tested functionality:

- User registration
- User login
- JWT token generation
- Protected profile access
- Unauthorized access rejection
- Create blog post
- Retrieve all blog posts
- Retrieve a single blog post
- Update blog post
- Delete blog post
- Verify deleted post returns a not-found response

## 🔐 Security

- Passwords are hashed using bcryptjs before storing them.
- JWT tokens are used to protect authenticated routes.
- Protected endpoints require a valid Bearer token.
- Post ownership is checked before update and delete operations.
- Environment variables are stored separately in `.env`.

## 🎯 Project Objective

The objective of this project is to understand backend development using Node.js and Express.js, REST API architecture, MongoDB database integration, user authentication, JWT authorization, and CRUD operations.

## 👨‍💻 Author

**Pradum Maurya**

GitHub: https://github.com/pradum6391-wq

LinkedIn: https://linkedin.com/in/pradum-maurya-902a0b379

---

⭐ If you find this project useful, feel free to explore the repository.

1. Introduction
The Task Manager API is a simple RESTful API built using Node.js and Express. It allows users to manage a collection of tasks with basic CRUD (Create, Read, Update, Delete)
 operations. Additionally, the API supports JWT-based authentication and authorization, and it includes sorting and filtering options for task retrieval. The project is designed
 to be easy to set up and run locally.

2. Packages Used
1. express:
Purpose: A web application framework for Node.js, used to build the API's endpoints and handle HTTP requests and responses.
Installation: npm install express
2. jsonwebtoken:
Purpose: A library to work with JSON Web Tokens (JWT), used for authentication and authorization.
Installation: npm install jsonwebtoken
3. body-parser:
Purpose: Middleware to parse incoming request bodies, making it accessible under req.body.
Installation: npm install body-parse
4 dotenv:
Purpose: A module to load environment variables from a .env file into process.env. This is used to manage configuration settings like the JWT secret.
Installation: npm install dotenv


The Task Manager API is a RESTful service built with Node.js and Express, designed for managing tasks. It includes endpoints for user authentication (POST /api/login to
generate JWT tokens), retrieving all tasks (GET /api/tasks ), retrieving a specific task by ID (GET /api/tasks/:id), creating a new task
(POST /api/tasks), updating an existing task (PUT /api/tasks/:id), and deleting a task (DELETE /api/tasks/:id). The API uses JWT for securing endpoints, ensuring that only authenticated 
users can perform operations, and handles task data stored in memory. Each endpoint validates inputs and provides appropriate HTTP status codes and messages.

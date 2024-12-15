# 🔐 Login Authentication Project

This project is a Node.js application that implements user authentication using Express, MongoDB, and JSON Web Tokens.

## 📁 Project Structure

```
LoginAuthAuth/
│
├── v1/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── .env
├── env-example.txt
├── package.json
├── package-lock.json
└── README.md
```

## 📋 Prerequisites

- Node.js
- MongoDB

## 🚀 Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd LoginAuthAuth
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your environment variables. Use the `env-example.txt` file as a template:
   ```
   URI="your_mongodb_connection_string"
   PORT=5005
   SECRET_ACCESS_TOKEN="your_secret_access_token"
   ```

## 🏃‍♂️ Running the Application

To run the application in development mode:

```
npm run dev
```

This will start the server using nodemon, which will automatically restart the server when file changes are detected.

## 🛣️ API Endpoints

(Add your API endpoints and their descriptions here)

## 🛠️ Technologies Used

- **Express.js**: Web application framework
- **Mongoose**: MongoDB object modeling tool
- **bcrypt**: Password hashing
- **jsonwebtoken**: JWT implementation
- **dotenv**: Environment variable management

## 👨‍💻 Author

Mikael Engvall

## 📄 License

This project is licensed under the ISC License.

# ⚡ Pokédex Explorer

> **A Full Stack MERN Pokémon Management Application** built using **React, Express.js, MongoDB Atlas, and Mongoose**. Search, filter, explore, and create your own Pokémon in a modern responsive interface.

---

## 📖 Overview

Pokédex Explorer is a modern Pokémon management application that allows users to browse an interactive Pokédex while also creating and storing their own custom Pokémon in a cloud MongoDB database.

Unlike a static Pokédex, this application combines **preloaded Pokémon cards** with **user-created Pokémon**, making the collection dynamic and continuously expandable.

The project demonstrates complete frontend-backend communication using REST APIs and MongoDB Atlas.

---

# 🚀 Features

### 🎨 Frontend

- Beautiful responsive UI
- Pokémon Collection
- Search Pokémon by name
- Filter Pokémon by Type
- Hero Section
- Navbar
- Footer
- Add Pokémon Form
- Live Collection Counter

---

### ⚙ Backend

- Express REST API
- MongoDB Atlas Database
- Mongoose ODM
- Environment Variables
- CORS Enabled
- JSON Request Handling
- Modular Folder Structure

---

### 📦 Database Features

- Store custom Pokémon
- Retrieve all Pokémon
- Automatic timestamps
- Schema validation
- Default rarity values

---

## 📸 Application Preview

```
🏠 Home

───────────────────────────

🔥 Hero Section

🔍 Search Pokémon

🎯 Filter by Type

🃏 Pokémon Collection

➕

Create Your Pokémon

───────────────────────────

Footer
```

---

# 🛠 Tech Stack

## Frontend

- React
- Vite
- CSS3
- JavaScript (ES6+)

---

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Dotenv
- CORS
- Nodemon

---

## Database

MongoDB Atlas Cloud Database

---

# 📂 Project Structure

```
Pokedex-Explorer
│
├── client
│   ├── components
│   ├── data
│   ├── App.jsx
│   ├── main.jsx
│   └── App.css
│
├── server
│   ├── config
│   │     db.js
│   │
│   ├── controllers
│   │     pokemonController.js
│   │
│   ├── models
│   │     Pokemon.js
│   │
│   ├── routes
│   │     pokemonRoutes.js
│   │
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md
```

---

# ⚡ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/pokedex-explorer.git
```

---

## Frontend

```bash
cd client

npm install

npm run dev
```

Runs at

```
http://localhost:5173
```

---

## Backend

```bash
cd server

npm install

npm run dev
```

Runs at

```
http://localhost:5000
```

---

# 🔑 Environment Variables

Create a **.env** file inside the server folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string
```

Example

```env
PORT=5000

MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/?appName=Cluster0
```

---

# 📡 REST API

## Get All Pokémon

```http
GET /api/pokemon
```

Response

```json
{
    "success": true,
    "data": [
        {
            "name":"Pikachu",
            "type":"Electric"
        }
    ]
}
```

---

## Create Pokémon

```http
POST /api/pokemon
```

Request

```json
{
  "name":"Dragonite",
  "type":"Dragon",
  "hp":95,
  "attack":134,
  "defense":95,
  "speed":80,
  "ability":"Inner Focus",
  "rarity":"Legendary",
  "image":"image-url"
}
```

Response

```json
{
    "success": true,
    "data": {}
}
```

---

# 🗃 Database Schema

```javascript
Pokemon
│
├── name
├── type
├── hp
├── attack
├── defense
├── specialAttack
├── speed
├── ability
├── weakness
├── strongAgainst
├── evolution
├── level
├── region
├── height
├── weight
├── rarity
├── image
├── createdAt
└── updatedAt
```

---

# 🔄 Application Workflow

```text
User

↓

React Form

↓

Fetch API

↓

Express Route

↓

Controller

↓

MongoDB Atlas

↓

Database

↓

JSON Response

↓

React State Update

↓

Pokédex UI Refresh
```

---

# 💻 Core Functionalities

### Search Pokémon

- Instant search by Pokémon name

---

### Filter Pokémon

- Filter by Pokémon type

Examples

- Fire
- Water
- Grass
- Dragon
- Electric
- Psychic
- Flying

---

### Add Pokémon

Users can create their own Pokémon with:

- Name
- Type
- HP
- Attack
- Defense
- Special Attack
- Speed
- Ability
- Weakness
- Strong Against
- Evolution
- Level
- Region
- Height
- Weight
- Rarity
- Image URL

---

# 🎯 Learning Outcomes

This project demonstrates practical knowledge of

- React Hooks
- useState
- useEffect
- Component Architecture
- Props
- REST APIs
- Express Routing
- MVC Pattern
- MongoDB Atlas
- Mongoose Models
- CRUD Operations
- Fetch API
- Environment Variables
- Full Stack Development

---

# 🔮 Future Improvements

- ✨ Edit Pokémon
- 🗑 Delete Pokémon
- ❤️ Favorite Pokémon
- 🌙 Dark Mode
- 🔐 Authentication
- 👤 User Accounts
- 📷 Image Upload
- ☁ Cloudinary Integration
- Pagination
- Sorting
- Advanced Search
- Pokémon Statistics Dashboard
- Responsive Animations
- Toast Notifications
- Loading Skeletons
- Infinite Scroll

---

# 🤝 Contributing

Contributions are always welcome.

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# ⭐ If you like this project

Give this repository a ⭐ on GitHub and help support future open-source projects.

---

# 👨‍💻 Author

**Rohit Kumar**

🎓 M.Sc. Computer Science

💻 Full Stack Developer | AI & ML Enthusiast

GitHub:
https://github.com/222000rohitkumar

LinkedIn:
https://www.linkedin.com/in/rohit-kumar-70a949267

---

## 📝 License

This project is licensed under the MIT License.

Feel free to use, modify, and distribute it for educational and personal projects.

---

## 🚀 "Catch them all, build them yourself, and explore the world of Pokémon with the power of MERN!"

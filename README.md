# 🍔 Food Delivery App (Full Stack)

A full-stack Food Delivery Web Application built using **React (Frontend)**, **Spring Boot (Backend)**, and **MySQL (Database)**.

---

## 🚀 Features

* 🧾 View Food Menu (Burger, Pizza, Momos)
* 🛒 Add to Cart functionality
* ➕ Increase / ➖ Decrease item quantity
* 💰 Real-time total price calculation
* 📦 Place Order (stored in database)
* 🎨 Modern UI with images & animations
* 🔗 REST API integration (Frontend ↔ Backend)

---

## 🛠️ Tech Stack

### Frontend

* React.js
* HTML, CSS (inline styling)
* JavaScript (ES6)

### Backend

* Spring Boot
* REST APIs
* Maven

### Database

* MySQL

---

## 📂 Project Structure

```
food-delivery-app/
│
├── backend/        # Spring Boot backend
│   ├── controller/
│   ├── model/
│   ├── repository/
│
├── frontend/       # React frontend
│   ├── src/
│   ├── public/
│
└── README.md
```

---

## ⚙️ How to Run Locally

### 1️⃣ Clone the Repository

```
git clone https://github.com/Anushka-cell7/food-delivery-app.git
cd food-delivery-app
```

---

### 2️⃣ Run Backend (Spring Boot)

```
cd backend
.\mvnw.cmd spring-boot:run
```

👉 Runs on:
http://localhost:8080

---

### 3️⃣ Run Frontend (React)

Open new terminal:

```
cd frontend
npm install
npm start
```

👉 Runs on:
http://localhost:3000

---

## 🗄️ Database Setup (MySQL)

Create database:

```
CREATE DATABASE food_db;
```

Update `application.properties`:

```
spring.datasource.url=jdbc:mysql://localhost:3306/food_db
spring.datasource.username=root
spring.datasource.password=your_password
```

---

## 🎯 Future Improvements

* 🔐 User Login & Authentication
* 💳 Payment Integration
* 📱 Mobile Responsive Design
* 🧠 AI-based Food Recommendation
* 🌐 Deployment (Vercel + Render)

---

## 👩‍💻 Author

**Anushka Tiwari**
B.Tech (Electronics & Computer Science)
KIIT University

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!

---

<h1 align="center">
  📰 NewsNest
</h1>



<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
</p>

---

## 🧠 Overview

**NewsNest** is a sleek, fully responsive web application that fetches news from multiple reliable sources like **Dawn**, **Daily Times**, **The International News**, and **Tribune**. Users can browse latest headlines, and even **save personal notes**, edit or delete them. Light & dark modes included for better readability.

---

## ✨ Features

- 🌐 Real-time news headlines from various sources
- 📝 Note-taking: Save your thoughts about articles
- 🧽 Edit or delete notes anytime
- 💡 Light/Dark mode toggle
- 📱 Fully responsive on all screen sizes
- 🔒 LocalStorage-powered notes (no account required)
- 💻 Clean, modern UI using Tailwind CSS

---

<p align="center">
  <b>A full-stack News Aggregator App</b><br />
  Built with ❤️ using Next.js, Tailwind CSS, Express.js & MongoDB
</p>

## 🚀 Tech Stack

| Frontend      | Backend        | Database | Other     |
| ------------- | -------------- | -------- | --------- |
| ![Next.js](https://img.shields.io/badge/-Next.js-000?&logo=next.js) | ![Express.js](https://img.shields.io/badge/-Express.js-404D59?&logo=express) | ![MongoDB](https://img.shields.io/badge/-MongoDB-4EA94B?&logo=mongodb&logoColor=white) | ![Tailwind CSS](https://img.shields.io/badge/-Tailwind-06B6D4?&logo=tailwind-css) |
| ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?&logo=javascript&logoColor=black) | ![Node.js](https://img.shields.io/badge/-Node.js-339933?&logo=node.js) |  | ![localStorage](https://img.shields.io/badge/-localStorage-informational) |

---

## 🛠️ Setup Instructions

### 📦 Backend Setup

```bash
# Clone the repo
git clone https://github.com/amnaafzal/newsnest_backend.git
cd newsnest_backend

# Install dependencies
npm install

# Create a .env file
touch .env
# Add your MongoDB URI
MONGO_URI=mongodb://localhost:27017/newsnest

# Start the server
node server.js

# CA Monk – Blog Application Assignment

This project is built as part of the **CA Monk Frontend Interview Assignment**.  
The goal of the assignment is to demonstrate the ability to build a modern React application using **TypeScript**, **TanStack Query**, **Tailwind CSS**, and **shadcn/ui**, along with a mock backend powered by **JSON Server**.

The application follows the provided UI reference with a **left-side blog list** and a **right-side blog detail view**.

---

## 🚀 Tech Stack

- **React + TypeScript**
- **Vite**
- **TanStack Query** – server state management
- **Tailwind CSS** – utility-first styling
- **shadcn/ui** – reusable UI components
- **React Router DOM** – routing
- **JSON Server** – mock REST API

---

## ✨ Features

- 📄 View all blogs in a left-side list panel
- 🔍 View selected blog details on the right panel
- 🖼️ Display blog cover image, category, date, and content
- ➕ Create a new blog using a form
- ⚡ Data fetching and caching using TanStack Query
- ♻️ Automatic query invalidation after creating a blog
- 🎨 Clean and responsive UI using Tailwind CSS and shadcn/ui

---

## 📂 Project Structure
```
src/
├── api/ # API functions
│ └── blogs.ts
├── components/ # Layout and UI components
│ ├── BlogLayout.tsx
│ ├── BlogListPanel.tsx
│ └── BlogDetailPanel.tsx
├── pages/
│ └── CreateBlog.tsx
├── App.tsx
├── main.tsx
└── index.css
```

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- Git

---

### 1️⃣ Fork & Clone the Repository
```bash
git clone <your-forked-repo-url>
cd camonk-interview
```
2️⃣ Install Dependencies
```
npm install
```
3️⃣ Environment Variables

Create a .env file in the root directory:
```
VITE_BASE_URL=http://localhost:3001
```
🧪 Running the Application
Start JSON Server (Backend)
```
npm run server
```
Backend will run at:
```
http://localhost:3001
```
Start Frontend (Vite)
```
npm run dev
```
Frontend will run at:
```
http://localhost:5173
```
```
🔌 API Endpoints
Method	Endpoint	Description
GET	/blogs	Fetch all blogs
GET	/blogs/:id	Fetch blog by ID
POST	/blogs	Create a new blog
📝 Blog Object Structure

{
  "id": 1,
  "title": "Future of Fintech",
  "category": ["FINANCE", "TECH"],
  "description": "Exploring how AI and blockchain are reshaping financial services",
  "date": "2026-01-11T09:12:45.120Z",
  "coverImage": "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
  "content": "Full blog content..."
}
```
🎨 UI Overview

    Left Panel

        Scrollable list of blog cards

        Displays category, title, description, and date

        Includes a Create Blog button

    Right Panel

        Displays selected blog details

        Cover image, title, category, date, description, and full content

    The UI follows the reference design provided in the assignment.
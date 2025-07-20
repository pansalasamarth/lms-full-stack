# BrightPath LMS 🌟

A full-stack Learning Management System (LMS) that empowers educators to publish online courses and students to browse, purchase, and track their learning progress. Built with the MERN stack, Clerk for authentication, Stripe for payments, and deployed on Vercel.

---

## Table of Contents

1. [Features](#features)  
2. [Tech Stack](#tech-stack)  
3. [Architecture & Folder Structure](#architecture--folder-structure)  
4. [Getting Started](#getting-started)  
   1. [Prerequisites](#prerequisites)  
   2. [Local Setup](#local-setup)  
5. [Environment Variables](#environment-variables)  
6. [Scripts](#scripts)  
7. [Deployment](#deployment)  
8. [API Endpoints](#api-endpoints)  
9. [Key Components & Pages](#key-components--pages)  
10. [Contributing](#contributing)  
11. [License](#license)  

---

## Features

- **Role-Based Access**  
  - Students can browse, search, and enroll in courses  
  - Educators can “Become Educator,” create and manage courses  
- **Secure Authentication**  
  - Clerk for user signup, signin, and session management  
  - Webhooks keep MongoDB user records in sync  
- **Course Management**  
  - Dynamic chapters & lectures form with rich-text descriptions (Quill editor)  
  - Cloudinary integration for thumbnail uploads  
- **Payment Integration**  
  - Stripe Checkout sessions for purchases  
  - Webhook handlers to mark enrollments on payment success  
- **Progress Tracking**  
  - Per-lecture completion tracking and resume playback  
  - “My Enrollments” student dashboard with progress bars  
- **Analytics Dashboard**  
  - Educator dashboard with total courses, enrollments, earnings  
  - Table of recent student enrollments  
- **Responsive UI**  
  - Styled with Tailwind CSS  
  - Mobile-friendly layouts and components  
- **Deployment & CI/CD**  
  - Vercel for both client and server (serverless functions)  
  - GitHub Actions for automatic linting and testing  

---

## Tech Stack

- **Frontend:**  
  React (Vite), React Router v6, Tailwind CSS, Clerk React SDK, Axios, React-Toastify, Quill  
- **Backend:**  
  Node.js, Express, MongoDB Atlas (Mongoose), Clerk Express Middleware, Stripe SDK & webhooks, Cloudinary  
- **Deployment & Tools:**  
  Vercel, GitHub & GitHub Actions, Postman  

---

## Architecture & Folder Structure

```

lms-full-stack/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── tailwind.config.js
├── server/
│   ├── configs/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   └── server.js
├── vercel.json
├── .env.example
├── package.json
└── README.md

````

---

## Getting Started

### Prerequisites

- Node.js (v16+) & npm or Yarn  
- MongoDB Atlas cluster  
- Clerk account  
- Stripe account (test keys)  
- Cloudinary account  

### Local Setup

1. **Clone the repository**  
   ```bash
   git clone https://github.com/pansalasamarth/lms-full-stack.git
   cd lms-full-stack
   ````

2. **Copy & configure environment variables**

   ```bash
   cp .env.example server/.env
   cp .env.example client/.env
   ```

   Fill in your credentials.

3. **Install Dependencies**

   ```bash
   npm install
   cd client && npm install
   cd ../server && npm install
   ```

4. **Run Locally**

   ```bash
   # Server on port 5000
   cd server
   npm run dev

   # Client on port 3000
   cd ../client
   npm run dev
   ```

5. **Open**

   * Frontend: [http://localhost:3000](http://localhost:3000)
   * Backend health check: [http://localhost:5000](http://localhost:5000)

---

## Environment Variables

```dotenv
# Server (.env)
MONGODB_URI=<your-mongodb-uri>
CLOUDINARY_NAME=<cloud_name>
CLOUDINARY_API_KEY=<api_key>
CLOUDINARY_SECRET_KEY=<secret_key>
CLERK_SECRET_KEY=<clerk_secret>
CLERK_WEBHOOK_SECRET=<clerk_webhook_secret>
STRIPE_SECRET_KEY=<stripe_secret>
STRIPE_WEBHOOK_SECRET=<stripe_webhook_secret>
CURRENCY=USD

# Client (.env)
VITE_BACKEND_URL=http://localhost:5000
VITE_CLERK_PUBLISHABLE_KEY=<clerk_publishable>
VITE_CURRENCY=$
```

---

## Scripts

```bash
# In client/
npm run dev        # Start frontend
npm run build      # Build for production

# In server/
npm run dev        # Start backend
npm run start      # Run built server

# Root-level
npm run lint
npm run test
```

---

## Deployment

1. Connect GitHub repo to Vercel.
2. Set environment variables in Vercel Dashboard.
3. Deploy—the frontend and backend update automatically on push to `main`.

---

## API Endpoints

* **Public**

  * `GET /api/course/all`
  * `GET /api/course/:id`

* **Student**

  * `GET /api/user/data`
  * `POST /api/user/purchase`
  * `GET /api/user/enrolled-courses`
  * `POST /api/user/update-course-progress`
  * `POST /api/user/get-course-progress`
  * `POST /api/user/add-rating`

* **Educator**

  * `GET /api/educator/update-role`
  * `POST /api/educator/add-course`
  * `GET /api/educator/courses`
  * `GET /api/educator/dashboard`
  * `GET /api/educator/enrolled-students`

* **Webhooks**

  * `POST /clerk`
  * `POST /stripe`

---

## Key Components & Pages

* **Hero** & **SearchBar**
* **CourseCard**, **CoursesSection**, **CoursesList**
* **CourseDetails** & **Player**
* **MyEnrollments** & progress bars
* **AddCourse**, **MyCourses**, **StudentsEnrolled**
* **Educator Dashboard** & KPI cards

---

## Contributing

1. Fork the repo
2. Create branch (`git checkout -b feature/xyz`)
3. Commit changes (`git commit -m "Add feature"`)
4. Push and open a PR

---

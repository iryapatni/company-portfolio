# Company Portfolio – Full Stack MERN Application

This project is a full-stack company portfolio web application built using the MERN stack.  
It showcases company projects, client testimonials, and provides ways for users to contact the company or subscribe to a newsletter.

The application includes an internal admin panel to manage dynamic content such as projects, clients, contact messages, and newsletter subscribers.

---

## Features

### Public Features
- Home page with company overview and newsletter subscription
- Projects page displaying completed work with images
- Clients page showcasing testimonials with client profiles
- Contact page with form submission
- Responsive and clean user interface
- Image upload and display support

### Admin Features (Internal)
- Add new projects with images
- Add new client testimonials with images
- View contact form submissions
- View newsletter subscribers

> Admin routes are intentionally not visible in the public UI and can be accessed directly via URL paths under `/admin/*`.

---

## Tech Stack

### Frontend
- React (Vite)
- React Router
- Axios
- CSS (custom styling)

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- Multer (for image uploads)

### Database
- MongoDB Atlas

---

## Folder Structure

company-portfolio/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── uploads/
│   └── index.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   └── index.html
│
├── .gitignore
└── README.md

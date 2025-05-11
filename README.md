# zestSIP 🍹

**zestSIP** is a visually engaging, responsive web app that showcases a variety of juice products in a clean, animated interface. Built using **ReactJS**, **Tailwind CSS**, and **DaisyUI**, zestSIP allows users to explore juices, view details, and manage a shopping cart in a seamless experience.

---

## 🚀 Features

- 🧃 **Juice Showcase**: Displays a grid of juice cards (4-column layout) with animations and hover effects.
- 📄 **Individual Pages**: Each juice has its own dedicated page with detailed info.
- 🛒 **Cart System**: Add to cart and view items with quantity control.
- 💡 **Smooth UX**: Fast navigation, fun visuals, and mobile responsiveness.

---

## 🛠️ Tech Stack

- **Frontend**: ReactJS
- **Styling**: Tailwind CSS, DaisyUI
- **State Management**: useState, useContext
- **Routing**: React Router DOM
- **Animation**: Tailwind transitions and optional Framer Motion
- **Storage**: LocalStorage (for cart persistence)

---

## 📁 Project Structure

```bash
zestSIP/
│
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable components (JuiceCard, Navbar, Footer, etc.)
│   ├── pages/               # Pages (Home, JuiceDetails, Cart)
│   ├── routes.jsx           # Centralized route definitions
│   ├── context/             # Cart Context and Provider
│   ├── utils/               # Helper functions (e.g., price formatter)
│   └── App.jsx
├── tailwind.config.js
├── package.json
└── README.md


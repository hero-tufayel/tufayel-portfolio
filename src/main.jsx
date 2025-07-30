import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Initialize dark mode as default
const initializeTheme = () => {
  const storedTheme = localStorage.getItem("theme");
  if (!storedTheme) {
    // Set dark mode as default if no theme is stored
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else if (storedTheme === "dark") {
    document.documentElement.classList.add("dark");
  }
};

// Initialize theme before rendering
initializeTheme();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

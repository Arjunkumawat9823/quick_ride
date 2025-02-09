import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';



// Initialize AOS
AOS.init({
  duration: 1000, // Animation duration in ms
  easing: 'ease-in-out', // Easing function
  // once: true, // Whether animation should happen only once
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

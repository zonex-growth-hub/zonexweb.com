import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { initSecurityShield } from './utils/securityShield'

// Initialize Enterprise-Grade Anti-Scraping & DevTools Shield
initSecurityShield();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

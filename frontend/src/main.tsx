import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import './index.css'
import App from './App.tsx'
import PortfolioContextProvider from './components/Context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PortfolioContextProvider>
        <App />
      </PortfolioContextProvider>
    </BrowserRouter>
  </StrictMode>,
)

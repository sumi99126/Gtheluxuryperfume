import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'
import { WizzTechProtectionProvider } from '@wizztech/protection'
import "@wizztech/protection/dist/style.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WizzTechProtectionProvider platformUrl="https://wizztech-demo-website-platform.netlify.app">
      <App />
    </WizzTechProtectionProvider>
  </React.StrictMode>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const rootFromHtml = document.getElementById('root')

createRoot(rootFromHtml).render(
  <div>
    <App />
  </div>
)

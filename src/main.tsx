import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './index.css'
import Toastify from './shared/UI/notifications/Toastify.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <App />
      <Toastify/>
   </React.StrictMode>
)

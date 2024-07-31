import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './index.css'
import Toastify from './shared/UI/notifications/Toastify.tsx'
import { Provider } from 'react-redux'
import { injectStore } from './config/axiosInstance.ts'
import { store } from './redux/store.ts'

injectStore(store)

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <PER
      <Provider store={store}>
         <App />
         <Toastify />
      </Provider>
   </React.StrictMode>
)

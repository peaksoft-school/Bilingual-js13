import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Toastify from './shared/UI/notifications/Toastify.tsx'
import { Provider } from 'react-redux'
import { injectStore } from './config/axiosInstance.ts'
import store, { persistor } from './redux/store.ts'
import { PersistGate } from 'redux-persist/integration/react'
import App from './app/App.tsx'

injectStore(store)



ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <PersistGate persistor={persistor}>

      <Provider store={store}>
         <App />
         {/* <ListenAndSelectUI options={options} optionsSecond={optionSecond}  children='sfsdf' /> */}
         
         <Toastify />
      </Provider>
      </PersistGate>
   </React.StrictMode>
)

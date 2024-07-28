import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Dialog from './components/dialog.jsx'
import './index.css'
import { BlocProvider } from './state/BlocContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BlocProvider>
      <App />
      <Dialog />
    </BlocProvider>
  </React.StrictMode>,
)

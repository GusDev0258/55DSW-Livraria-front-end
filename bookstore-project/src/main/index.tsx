import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './routes/Router'
import { Header } from '../presentation/components'
import '../presentation/styles/global/reset.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <Router />
  </React.StrictMode>,
)
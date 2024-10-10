import { createRoot } from 'react-dom/client'
import {Header} from './components/Header.tsx'
import {App} from './components/App.tsx'
import './reset.css'
import './main.sass'

createRoot(document.getElementById('root')!).render(
  <>
  <Header />
  <App />
  </>
)

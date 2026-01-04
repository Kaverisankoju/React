import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Description from './components/sample.jsx'
import CustomNavbar from './components/CustomNavbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomCarosel from './components/CustomCarosel.jsx'
import CounterApp from './classComponents/CounterApp.jsx'
import Application from './components/Application.jsx'
import Application1 from './components/application1.jsx'
import RecipesApp from './components/recipes.jsx'
import CounterApp1 from './components/CounterApp1.jsx'
import { Toggle } from './components/Timer.jsx'
import Timer from './components/TimerApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Timer/>
  </StrictMode>,
)

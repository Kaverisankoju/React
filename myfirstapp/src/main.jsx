import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Profile,{Items} from './components/profile.jsx'
import UserList from './components/profile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

  
    <UserList/>

  </StrictMode>
)


import { Route,  Routes } from 'react-router'
import './App.css'
import LandingPage from './pages/LandingPage/LandingPage'
import Signup from './pages/Auth/Signup'
function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<LandingPage />}/>
<Route path="/signup" element={<Signup />}/>
    </Routes>
    </>
  )
}

export default App

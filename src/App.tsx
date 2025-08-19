
import { Route,  Routes } from 'react-router'
import './App.css'
import LandingPage from './pages/LandingPage/LandingPage'
import Signup from './pages/Auth/Signup'
import SignIn from './pages/Auth/SignIn'
function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<LandingPage />}/>
<Route path="/signup" element={<Signup />}/>
<Route path="/login" element={<SignIn />}/>
    </Routes>
    </>
  )
}

export default App

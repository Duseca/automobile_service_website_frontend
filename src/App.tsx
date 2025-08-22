
import { Route,  Routes } from 'react-router'
import './App.css'
import LandingPage from './pages/LandingPage/LandingPage'
import Signup from './pages/Auth/Signup'
import SignIn from './pages/Auth/SignIn'
import VehicleDetails from './pages/VehicleDetails/VehicleDetails'
import AddVehicleDetails from './pages/VehicleDetails/AddVehicleDetails'
import ForgetPassword from './pages/Auth/ForgetPassword'
import OtpVerification from './pages/Auth/OtpVerification'
import ResetPassword from './pages/Auth/ResetPassword'
import AddBusniessDetails from './pages/BusniessDetails/AddBusniessDetails'
import SelectCategory from './pages/BusniessDetails/SelectCategory'
import SelectInstallationCategory from './pages/BusniessDetails/SelectInstallationCategory'
import AllowAccess from './pages/BusniessDetails/AllowAccess'
import About from './pages/LandingPage/About'
import Contact from './pages/LandingPage/Contact'
import ProductHome from './pages/Listings/Products/ProductHome'
import ServicesHome from './pages/Listings/Services/ServicesHome'
import ProductDetail from './pages/Listings/Products/ProductDetail'
import ServiceDetail from './pages/Listings/Services/ServiceDetail'
import OrderHome from './pages/Order/OrderHome'
import ServiceOrder from './pages/ServiceOrder/ServiceOrder'
import StoreOwnerProfile from './pages/Profile/StoreOwnerProfile'
import Chat from './pages/Chat/Chat'
function App() {
  return (
    <>
    <Routes>
<Route path="/" element={<LandingPage />}/>
<Route path="/about-us" element={<About />}/>
<Route path="/contact-us" element={<Contact />}/>
<Route path="/signup" element={<Signup />}/>
<Route path="/login" element={<SignIn />}/>
<Route path="/forgot-password" element={<ForgetPassword />}/>
<Route path="/otp-verification" element={<OtpVerification />}/>
<Route path="/reset-password" element={<ResetPassword />}/>
<Route path="/vehicle-detail" element={<VehicleDetails />}/>
<Route path="/add-vehicle-detail" element={<AddVehicleDetails />}/>
<Route path="/add-busniess-detail" element={<AddBusniessDetails />}/>
<Route path="/add-busniess-select-category" element={<SelectCategory />}/>
<Route path="/add-busniess-installation-category" element={<SelectInstallationCategory />}/>
<Route path="/allow-access" element={<AllowAccess />}/>
<Route path="/product-home" element={<ProductHome />}/>
<Route path="/product-detail/:id" element={<ProductDetail />}/>
<Route path="/service-home" element={<ServicesHome />}/>
<Route path="/service-detail/:id" element={<ServiceDetail />}/>
<Route path="/order" element={<OrderHome />}/>
<Route path="/service-order" element={<ServiceOrder />}/>
<Route path="/profile" element={<StoreOwnerProfile />}/>
<Route path="/chat" element={<Chat />}/>
    </Routes>
    </>
  )
}

export default App

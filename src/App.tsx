
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
import RootLayout from './layouts/RootLayout'
import VehicleOwnerEditProfile from './pages/VehicleOwnerDashboard/VehicleOwnerEditProfile'
import VehicleOwnerVehicles from './pages/VehicleOwnerDashboard/VehicleOwnerVehicles'
import VehicleOwnerOrder from './pages/VehicleOwnerDashboard/VehicleOwnerOrder'
import VehicleOwnerBookings from './pages/VehicleOwnerDashboard/VehicleOwnerBookings'
import VehicleOwnerChangePassword from './pages/VehicleOwnerDashboard/VehicleOwnerChangePassword'
import VehicleOwnerSettings from './pages/VehicleOwnerDashboard/VehicleOwnerSettings'
import VehicleOwnerLanguage from './pages/VehicleOwnerDashboard/VehicleOwnerLanguage'
import ServiceProviderEditProfile from './pages/ServiceProviderDashboard/ServiceProviderEditProfile'
import ServiceProviderStoreDetails from './pages/ServiceProviderDashboard/ServiceProviderStoreDetails'
import ServiceProviderOrders from './pages/ServiceProviderDashboard/ServiceProviderOrders'
import ServiceProviderCreateOrder from './pages/ServiceProviderDashboard/CreateOrder/ServiceProviderCreateOrder'
import ServiceProviderServices from './pages/ServiceProviderDashboard/ServiceProviderServices'
import ServiceProviderInsights from './pages/ServiceProviderDashboard/modals/ServiceProviderInsights'
import ServiceProviderChangePassword from './pages/ServiceProviderDashboard/ServiceProviderChangePassword'
import ServiceProviderSettings from './pages/ServiceProviderDashboard/ServiceProviderSettings'
import ServiceProviderLanguage from './pages/ServiceProviderDashboard/ServiceProviderLanguage'
import ServiceProviderStaffMembers from './pages/ServiceProviderDashboard/ServiceProviderStaffMembers'
import ServiceProviderProducts from './pages/ServiceProviderDashboard/ServiceProviderProducts'
import ServiceProviderBooking from './pages/ServiceProviderDashboard/Bookings/ServiceProviderBooking'
import ServiceProviderCreateBooking from './pages/ServiceProviderDashboard/Bookings/ServiceProviderCreateBooking'
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
<Route path="/dashboard/serviceProvider" element={<RootLayout />}> 
  <Route index element={<ServiceProviderEditProfile />} />
  <Route path="storeDetails" element={<ServiceProviderStoreDetails />} />
  <Route path="orders">
    <Route index element={<ServiceProviderOrders />} />
    <Route path="create" element={<ServiceProviderCreateOrder />} />
  </Route>
    <Route path="bookings">
    <Route index element={<ServiceProviderBooking />} />
    <Route path="create" element={<ServiceProviderCreateBooking />} />
  </Route>
  <Route path="services" element={<ServiceProviderServices />} />

  <Route path="my-products" element={<ServiceProviderProducts />} />
  <Route path="insights" element={<ServiceProviderInsights />} />
  <Route path="change-password" element={<ServiceProviderChangePassword />} />
  <Route path="settings" element={<ServiceProviderSettings />} />
   <Route path="staff-members" element={<ServiceProviderStaffMembers />} />
  <Route path="languages" element={<ServiceProviderLanguage />} />
</Route>

 <Route path="/dashboard/vehicleOwner" element={<RootLayout />}>
     <Route index element={<VehicleOwnerEditProfile />} />
     <Route path='vehicles' element={<VehicleOwnerVehicles />} />
     <Route path='orders' element={<VehicleOwnerOrder />} />
     <Route path='bookings' element={<VehicleOwnerBookings />} />
     <Route path='change-password' element={<VehicleOwnerChangePassword />} />
     <Route path='settings' element={<VehicleOwnerSettings />} />
     <Route path='languages' element={<VehicleOwnerLanguage />} />
    </Route>
    </Routes>
    </>
  )
}

export default App

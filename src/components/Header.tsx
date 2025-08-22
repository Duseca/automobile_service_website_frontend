import { Link, NavLink } from 'react-router';
import YellowButton from './YellowButton';
import IconOne from '../assets/products.svg';
import IconTwo from '../assets/tools.svg';
import { BagIcon, MessageIcon } from './Icons';
import Logo from '../assets/Logo.svg';
import { useState } from 'react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
  { to: "/product-home", label: "Products", icon: IconOne },
  { to: "/service-home", label: "Services", icon: IconTwo },
]
const dummyUser = {
  id: 1,
  name: "John Doe",
  avatar: "https://i.pravatar.cc/150?img=3", 
  notifications: 3,
  messages: 5,
  type:"service-provider"
}

  return (
         <header className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-screen-xl1 mx-auto p-4 md:px-8 lg:px-8 xl1:px-[80px] px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <img
            src={Logo}
            alt="Logo"
            className="h-12 w-28 object-contain"
          />
        </Link>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden md:flex items-center justify-center space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center transition-colors duration-200 ${
                  isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-500"
                }`
              }
            >
              <img src={item.icon} alt={item.label} className="h-6 w-6 mb-1" />
              <span className="font-medium text-xs">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center justify-end space-x-4">
          {dummyUser ? (
            <>
              <button className="relative p-1 text-gray-700 hover:text-blue-500">
                <BagIcon />
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  3
                </span>
              </button>

              <button className="relative p-1 text-gray-700 hover:text-blue-500">
                <MessageIcon />
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  5
                </span>
              </button>

              <Link to="/dashboard/vehicleOwner">
                <img
                  src={dummyUser.avatar || "https://images.pexels.com/photos/9072375/pexels-photo-9072375.jpeg"}
                  alt="User Avatar"
                  className="h-9 w-9 rounded-full border border-gray-300 object-cover"
                />
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="text-blue-600 font-semibold hover:text-blue-700">
                Login
              </Link>
              <Link to="/signup">
                <YellowButton wFull={false} text="Create account" />
              </Link>
            </>
          )}
        </div>

        <button 
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="block w-6 h-0.5 bg-gray-600"></span>
          <span className="block w-6 h-0.5 bg-gray-600"></span>
          <span className="block w-6 h-0.5 bg-gray-600"></span>
        </button>
      </div>

      {/* Mobile Navigation - Appears when menu is open */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col px-4 py-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center py-3 px-2 transition-colors duration-200 ${
                    isActive ? "text-blue-600 bg-blue-50 rounded-lg" : "text-gray-600 hover:text-blue-500"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                <img src={item.icon} alt={item.label} className="h-5 w-5 mr-3" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            ))}
            
            {/* Mobile user actions */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              {dummyUser ? (
                <div className="flex items-center justify-between px-2">
                  <div className="flex items-center space-x-2">
                    <img
                      src={dummyUser.avatar || "https://images.pexels.com/photos/9072375/pexels-photo-9072375.jpeg"}
                      alt="User Avatar"
                      className="h-8 w-8 rounded-full border border-gray-300 object-cover"
                    />
                    <span className="text-sm font-medium">User Name</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button className="relative p-1 text-gray-700">
                      <BagIcon />
                      <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                        3
                      </span>
                    </button>
                    <button className="relative p-1 text-gray-700">
                      <MessageIcon />
                      <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                        5
                      </span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col space-y-3 px-2">
                  <Link 
                    to="/login" 
                    className="text-center text-blue-600 font-semibold py-2 hover:text-blue-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/signup" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <YellowButton wFull={true} text="Create account" />
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

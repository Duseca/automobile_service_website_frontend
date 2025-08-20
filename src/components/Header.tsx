import { Link } from 'react-router';
import Logo from '../assets/Logo.svg';
import YellowButton from './YellowButton';
import IconOne from '../assets/products.svg';
import IconTwo from '../assets/tools.svg';
const Header = () => {
  return (
     <header className="w-full bg-white border-b border-gray-200">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between px-4 py-3  max-w-screen-xl1 mx-auto p-4 md:px-8 lg:px-8 xl1:px-[80px]">
        <div className="text-xl font-bold text-blue-600 cursor-pointer flex justify-center md:justify-start">
          <Link to={"/"}>
            <img src={Logo} className="h-14 w-28 object-contain" />
          </Link>
        </div>
        <div className="flex space-x-12 items-center mt-4 md:mt-0">
          <div className="flex flex-col items-center">
            <img src={IconOne}  className='h-10 w-10'/>
            <p className="text-black font-semibold text-sm cursor-pointer">Products</p>
          </div>
          <div className="flex flex-col items-center">
          <img src={IconTwo} className='h-10 w-10'/>
            <p className="text-black font-semibold text-sm cursor-pointer">Services</p>
          </div>
        </div>
        <div className="flex space-x-5 justify-center md:justify-end mt-4 md:mt-0">
          <Link to="/login" className="flex items-center">
            <p className="text-primary font-semibold">Login</p>
          </Link>
          <Link to={"/signup"}>
            <YellowButton wFull={false} text="Create account" />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header

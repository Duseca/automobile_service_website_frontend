import { Link } from 'react-router';
import Logo from '../assets/Logo.svg';
import YellowButton from './YellowButton';
const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-3  max-w-screen-xl1 mx-auto p-4 md:px-8 lg:px-8 xl1:px-[80px] ">
        <div className="text-xl font-bold text-blue-600 cursor-pointer">
         <img src={Logo} className='h-14 w-28' />
        </div>
        <div className="flex space-x-5">
             <Link to="/login" className="flex items-center">
            <p className="text-primary font-semibold">Login</p>
          </Link>
          <Link to={"/signup"}> <YellowButton wFull={false} text="Create account"  /></Link>
         
        </div>
      </div>
    </header>
  )
}

export default Header

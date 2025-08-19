
import YellowButton from "./YellowButton";
import logoImage from '../assets/Logo.svg';
import { Link, useNavigate } from "react-router";
interface HeroProps {
  bgImage:string;
  title:string;
  subtitle:string;
  titleTwo:string | any ;
}
const Hero:React.FC<HeroProps> = ({bgImage, subtitle, titleTwo, title}) => {
const navigate = useNavigate()
return (
  <div className="relative w-full overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src={bgImage}
        alt="vefix"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="relative z-10 max-w-screen-xl1 mx-auto p-4 md:px-8 lg:px-8 xl1:px-[80px] py-12 md:py-20 flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
         <img
  src={logoImage}
  alt="Company Logo"
  className="w-40 h-12 sm:w-56 sm:h-16 md:w-64 md:h-20 lg:w-80 lg:h-24 mb-4 mx-auto md:mx-0"
/>

          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight w-full md:w-3/4">
            <span>{title}</span>
            <span className="text-gray-900"> {titleTwo}</span>
          </h1>
        </div>
        <p className="mt-6 text-lg text-white max-w-lg">{subtitle}</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <YellowButton wFull={false} text="Create account" handleClick={()=>navigate('/signup')} />
          <Link to="/login" className="flex items-center">
            <p className="text-white">Login</p>
          </Link>
        </div>
      </div>
      <div className="hidden md:block w-full md:w-1/2"></div>
    </div>
  </div>
);

}

export default Hero
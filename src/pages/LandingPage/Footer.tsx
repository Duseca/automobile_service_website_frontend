import { Link } from "react-router"
import { FacebookIcon, InstagramIcon, LinkedInIcon, YoutubeIcon } from "../../components/Icons"
import Logo from '../../assets/Logo.svg';
const Footer = () => {
  return (
<footer className="bg-primary text-white mt-auto">
  <div className="w-full max-w-screen-xl mx-auto p-4 md:px-8 lg:px-12 xl:px-[80px]">
    {/* Top Section */}
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
      
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src={Logo} alt="Logo" className="w-40 h-10 object-contain" />
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-sm font-medium">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about-us" className="hover:underline">About</Link>
        <Link to="/contact-us" className="hover:underline">Contact</Link>
        <Link to="" className="hover:underline">Terms & Conditions</Link>
        <Link to="" className="hover:underline">Privacy Policy</Link>
      </div>

      {/* Social Icons */}
      <div className="flex gap-3 md:gap-4">
        <Link to={""} aria-label="Facebook">
          <div className="rounded-md bg-gray-300/10 p-2 md:p-3 hover:bg-white/20 transition">
            <FacebookIcon  />
          </div>
        </Link>
        <Link to={""} aria-label="YouTube">
          <div className="rounded-md bg-gray-300/10 p-2 md:p-3 hover:bg-white/20 transition">
            <YoutubeIcon  />
          </div>
        </Link>
        <Link to={""} aria-label="Instagram">
          <div className="rounded-md bg-gray-300/10 p-2 md:p-3 hover:bg-white/20 transition">
            <InstagramIcon  />
          </div>
        </Link>
        <Link to={""} aria-label="LinkedIn">
          <div className="rounded-md bg-gray-300/10 p-2 md:p-3 hover:bg-white/20 transition">
            <LinkedInIcon />
          </div>
        </Link>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="border-t border-gray-200/10 mt-6">
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-200 py-4 gap-2">
        <span>Copyright © 2025</span>
        <span className="text-gray-400">All rights reserved.</span>
      </div>
    </div>
  </div>
</footer>


  )
}

export default Footer

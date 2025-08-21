import { Link } from "react-router"
import { FacebookIcon, InstagramIcon, LinkedInIcon, YoutubeIcon } from "../../components/Icons"
import Logo from '../../assets/Logo.svg';
const Footer = () => {
  return (
  <footer className="bg-primary text-white mt-auto">
  <div className="w-full max-w-screen-xl mx-auto p-4 md:px-8 lg:px-8 xl:px-[80px]">
    <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
      
      {/* Logo */}
      <div className="flex items-center mb-4 md:mb-0">
        <div className="mr-2">
          <img src={Logo} alt="Logo" className="w-40 h-10" />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6 mb-4 md:mb-0">
        <Link to="/">Home</Link>
        <Link to="/about-us">About</Link>
        <Link to="/contact-us">Contact</Link>
        <Link to="">Terms & Conditions</Link>
        <Link to="">Privacy Policy</Link>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-4">
        <Link to={""} className="hover:text-primary" aria-label="Facebook">
          <div className="rounded-md bg-gray-300/10 p-3 transition">
            <FacebookIcon />
          </div>
        </Link>
        <Link to={""} aria-label="YouTube">
          <div className="rounded-md bg-gray-300/10 p-3 transition">
            <YoutubeIcon />
          </div>
        </Link>
        <Link to={""} aria-label="Instagram">
          <div className="rounded-md bg-gray-300/10 p-3 transition">
            <InstagramIcon />
          </div>
        </Link>
        <Link to={""} aria-label="LinkedIn">
          <div className="rounded-md bg-gray-300/10 p-3 transition">
            <LinkedInIcon />
          </div>
        </Link>
      </div>

    </div>

    {/* Bottom Copyright */}
    <div className="border-t border-gray-200/10">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="mb-2 md:mb-0">
          Copyright © 2025
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer

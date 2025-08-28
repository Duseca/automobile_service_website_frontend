
import {  NavLink, useLocation} from "react-router-dom";
import { useState } from "react";
import Modal from "../../components/Modal";
interface SidebarProps {
  sidebarLinks: any[];
}
const Sidebar = ({ sidebarLinks }:SidebarProps) => {
 const [showMenu, setShowMenu] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const handleAction = (link: any) => {
    if (link.action === "logout") {
      setShowLogout(true); // 👈 open modal
    } else {
      setShowMenu(false); // close sidebar on normal link click
    }
  };
  return (
   <>
      <div className="px-4 sm:px-8 pt-2 lg:hidden">
        <button
          onClick={() => setShowMenu(true)}
          className="flex items-center gap-2 p-2 my-4 text-sm bg-primary rounded-lg cursor-pointer"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            fill="white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            />
          </svg>
        </button>
      </div>

      <aside
        className={`fixed  left-0 z-40 w-64 bg-white  transform duration-300 ease-in-out ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:block`}
        aria-label="Sidebar"
      >
        <div className="flex flex-col justify-between h-full px-4 py-5 overflow-y-auto scrollbar-hide">
          <div>
            <div className="flex justify-end lg:hidden mb-4">
              <button
                className="text-black text-2xl cursor-pointer"
                onClick={() => setShowMenu(false)}
              >
                close
              </button>
            </div>

            {/* Sidebar Links */}
            <ul className="space-y-3 text-sm">
              {sidebarLinks?.map((link) => (
                <li key={link.name}>
                  {link.action === "logout" ? (
                    <button
                      onClick={() => handleAction(link)}
                    className="flex items-center py-2 px-5 rounded-lg cursor-pointer text-red-500 font-semibold"
                    >
                      {link.icon} <span className="ml-3">{link.name}</span>
                    </button>
                  ) : (
                    <SidebarLink
                      name={link.name}
                      path={link.path}
                      icon={link.icon}
                      onClick={() => handleAction(link)}
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>

      {/* Logout Modal */}
   
      <Modal
      bottomText={"Not now"}
      show={showLogout}
      title={"Yes, log me out"} 
      modalTitle={"Ready to head out?"}
      description="You’re about to log out of your account. Don’t worry—you can jump back in anytime!"
      onClose={() => setShowLogout(false)}
       />
    </>
  )
}
interface SidebarLinkProps{
    name : string , 
    path?: string, 
    icon: React.ReactNode,
    onClick: ()=>void
}
const SidebarLink: React.FC<SidebarLinkProps> = ({ name, path, icon, onClick }) => {
  const location = useLocation();

  // custom active logic
  const isActive = (): boolean => {
    if (!path) return false;

    // Exact match for Edit Profile pages
    if (path.endsWith("serviceProvider") || path.endsWith("vehicleOwner")) {
      return location.pathname === path;
    }

    // Parent tab active on nested pages
    return location.pathname.startsWith(path);
  };

  return (
    <li onClick={onClick}>
      <NavLink
        to={path ? path : "/"}
        className={`flex items-center py-2 px-5 rounded-lg ${
          isActive()
            ? "text-primary bg-primary/10 font-semibold"
            : "text-[#83898F] bg-transparent hover:text-primary"
        }`}
      >
        <span className="text-inherit">{icon}</span>
        <span className="flex-1 ml-3 whitespace-nowrap">{name}</span>
      </NavLink>
    </li>
  );
};
export default Sidebar

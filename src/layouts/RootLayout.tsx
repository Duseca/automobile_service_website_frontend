import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./partials/Sidebar";
import HeaderFooterLayout from "./HeaderFooterLayout";
import { serviceProviderSidebarLinks, vehicleSidebarLinks } from "../components/data";
const RootLayout: React.FC = () => {
   const location = useLocation();

  // 👇 check if url contains "serviceProvider"
  const isServiceProvider = location.pathname.includes("serviceProvider");

  const sidebarLinks = isServiceProvider
    ? serviceProviderSidebarLinks
    : vehicleSidebarLinks;
    return (
      <HeaderFooterLayout >
      <div className="my-10">
      <Sidebar sidebarLinks={sidebarLinks} />
      <div className="lg:ml-64">
        <Outlet />
      </div>
    </div>
    </HeaderFooterLayout>
    );
  };
  
  export default RootLayout;
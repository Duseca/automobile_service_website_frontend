import { Outlet } from "react-router-dom";
import Sidebar from "./partials/Sidebar";
import HeaderFooterLayout from "./HeaderFooterLayout";
const RootLayout: React.FC = () => {
    return (
      <HeaderFooterLayout >
      <div className="my-10">
      <Sidebar />
      <div className="lg:ml-64">
        <Outlet />
      </div>
    </div>
    </HeaderFooterLayout>
    );
  };
  
  export default RootLayout;
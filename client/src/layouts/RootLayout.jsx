import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const RootLayout = () => {
  return (
    <div className="bg-slate-200 h-screen">
      <Navbar />
      <div className="grid grid-cols-footer px-12">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;

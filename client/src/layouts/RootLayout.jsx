import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const RootLayout = () => {
  return (
    <div className="bg-slate-200 h-screen overflow-hidden">
      <Navbar />
      <div className="flex px-12 gap-6 h-full">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;

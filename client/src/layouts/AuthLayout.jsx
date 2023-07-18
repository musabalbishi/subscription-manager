import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";

const AuthLayout = () => {
  return (
    <div className="bg-slate-200 h-screen grid grid-cols-footer px-12">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default AuthLayout;

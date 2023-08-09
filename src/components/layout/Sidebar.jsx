import { BiSolidDashboard, BiChat } from "react-icons/bi";
import { PiChartBarDuotone, PiCalendar } from "react-icons/pi";

import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <aside className="bg-white py-4 w-60 h-[85vh] rounded-lg">
      <div className="flex flex-col">
        <NavLink to={"/"}>
          <div className="flex gap-2 items-center px-4 py-2 mx-2 hover:bg-gray-100 cursor-pointer transition-all duration-300 focus:bg-gray-200 rounded-md">
            <BiSolidDashboard color="#444" size={"1.5rem"} />
            <p className="text-lg">Dashboard</p>
          </div>
        </NavLink>
        <NavLink to={"/calender"}>
          <div className="flex gap-2 items-center px-4 mx-2 py-2 hover:bg-gray-100 cursor-pointer transition-all duration-300 focus:bg-gray-200 rounded-md">
            <PiCalendar color="#444" size={"1.5rem"} />
            <p className="text-lg">Calender</p>
          </div>
        </NavLink>

        <NavLink to={"/reports"}>
          <div className="flex gap-2 items-center px-4 mx-2 py-2 hover:bg-gray-100 cursor-pointer transition-all duration-300 focus:bg-gray-200 rounded-md">
            <PiChartBarDuotone color="#444" size={"1.5rem"} />
            <p className="text-lg">Reports</p>
          </div>
        </NavLink>

        <NavLink to={"/n"}>
          <div className="flex gap-2 items-center px-4 mx-2 py-2 hover:bg-gray-100 cursor-pointer transition-all duration-300 focus:bg-gray-200 rounded-md">
            <BiChat color="#444" size={"1.5rem"} />
            <p className="text-lg">Notifications</p>
          </div>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;

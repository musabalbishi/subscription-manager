import { useState } from "react";
import { BiMenuAltLeft, BiUser } from "react-icons/bi";
import { PiSun, PiSignOut, PiUserCircle } from "react-icons/pi";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <nav className="bg-white h-20 p-4 px-12 mb-4 flex justify-between items-center">
      {/* logo */}
      <div className="flex items-center">
        <div className="w-[20%]">
          <img src="./src/assets/logo1.png" alt="logo" className="w-full" />
        </div>
        <p className="text-lg font-semibold">Sub Manager</p>
      </div>
      <div className="md:hidden">
        <BiMenuAltLeft color="#444" />
      </div>
      {/* icons */}
      <div className="flex items-center gap-3">
        <button className="hover:bg-gray-100 cursor-pointer p-1 rounded-lg transition-all duration-300">
          <PiSun color="#444" size={"1.5rem"} />
        </button>
        {/*  */}
        <button
          onClick={() => setDropdown(!dropdown)}
          className="hover:bg-gray-100 cursor-pointer p-1 rounded-lg transition-all duration-300"
        >
          <BiUser color="#444" size={"1.5rem"} />
        </button>
        {/* dropdown */}
        <div
          className={
            dropdown
              ? "absolute top-16 right-4 transform transition ease-in duration-700 rounded-lg p-3 shadow-md bg-gray-100 w-40 h-40 z-10"
              : "hidden"
          }
        >
          <div className="flex flex-col">
            <p>Hello, username</p>
            <div className="flex items-center gap-3 border-t-2 mt-2 pt-1">
              <PiUserCircle color="#444" size={"1.3rem"} />
              <p>Profile</p>
            </div>

            <div className="flex items-center gap-3 border-t-2 mt-2 pt-1">
              <PiSignOut color="#444" size={"1.3rem"} />
              <p>logout</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { BiMenuAltLeft, BiUser } from "react-icons/bi";
import { PiSun } from "react-icons/pi";
const Navbar = () => {
  return (
    <nav className="bg-white h-20 p-4 px-12 mb-4 flex justify-between items-center">
      <div className="flex items-center">
        <div className="w-[20%]">
          <img src="./src/assets/logo1.png" alt="logo" className="w-full" />
        </div>
        <p className="text-lg font-semibold">Sub Manager</p>
      </div>
      <div className="md:hidden">
        <BiMenuAltLeft color="#444" />
      </div>
      {/*  */}
      <div className="flex items-center gap-3">
        <div className="hover:bg-gray-100 cursor-pointer p-1 rounded-lg transition-all duration-300">
          <PiSun color="#444" size={"1.5rem"} />
        </div>
        <div className="hover:bg-gray-100 cursor-pointer p-1 rounded-lg transition-all duration-300">
          <BiUser color="#444" size={"1.5rem"} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

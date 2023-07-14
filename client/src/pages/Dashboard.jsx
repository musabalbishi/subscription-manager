import { useState } from "react";
import { BiSearch, BiCube, BiSolidBadgeDollar } from "react-icons/bi";
import { PiPercent, PiPlusCircleDuotone, PiX } from "react-icons/pi";
import StatsCard from "../components/StatsCard";
import SubTable from "../components/SubTable";
import FormikForm from "../components/FormikForm";

const Dashboard = () => {
  const [search, setSearch] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="flex flex-col flex-grow min-h-full">
      {/* some stats */}
      <div className="flex justify-between gap-4 mb-4 z-0">
        <StatsCard
          title={"Subscriptions"}
          stat={"11 Subscriptions"}
          icon={<BiCube size={"1.5rem"} />}
        />
        <StatsCard
          title={"Monthly payment"}
          stat={"$113.34"}
          icon={<BiSolidBadgeDollar size={"1.5rem"} color="green" />}
        />
        <StatsCard
          title={"Yearly payment"}
          stat={"$3333.34"}
          icon={<PiPercent size={"1.5rem"} />}
        />
        <StatsCard
          title={"Average"}
          stat={"$33.34"}
          icon={<PiPercent size={"1.5rem"} />}
        />
      </div>
      {/* subscriptions */}
      <div className="flex items-start w-full bg-white rounded-lg h-[25rem] p-6">
        <div className="flex items-center flex-col w-full">
          <div className="flex items-center justify-between w-full mb-4">
            <p className="text-lg">Your subscriptions</p>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="search"
                className={search ? "bg-slate-100 rounded-lg p-2" : "hidden"}
              />
              <button
                onClick={() => setSearch(!search)}
                className="bg-slate-200 hover:bg-slate-400 duration-300 hover:-translate-y-0.5 p-2 rounded-lg"
              >
                <BiSearch size={"1.5rem"} />
              </button>
              <button
                onClick={() => setOpenModal(true)}
                className="bg-slate-200  hover:bg-slate-400 duration-300 hover:-translate-y-0.5 p-2 rounded-lg"
              >
                <PiPlusCircleDuotone size={"1.5rem"} />
              </button>
            </div>
          </div>

          {/* table */}

          <SubTable />

          <div
            className={
              openModal
                ? "w-[40rem] p-3 bg-gray-500 rounded-lg fixed top-24 left-1/5 z-10"
                : "hidden"
            }
          >
            <button
              onClick={() => setOpenModal(false)}
              className="hover:bg-gray-100 duration-300 text-white hover:text-[#333] p-1 rounded-lg"
            >
              <PiX size={"1.5rem"} />
            </button>
            <FormikForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

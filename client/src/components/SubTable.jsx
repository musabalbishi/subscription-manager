import { useState } from "react";
import {
  BiEdit,
  BiExpandHorizontal,
  BiPause,
  BiPlay,
  BiTrash,
} from "react-icons/bi";

const SubTable = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="rounded-lg overflow-hidden w-full">
      <table className="w-full text-center overflow-auto">
        <thead className="bg-slate-300">
          <tr>
            <th></th>
            <th>name</th>
            <th>value</th>
            <th>cycle</th>
            <th>Renews</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-r-2 bg-slate-100 w-10">
              <button>
                <BiExpandHorizontal color="#444" size={"1.5rem"} />
              </button>
            </td>
            <td className="border-r-2 bg-slate-100 p-2 w-52">netflix</td>
            <td className="border-r-2 bg-slate-100 p-2 w-28">$19.9</td>
            <td className="border-r-2 bg-slate-100 p-2 w-28">monthly</td>
            <td className="border-r-2 bg-slate-100 p-2 w-28">11-11-2023</td>
            <td className="border-r-2 bg-slate-100 p-2 w-14">
              <button onClick={() => setClicked(!clicked)}>
                {clicked ? (
                  <BiPlay color="#444" size={"1.5rem"} />
                ) : (
                  <BiPause color="#444" size={"1.5rem"} />
                )}
              </button>
            </td>
            <td className="border-r-2 bg-slate-100 p-2 w-14">
              <button>
                <BiEdit color="#444" size={"1.5rem"} />
              </button>
            </td>
            <td className=" bg-slate-100 p-2 w-14">
              <button>
                <BiTrash color="#FF2400" size={"1.5rem"} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SubTable;

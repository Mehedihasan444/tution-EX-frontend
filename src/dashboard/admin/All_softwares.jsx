import { useContext } from "react";
import { DataContext } from "../../DataProvider/DataProvider";
import Software_card from "../../Components/Cards/Software_card";

const All_softwares = () => {
  const { allData } = useContext(DataContext);
  return (
    <div className="h-screen overflow-y-auto w-full ">
      <h1 className="text-4xl font-bold text-center my-10">
        My Softwares ({allData[6]?.length})
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center">
        {allData[6]?.length == 0 ? (
          <h1 className="text-xl font-bold text-gray-300">
            No software added yet!
          </h1>
        ) : (
          allData[6]?.map((software) => (<Software_card key={software?._id} i={software} />
          ))
        )}
      </div>
    </div>
  );
};

export default All_softwares;
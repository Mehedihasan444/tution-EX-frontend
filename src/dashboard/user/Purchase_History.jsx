import { useContext } from "react";
import { DataContext } from "../../DataProvider/DataProvider";
import Course_Card from "../../Components/Cards/Course_Card";


const Purchase_History = () => {
  const { allData } = useContext(DataContext);

  return (
    <div className="text-center h-screen overflow-y-auto w-full">
      <p className="mt-5">Your purchase list </p>
      <h1 className="text-4xl font-bold">
        Purchases History ({allData[2]?.purchaseList?.length})
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center">
        {allData[2]?.purchaseList?.length == 0 ? (
          <h1 className="text-xl font-bold text-gray-300">
            Nothing purchase yet!
          </h1>
        ) : (
          allData[2]?.purchaseList?.map((item, idx) => (
            <Course_Card key={idx} course={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default Purchase_History;

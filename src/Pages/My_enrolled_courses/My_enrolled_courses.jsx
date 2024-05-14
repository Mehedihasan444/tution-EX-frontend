import { useContext } from "react";
import { DataContext } from "../../DataProvider/DataProvider";
import Course_Card from "../../Components/Cards/Course_Card";

const My_enrolled_courses = () => {
  const { allData } = useContext(DataContext);
console.log(allData)
  return (
    <div className="h-screen overflow-y-auto w-full ">
      <h1 className="text-xl font-semibold max-w-5xl mx-auto text-center mt-5">
        Available items: {allData[2]?.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center">
        {allData[2]?.purchaseList?.length == 0 ? (
          <h1 className="text-xl font-bold text-gray-300">
            No course purchase yet!
          </h1>
        ) : (
          allData[2]?.purchaseList?.map((course, idx) => (
            <Course_Card key={idx} course={course}></Course_Card>
          ))
        )}
      </div>
    </div>
  );
};

export default My_enrolled_courses;

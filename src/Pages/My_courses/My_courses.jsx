import { useContext } from "react";
import { DataContext } from "../../DataProvider/DataProvider";
import Course_Card from "../../Components/Cards/Course_Card";

const My_courses = () => {
  const { allData } = useContext(DataContext);

  return (
    <div className="h-screen overflow-y-auto w-full ">
      <h1 className="text-4xl font-bold text-center my-10">
        My Courses ({allData[3]?.length})
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center">
        {allData[3]?.length == 0 ? (
          <h1 className="text-xl font-bold text-gray-300">
            No course added yet!
          </h1>
        ) : (
          allData[3]?.map((course) => (
            <Course_Card key={course?._id} course={course} />
          ))
        )}
      </div>
    </div>
  );
};

export default My_courses;

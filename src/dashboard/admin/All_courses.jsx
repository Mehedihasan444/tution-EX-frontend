import { useContext } from "react";
import { DataContext } from "../../DataProvider/DataProvider";
import Admin_course_card from "../../Components/Cards/Admin_course_card";


const All_courses = () => {
  const { allData } = useContext(DataContext);

  return (
    <div className="h-screen overflow-y-auto w-full ">
      <h1 className="text-4xl font-bold text-center my-10">
        All Courses ({allData[0]?.length})
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center">
        {allData[0]?.length == 0 ? (
          <h1 className="text-xl font-bold text-gray-300">
            No course added yet!
          </h1>
        ) : (
          allData[0]?.map((course) => (
            <Admin_course_card key={course?._id} course={course} />
          ))
        )}
      </div>
    </div>
  );
};

export default All_courses;
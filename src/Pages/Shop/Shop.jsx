import { useContext, useEffect, useState } from "react";
import DataProvider from "../../DataProvider/DataProvider";

import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Course_Card from "../../Components/Cards/Course_Card";

const Shop = () => {
  // const {allData}=useContext(DataProvider)
  const [all_courses, setAll_courses] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic.get("/courses").then((res) => {
      setAll_courses(res.data);
    });
  }, [axiosPublic]);
  return (
    <section>
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-center my-5 mt-20">
          Popular Courses
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  gap-5  justify-center items-center px-10">
          {all_courses?.map((course) => (
            <Course_Card key={course._id} course={course}></Course_Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Shop;

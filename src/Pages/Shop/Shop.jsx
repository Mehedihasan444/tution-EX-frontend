import { useContext, useEffect, useState } from "react";
import DataProvider from "../../DataProvider/DataProvider";
import Software_card from "../../Components/Cards/Software_card";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Course_Card from "../../Components/Cards/Course_Card";

const Shop = () => {
  // const {allData}=useContext(DataProvider)
  const [software, setSoftware] = useState();
  const [all_courses, setAll_courses] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic.get("/all-softwares").then((res) => {
      setSoftware(res.data);
    });
    axiosPublic.get("/courses").then((res) => {
      setAll_courses(res.data);
    });
  }, [axiosPublic]);
  return (
    <section>
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-center my-5 mt-20">Popular Courses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  gap-5  justify-center items-center px-10">
          {all_courses?.map((course) => (
            <Course_Card key={course._id} course={course}></Course_Card>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          Our Software Collection
        </h1>
        <p className="text-center mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint a
          cupiditate <br /> excepturi eos deserunt id natus fuga odio qui aut.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-5">
          {software?.map((i) => (
            <Software_card key={i._id} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Shop;

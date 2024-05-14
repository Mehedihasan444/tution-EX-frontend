import { useEffect, useState } from "react";
import Course_Card from "../Cards/Course_Card";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const Popular_courses = () => {
  const [courses, setCourses] = useState([]);
  const [all_courses, setAll_courses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic.get("/courses").then((res) => {
      setAll_courses(res.data);
    });
  }, [axiosPublic]);

  // All Category 
  const All_Category = [
    "All Courses",
    "Design",
    "Development",
    "Data Science",
    "Photography",
    "Sales Marketing",
  ];

  //   fetch clicked button category data
  const handleCourse = (category = "All Courses") => {
    if (category === "All Courses") {
      setCourses(all_courses);
    } else {
      // filter data based on category
      const course_filter = all_courses?.filter(
        (course) => course.category == category
      );
      setCourses(course_filter);
    }
  };

  return (
    <div className="space-y-7 my-10 min-h-screen">
      <h1 className="text-4xl font-bold text-center">Popular Courses</h1>
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {All_Category?.map((btn, idx) => (
          <button
            key={idx}
            className={`btn-sm btn-outline  text-xs sm:text-base sm:btn-md btn ${
              selectedCategory == btn ? "bg-purple-600 text-white" : ""
            }  hover:bg-purple-600 hover:text-white hover:border-none`}
            onClick={() => {
              handleCourse(btn);
              setSelectedCategory(btn);
              setLoading(false);
            }}
          >
            {btn}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  gap-5  justify-center items-center px-10">
        {loading ? (
          <>
            {all_courses?.map((course) => (
              <Course_Card key={course._id} course={course}></Course_Card>
            ))}
          </>
        ) :<>{
          courses?.length === 0?<h1 className="text-4xl text-center opacity-80 font-semibold😇">Course not found!</h1>

          :
          (
          courses?.map((course) => (
            <Course_Card key={course._id} course={course}></Course_Card>
          ))
        )
        }
         
        </>}
      </div>
      <div className="flex flex-row justify-center items-center">
        <Link to="/shop">

        <button className="btn btn-outline border-purple-600 border-2 text-purple-600">
          Explore All Courses
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Popular_courses;

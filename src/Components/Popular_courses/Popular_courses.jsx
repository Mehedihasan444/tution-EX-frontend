import { useState } from "react";
import Course_Card from "../Cards/Course_Card";

const Popular_courses = () => {
    const [courses,setCourses]=useState([])
    const [selectedCategory,setSelectedCategory]=useState('All Courses')
    const [loading,setLoading] = useState(true)
    // All Category
const All_Category=['All Courses','Design','Development','Data Science','Photography',"Sales Marketing"]
    // static data
  const all_courses = [
    {
      _id: 1,
      category: "Photography",
      img: "https://img.freepik.com/free-vector/students-using-e-learning-platform-video-laptop-graduation-cap-online-education-platform-e-learning-platform-online-teaching-concept_335657-795.jpg",
      rating: {
        rating: 5,
        total_rating: 44,
      },
      title: "Web Development with PHP & Laravel",
      price: 74.0,
      no_enrollment: 55,
      no_lesson: 24,
      starting_date: "14-05-2025",
      author: {
        img: "https://assets.mycast.io/actor_images/actor-tyson-beckford-135047_large.jpg?1602700938",
        name: "Ashley Coleman",
      },
    },
    {
      _id: 2,
      category: "Design",
      img: "https://asset.uibucket.net/html/ilearning/assets/images/course/course-5.png",
      rating: {
        rating: 4.5,
        total_rating: 44,
      },
      title: "AWS Solutions Architect Association Program",
      price: 34.0,
      no_enrollment: 55,
      no_lesson: 24,
      starting_date: "14-02-2025",
      author: {
        img: "https://assets.mycast.io/actor_images/actor-tyson-beckford-135047_large.jpg?1602700938",
        name: "Ashley Coleman",
      },
    },
    {
      _id: 3,
      category: "Development",
      img: "https://asset.uibucket.net/html/ilearning/assets/images/course/course-4.png",
      rating: {
        rating: 4.5,
        total_rating: 44,
      },
      title: "Learn Figma - UI/UX Desgin Essential Traning",
      price: 34.0,
      no_enrollment: 55,
      no_lesson: 24,
      starting_date: "14-02-2025",
      author: {
        img: "https://assets.mycast.io/actor_images/actor-tyson-beckford-135047_large.jpg?1602700938",
        name: "Ashley Coleman",
      },
    },
    {
      _id: 4,
      category: "Sales Marketing",
      img: "https://img.freepik.com/free-vector/students-using-e-learning-platform-video-laptop-graduation-cap-online-education-platform-e-learning-platform-online-teaching-concept_335657-795.jpg",
      rating: {
        rating: 4.5,
        total_rating: 44,
      },
      title: "AWS Solutions Architect Association Program",
      price: 34.0,
      no_enrollment: 55,
      no_lesson: 24,
      starting_date: "14-02-2025",
      author: {
        img: "https://assets.mycast.io/actor_images/actor-tyson-beckford-135047_large.jpg?1602700938",
        name: "Ashley Coleman",
      },
    },
    {
      _id: 5,
      category: "Data Science",
      img: "https://img.freepik.com/free-vector/students-using-e-learning-platform-video-laptop-graduation-cap-online-education-platform-e-learning-platform-online-teaching-concept_335657-795.jpg",
      rating: {
        rating: 4.5,
        total_rating: 44,
      },
      title: "AWS Solutions Architect Association Program",
      price: 34.0,
      no_enrollment: 55,
      no_lesson: 24,
      starting_date: "14-02-2025",
      author: {
        img: "https://assets.mycast.io/actor_images/actor-tyson-beckford-135047_large.jpg?1602700938",
        name: "Ashley Coleman",
      },
    },
  ];

//   fetch clicked button category data
  const handleCourse = (category='All Courses') => {
    if (category==='All Courses') {
        setCourses(all_courses)
    }else{
// filter data based on category
        const course_filter= all_courses?.filter(course => course.category==category)
        setCourses(course_filter)
    }

  };

  return (
    <div className="space-y-7 my-10 min-h-screen">
      <h1 className="text-4xl font-bold text-center">Popular Courses</h1>
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {
            All_Category?.map((btn,idx)=> <button key={idx}
          className={`btn-sm btn-outline  text-xs sm:text-base sm:btn-md btn ${selectedCategory==btn?"bg-purple-600 text-white":""}  hover:bg-purple-600 hover:text-white hover:border-none`}
          onClick={() => {
            handleCourse(btn) 
            setSelectedCategory(btn)
            setLoading(false)
        }}
        >
         {btn}
        </button>)
        }
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  gap-5  justify-center items-center px-10">
        {loading?<>
        {
            all_courses?.map((course) => (
                <Course_Card key={course._id} course={course}></Course_Card>
              ))
        }
        </>:courses?.map((course) => (
          <Course_Card key={course._id} course={course}></Course_Card>
        ))}
      </div>
      <div className="flex flex-row justify-center items-center">
        <button className="btn btn-outline border-purple-600 border-2 text-purple-600">Explore All Courses</button>
      </div>
    </div>
  );
};

export default Popular_courses;

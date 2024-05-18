import { FaEye, FaRegUserCircle, FaTrash } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";
import User_Rating from "../../Utilities/User_Rating";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { DataContext } from "../../DataProvider/DataProvider";
import Swal from 'sweetalert2'

const Admin_course_card = ({ course }) => {
const axiosSecure=useAxiosSecure()
const {dataFetch}=useContext(DataContext)
//   delete product
const handleDelete = async(id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
  axiosSecure.delete(`/admin/courses/${id}`)
  .then((res) => {
      console.log(res.data);
      if (res.data.deletedCount > 0) {
        dataFetch();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong.",
          icon: "error",
        });
      }
    });}})
  };





  return (
    <>
     
        <div className="rounded-2xl bg-white h-full  border  shadow cursor-pointer ">
          <div className="relative">
            <div className="absolute top-2 right-2 flex gap-5"> <Link to={`/course-details/${course?._id}`}>

                <button className="btn text-xl text-red-500"><FaEye/></button>
            </Link>
                <button onClick={()=>handleDelete(course?._id)} className="btn text-xl text-red-500"><FaTrash/></button>
            </div>
            <img
              src={course?.image}
              alt="course image"
              className=" object-cover h-[229px] w-full rounded-t-2xl"
            />
          </div>
          <div className="p-5  pt-0 space-y-2">
            <div className="">
              <div className="flex flex-row items-center  gap-3 mt-2">
                <span className="font-bold text-amber-500 ">
                  {course?.avg_rating}
                </span>
                <span className="">
                  <User_Rating value={course?.avg_rating}/>
                </span>
                <span className="font-bold">({course?.no_rating})</span>
              </div>
              <h3 className="text-xl font-bold">{course?.title}</h3>
            </div>
            <div className="flex flex-row justify-between items-center py-3">
              <div className="flex flex-row gap-1 justify-between items-center">
                <div className="">
                  <FaRegUserCircle />
                </div>
                <span className="text-xs">Enroll {course?.no_enrollment}</span>
              </div>
              <div className="flex flex-row gap-1 justify-between items-center">
                <div className="">
                  <IoDocumentTextOutline />
                </div>
                <span className="text-xs">{course?.no_lesson} Lesson</span>
              </div>
              <div className="flex flex-row gap-1 justify-between items-center">
                <div className="">
                  <LuAlarmClock />
                </div>
                <span className="text-xs">Start {course?.starting_date}</span>
              </div>
            </div>
            <hr />
            <div className="flex flex-row justify-between items-center gap-5 pt-2">
              <div className="flex flex-row items-center justify-between gap-3">
                <div className="flex flex-row justify-center items-center">
                  <img
                    src={course?.author?.author_img}
                    alt="author image "
                    className="rounded-full w-9 h-9 object-cover"
                  />
                </div>
                <span className=" font-bold">
                  {course?.author?.author_name}
                </span>
              </div>
              <div className="">
                <span className="text-purple-600 text-2xl font-bold">
                  ${course?.price}
                </span>
              </div>
            </div>
          </div>
        </div>
  
    </>
  );
};

export default Admin_course_card;
Admin_course_card.propTypes = {
  course: PropTypes.object.isRequired,
  rating: PropTypes.number.isRequired,
  total_rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  no_enrollment: PropTypes.number.isRequired,
  no_lesson: PropTypes.number.isRequired,
  starting_date: PropTypes.string.isRequired,
};

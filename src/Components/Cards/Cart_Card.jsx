import { FaEye, FaRegUserCircle, FaTrash } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";
import User_Rating from "../../Utilities/User_Rating";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Cart_Card = ({ course, dataFetch, setTotalAmount, totalAmount }) => {
  const axiosSecure = useAxiosSecure();

  const handleDelete = async () => {
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
        axiosSecure.delete(`/cart/${course?._id}`).then((res) => {
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
        });
      }
    });
  };

  return (
    <div
      onChange={() => setTotalAmount(totalAmount + parseInt(course?.price))}
      className="rounded-2xl bg-white flex items-center gap-1 mb-5  border  shadow  relative"
    >
      <div className="absolute top-2 right-2 ">
        <div className="">
          <Link to={`/course-details/${course?._id}`} className="">
            <button className="btn text-xl  cursor-pointer bg-transparent text-purple-500">
              <FaEye />
            </button>
          </Link>
        </div>
        <div className="mt-2 ">
          <button
            onClick={() => handleDelete()}
            className="btn cursor-pointer text-xl bg-transparent text-red-500"
          >
            <FaTrash />
          </button>
        </div>
      </div>
      <div className="">
        <img
          src={course?.image}
          alt="course image"
          className=" object-cover h-[200px] w-full rounded-l-2xl"
        />
      </div>
      <div className="p-5  pt-0 space-y-2">
        <div className="">
          <div className="flex flex-row items-center  gap-3">
            <span className="font-bold text-amber-500">
              {course?.avg_rating}
            </span>
            <span className="">
              <User_Rating />
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
            <span className=" font-bold">{course?.author?.author_name}</span>
          </div>

          <div className="">
            <span className="text-purple-600 text-2xl font-bold">
              ${course?.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart_Card;

Cart_Card.propTypes = {
  totalAmount: PropTypes.number.isRequired,
  dataFetch: PropTypes.func.isRequired,
  course: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    avg_rating: PropTypes.number.isRequired,
    no_rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    no_enrollment: PropTypes.number.isRequired,
    no_lesson: PropTypes.number.isRequired,
    starting_date: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    author: PropTypes.shape({
      author_img: PropTypes.string.isRequired,
      author_name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  setTotalAmount: PropTypes.func.isRequired,
};

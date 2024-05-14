import { FaRegUserCircle } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";
import User_Rating from "../../Utilities/User_Rating";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Course_Card = ({ course }) => {
  return (
    <>
      <Link to={`/course-details/${course?._id}`}>
        <div className="rounded-2xl bg-white h-full  border  shadow cursor-pointer ">
          <div className="">
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
      </Link>
    </>
  );
};

export default Course_Card;
Course_Card.propTypes = {
  course: PropTypes.object.isRequired,
  rating: PropTypes.number.isRequired,
  total_rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  no_enrollment: PropTypes.number.isRequired,
  no_lesson: PropTypes.number.isRequired,
  starting_date: PropTypes.string.isRequired,
};

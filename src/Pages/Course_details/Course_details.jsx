import { useParams } from "react-router-dom";
import Youtube_video_controler from "../../Utilities/Youtube_video_controler/Youtube_video_controler";
import { useContext, useEffect, useState } from "react";
import { LuBadgeCheck } from "react-icons/lu";
import Students_Feedback from "../../Components/Students_Feedback/Students_Feedback";
import Newsletter from "../../Components/Newsletter/Newsletter";
import { FaCartPlus } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import ResponsiveYouTube from "../../Utilities/ResponsiveYouTube/ResponsiveYouTube";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../DataProvider/DataProvider";

const Course_details = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const { allData,dataFetch } = useContext(DataContext);
  const [course, setCourse] = useState({});
  const [yt_video, setYt_video] = useState("aNJ21b_ZQF0");
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  useEffect(() => {
    axiosPublic.get(`/users/courses/${id}`).then((res) => {
      setCourse(res.data);
      setYt_video(course?.intro?.videoId);
    });
  }, [axiosPublic, id, course?.intro?.videoId]);

  // check user profile is purchased this course or not
  const isCoursePurchasedAndPaid = (specificCourseId) => {
    // Find the specific course in the purchaseList array
    const specificCourse = allData[2]?.purchaseList?.find(
      (course) => course.course_id === specificCourseId
    );

    // Check if the specific course is found and both purchase and payment are true
    return specificCourse && specificCourse.purchase && specificCourse.payment;
  };

  const isPurchasedAndPaid = isCoursePurchasedAndPaid(id);

  // add to cart function
  const handleCart = async () => {
    if (user) {
      const {_id, ...rest} = course;
      const res = await axiosPublic.post(`/cart`, {
        ...rest, // Spread the rest of the properties
        course_id: course?._id, // Include the course_id separately
        email: user?.email,
      });
      
      if (res.data.insertedId) {
        console.log(res.data);
        toast.success(`${course?.title} has been added to the cart.`);
        dataFetch()
      } else if (res.data.message) {
        toast.error(`${course?.title} ${res.data.message} in the cart`);
      }
    } else {
      navigate("/system-access/signIn");
    }
  };

  return (
    <>
      {/*  */}
      <div className="m-10  bg-purple-200 sm:flex flex-row gap-5  justify-between items-center p-10 rounded-lg mt-5">
        <div className=" space-y-5">
          <div className="bg-white rounded-md  inline-block px-4 py-3">
            <h3 className="sm:text-xl ">
              {"Home > Courses > Course Details"}{" "}
            </h3>
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold">Course Details</h1>
        </div>
        <div className="hidden sm:flex">
          <img
            src="https://asset.uibucket.net/html/ilearning/assets/images/banner/courses.png"
            alt=""
            className=""
          />
        </div>
      </div>

      {/*-------  */}

      {isPurchasedAndPaid ? (
        <div className="h-screen flex justify-between gap-10 items-center">
          <div className="">
            <Youtube_video_controler vId={yt_video} />
          </div>

          <div className="">
            <h1 className="text-left text-4xl font-bold">Course Playlists</h1>
            <div className="h-[75vh] overflow-y-auto p-5 bg-slate-100 mt-5 rounded-xl">
              <div className="space-y-5 flex flex-col justify-center items-start    ">
                {course?.playlist?.map((vid, idx) => {
                  return (
                    <div
                      className="flex justify-center items-center gap-5 bg-white p-2 cursor-pointer rounded-md"
                      key={idx}
                      onClick={() => setYt_video(vid?.videoId)}
                    >
                      <div className="w-20 h-20">
                        <img
                          className="w-20 h-20 object-fill"
                          src={`https://img.youtube.com/vi/${vid?.videoId}/hqdefault.jpg`}
                          alt=""
                        />
                      </div>
                      <div className="">
                        <h3 className="font-semibold text-lg">{vid?.title}</h3>
                        <p className="text-red-300">{vid?.duration}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-5 grid grid-cols-2 lg:grid-cols-3 justify-between items-center gap-5 my-20 border rounded-xl p-5">
          <div className="col-span-2 flex justify-center items-center">
            {/* <YouTube videoId={'aNJ21b_ZQF0'} /> */}
            <ResponsiveYouTube videoId={course?.intro?.videoId} />
          </div>
          <div className="col-span-2 lg:col-span-1 flex justify-center items-center">
            <div className="space-y-5 border p-5 rounded-lg">
              <h1 className="text-3xl font-bold ">{course?.title}</h1>
              <hr />
              <div className="flex justify-between items-center">
                <h3 className="">Regular Price</h3>
                <span className="text-3xl font-bold text-purple-600">
                  $ {course?.price}
                </span>
              </div>
              <hr />
              <div className="">
                <ul className=" ml-7 space-y-2 mt-5">
                  <li className="flex items-center gap-4">
                    <span className="bg-[#F7F5FA]">
                      <SiTicktick className="text-[#FF897A]" />
                    </span>
                    Lorem ipsum dolor sit amet consectetur.
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="bg-[#F7F5FA]">
                      <SiTicktick className="text-[#FF897A]" />
                    </span>
                    dorem ipsum dolor sit amet .
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="bg-[#F7F5FA]">
                      <SiTicktick className="text-[#FF897A]" />
                    </span>
                    ipsum dolor sit amet.
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="bg-[#F7F5FA]">
                      <SiTicktick className="text-[#FF897A]" />
                    </span>
                    Lorem ipsum sit amet consectetur.
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="bg-[#F7F5FA]">
                      <SiTicktick className="text-[#FF897A]" />
                    </span>
                    dolorLorem ipsum sit amet consectetur.
                  </li>
                </ul>
              </div>
              <button
                onClick={() => handleCart()}
                className="btn w-full  text-white mt-3 bg-purple-500 text-xl"
              >
                <FaCartPlus className="text-2xl" /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      {/*  --------------*/}
      <div className="space-y-5 mb-10">
        <h1 className="text-4xl font-semibold">Course Details</h1>
        <p className="text-slate-400 text-justify">
          Learning programming is hard. Especially in the beginning. Don't waste
          your time going at it alone. As my mentee Chris put it. The sessions
          with Jascha have been more valuable than eight weeks of my professor's
          lectures. It's money much better spent! Especially in the beginning.
          Don't waste your time going at it alone. As my mentee Chris put it.
          The sessions with Jascha have been more valuable than eight weeks of
          my professor's lectures. Beginning. Don't waste your time going at it
          alone. As my mentee Chris put it. The sessions with Jascha have been
          more valuable than eight weeks of my professor's lectures.
        </p>
        <h1 className="text-4xl font-semibold">Certification</h1>
        <p className="text-slate-400 text-justify">
          Learning programming is hard. Especially in the beginning. Don't waste
          your time going at it alone. As my mentee Chris put it. The sessions
          with Jascha have been more valuable than eight weeks of my professor's
          lectures. It's money much better spent! Especially in the beginning.
          Don't waste your time going at it alone. As my mentee Chris put it.
          The sessions with Jascha have been more valuable than eight weeks of
          my professor's lectures. Beginning. Don't waste your time going at it
          alone. As my mentee Chris put it. The sessions with Jascha have been
          more valuable than eight weeks of my professor's lectures.
        </p>
      </div>
      {/* ------- */}
      <div className="space-y-5 mb-10">
        <h1 className="text-4xl font-bold">What you'll learn</h1>

        <div className="space-y-3">
          <h3 className="flex  flex-row items-center  gap-3">
            <span className="p-2 rounded-full text-white bg-[#FF897A] text-xl">
              {" "}
              <LuBadgeCheck />
            </span>{" "}
            <span className="text-lg ">
              You will be able to program in Python professionally
            </span>
          </h3>
          <h3 className="flex  flex-row items-center  gap-3">
            <span className="p-2 rounded-full text-white bg-[#FF897A] text-xl">
              {" "}
              <LuBadgeCheck />
            </span>{" "}
            <span className="text-lg ">
              Create a portfolio of 100 Python projects
            </span>
          </h3>
          <h3 className="flex  flex-row items-center  gap-3">
            <span className="p-2 rounded-full text-white bg-[#FF897A] text-xl">
              {" "}
              <LuBadgeCheck />
            </span>{" "}
            <span className="text-lg ">
              Be able to use Python for data science and machine learning
            </span>
          </h3>
          <h3 className="flex  flex-row items-center  gap-3">
            <span className="p-2 rounded-full text-white bg-[#FF897A] text-xl">
              {" "}
              <LuBadgeCheck />
            </span>{" "}
            <span className="text-lg ">
              Build GUIs and Desktop applications with Python
            </span>
          </h3>
          <h3 className="flex  flex-row items-center  gap-3">
            <span className="p-2 rounded-full text-white bg-[#FF897A] text-xl">
              {" "}
              <LuBadgeCheck />
            </span>{" "}
            <span className="text-lg ">
              Be able to build fully fledged websites and web apps with Python
            </span>
          </h3>
        </div>
      </div>
      {/* --------- */}

      <Students_Feedback />
      {/* ----------- */}

      <Newsletter />
    </>
  );
};

export default Course_details;

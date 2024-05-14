import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import Youtube_video_controler from "../../Utilities/Youtube_video_controler/Youtube_video_controler";
import { useState } from "react";
import { LuBadgeCheck } from "react-icons/lu";
import Students_Feedback from "../../Components/Students_Feedback/Students_Feedback";
import Newsletter from "../../Components/Newsletter/Newsletter";

const Course_details = () => {
  const { id } = useParams();
  const [yt_video, setYt_video] = useState("aNJ21b_ZQF0");
  const playlist = [
    {
      videoId: "ED2JZahFo6w",
      title: "শোলমাছের ঝাল | Double Gopal | Full Episode",
      duration: "43:50",
    },
    {
      videoId: "A3mz0swGakw",
      title:
        "মন্ত্রীর দিতিয় বিয়ে | Gopal Bhar ( Bengali ) | Double Gopal | Full Episode",
      duration: "45:15",
    },
    {
      videoId: "iJWqAzdfUJY",
      title:
        "বোকা ডাকাত | Gopal Bhar ( Bengali ) | Double Gopal | Full Episode",
      duration: "01:50",
    },
    {
      videoId: "slv1t4SSc9k",
      title:
        "গোপাল বিরক্ত হয় | Fun Time with Gopal | Gopal Bhar | Full Episode",
      duration: "01:50",
    },
    {
      videoId: "pA8eM-L9Z6Q",
      title: "দোষ-এর ভর | Gopal Bhar | Episode - 978",
      duration: "01:50",
    },
    {
      videoId: "slv1t4SSc9k",
      title:
        "গোপাল বিরক্ত হয় | Fun Time with Gopal | Gopal Bhar | Full Episode",
      duration: "01:50",
    },
    {
      videoId: "pA8eM-L9Z6Q",
      title: "দোষ-এর ভর | Gopal Bhar | Episode - 978",
      duration: "01:50",
    },
    {
      videoId: "slv1t4SSc9k",
      title:
        "গোপাল বিরক্ত হয় | Fun Time with Gopal | Gopal Bhar | Full Episode",
      duration: "01:50",
    },
    {
      videoId: "pA8eM-L9Z6Q",
      title: "দোষ-এর ভর | Gopal Bhar | Episode - 978",
      duration: "01:50",
    },
  ];

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

      <div className="h-screen flex justify-between gap-10 items-center">
        <div className="">
          <Youtube_video_controler vId={yt_video} />
        </div>
        
          <div className="">
            <h1 className="text-left text-4xl font-bold">Course Playlists</h1>
            <div className="h-[75vh] overflow-y-auto p-5 bg-slate-100 mt-5 rounded-xl">
              <div className="space-y-5 flex flex-col justify-center items-start    ">
                {playlist?.map((vid) => {
                  return (
                    <div
                      className="flex justify-center items-center gap-5 bg-white p-2 cursor-pointer rounded-md"
                      key={vid?.videoId}
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
      {/*  ------------*/}
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

      <Newsletter/>
    </>
  );
};

export default Course_details;

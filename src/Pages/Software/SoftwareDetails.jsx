import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { LuBadgeCheck } from "react-icons/lu";
import { Link, useNavigate, useParams } from "react-router-dom";
import User_Rating from "../../Utilities/User_Rating";
import { SiTicktick } from "react-icons/si";
import { FaCartPlus } from "react-icons/fa6";
import { VscPreview } from "react-icons/vsc";
import { CiImageOn } from "react-icons/ci";
import { LuExternalLink } from "react-icons/lu";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
const SoftwareDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const [all_softwares, setSoftwares] = useState([]);
  const [preview, setPreview] = useState(false);
  const [matched_software, setmatched_softwares] = useState({});
   // add to cart function
   const handleCart = async () => {
    if (user) {
      const res = await axiosPublic.post(`/cart`, {
        ...matched_software,
        email: user?.email,
      });
      if (res.data.insertedId) {
        console.log(res.data);
        toast.success(`${matched_software?.title} has been added to the cart.`);
      } else if (res.data.message) {
        toast.error(`${matched_software?.title} ${res.data.message} in the cart`);
      }
    } else {
      navigate("/system-access/signIn");
    }
  };
  //   creating hover effect
  const handelPreview = () => {
    setPreview(!preview);
  };
  //
  useEffect(() => {
    axiosPublic.get(`/all-softwares`).then((res) => {
      setSoftwares(res.data);
    });
    axiosPublic.get(`/all-softwares/${id}`).then((res) => {
      setmatched_softwares(res.data);
    });
  }, [axiosPublic, id]);
  //   console.log(all_softwares,matched_softwares)
  return (
    <section>
      <div
        id="front"
        className="grid grid-cols-1 md:grid-cols-5 gap-1 border mt-10 cursor-pointer"
      >
        <div className="col-span-3 m-5 rounded-xl bg-black relative">
          <img
            onMouseOver={handelPreview}
            onMouseOut={handelPreview}
            onClick={() => document.getElementById("my_modal_4").showModal()}
            className="w-full lg:h-[500px] rounded-lg  hover:opacity-35"
            src={matched_software.img}
            alt=""
          />
          <div className="flex gap-5 bg-white text-white font- justify-center items-center py-3">
            <Link target="_blank" to={matched_software?.liveLink}>
            <p className="px-8 py-1 bg-[#82B440] rounded-lg flex justify-center items-center gap-2 text-lg">Live Link <LuExternalLink /></p>
            </Link>
            <p className="bg-[#0084B4] px-8 py-1 rounded-lg flex justify-center items-center gap-2 text-lg">Screenshots <CiImageOn className="mt-1 text-xl" /></p>
          </div>
          <div
            className={
              preview
                ? `absolute ml-80  flex flex-col -mt-80 justify-center items-center`
                : `absolute -ml-72  flex flex-col -mt-[100px] justify-center items-center`
            }
          >
            <VscPreview className="text-7xl text-white" />
            <p className="font-bold text-white">Live Preview</p>
          </div>
          <dialog id="my_modal_4" className="">
            <div className="" style={{ width: "80vw", height: "80vh" }}>
              <form method="">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <div className="p-6 flex justify-center items-center">
                <iframe
                  className="w-[70vw] h-[70vh]"
                  src={`https://www.youtube.com/embed/${matched_software?.videoId}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </dialog>
        </div>
        <div className="col-span-2 flex justify-center items-center">
          <div className="space-y-5 border p-5 rounded-lg">
            <div className="flex justify-between items-center">
              <h3 className="">Regular Price</h3>
              <span className="text-3xl font-bold text-purple-600">
                ${matched_software.price}
              </span>
            </div>
            <div className="flex justify-start items-center gap-5">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src="https://assets.mycast.io/actor_images/actor-tyson-beckford-135047_large.jpg?1602700938"
                alt=""
              />
              <div>
                <h3 className="text-xl font-bold">{matched_software.author}</h3>
                <p className="text-sm">Verified Seller</p>
              </div>
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
            <button onClick={handleCart} className="btn w-full  text-white mt-3 bg-purple-500 text-xl">
              <FaCartPlus className="text-2xl" /> Add to Cart
            </button>
          </div>
        </div>
      </div>
      {/* Details section */}
      <div className="mt-10">
        <h1 className="text-4xl font-bold">Software Details:</h1>
        <p className="py-5">{matched_software?.description}</p>
        <hr />
        <div className="space-y-5 mb-10">
          <h1 className="text-4xl font-bold">What you will learn</h1>
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
      </div>
      {/* Best course section */}
      <div>
        <h1 className="my-5 text-4xl font-bold text-center">
          ~~Popular Softwares~~
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {all_softwares?.map((i) => (
            <a key={i._id} href="front">
              <Link to={`/software/${i.category}/${i._id}`}>
                <div className="card h-[600px] bg-base-100 shadow-xl cursor-pointer mx-5">
                  <figure className="">
                    <img className="" src={i.img} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-left">
                      <h1>{i.title}</h1>
                    </h2>
                    <div className="flex justify-start items-center gap-5">
                      <div className="badge text-white bg-black">New</div>
                      <div className="badge text-white bg-black">
                        {i.category}
                      </div>
                    </div>
                    <p>{i.description.slice(0, 116)}</p>
                    <div className="card-actions justify-start flex flex-col">
                      <p className="text-lg font-bold text-yellow-500 flex justify-center items-center">
                        <div className="flex gap-2 justify-center items-center">
                          {i.rating} <User_Rating />
                        </div>
                      </p>
                      <hr className="w-full border-[1px]" />
                      <div className="flex justify-center items-center gap-20">
                        <div className="flex justify-center items-center gap-5">
                          <img
                            className="w-10 h-10 rounded-full object-cover"
                            src="https://assets.mycast.io/actor_images/actor-tyson-beckford-135047_large.jpg?1602700938"
                            alt=""
                          />
                          <div>
                            <h3 className="text-xl font-bold">{i.author}</h3>
                            <p className="text-sm">Verified Seller</p>
                          </div>
                        </div>
                        <div>
                          <h1 className="text-purple-600 text-2xl font-bold">
                            ${i.price}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SoftwareDetails;

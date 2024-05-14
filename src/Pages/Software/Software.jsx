import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import User_Rating from "../../Utilities/User_Rating";
import Students_Feedback from "../../Components/Students_Feedback/Students_Feedback";
import Software_card from "../../Components/Cards/Software_card";

const Software = () => {
  const axiosPublic = useAxiosPublic();
  const [software_collection, setSoftware] = useState([]);
  const { categories } = useParams();
  console.log(categories);
  useEffect(() => {
    axiosPublic.get(`/software/${categories}`).then((res) => {
      setSoftware(res.data);
    });
  }, [categories, axiosPublic]);
  return (
    <section>
      <div className="relaive flex justify-center items-center mb-20">
        <img src="https://i.ibb.co/zPjJzvV/banner.webp" alt="" />
        <h1 className="absolute font-medium text-xl mb-10">Home - Softwares</h1>
        <h1 className="absolute font-bold text-4xl mt-10">
          Check out our Softwares
        </h1>
      </div>
      <div className="">
        <h1 className="text-4xl font-bold text-left my-5 mb-10">
          Our Best {categories} Collection
        </h1>
        {/* Software card section */}
        <div className="grid grid-cols-3 max-w-6xl mx-auto gap-5">
          {software_collection?.map((i) => (
            <Software_card key={i._id} i={i} />
          ))}
        </div>
      </div>
      {/* Student feedback section */}
      <div>
        <Students_Feedback />
      </div>
    </section>
  );
};
export default Software;

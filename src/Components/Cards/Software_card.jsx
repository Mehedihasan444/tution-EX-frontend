import { Link } from "react-router-dom";
import User_Rating from "../../Utilities/User_Rating";

const Software_card = ({ i }) => {
  return (
    <Link key={i?._id} to={`/software/${i?.category}/${i?._id}`}>
      <div className="card bg-base-100 shadow-xl cursor-pointer">
        <figure className="">
          <img className="w-full h-60 object-cover" src={i?.img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-left">
            <h1>{i?.title}</h1>
          </h2>
          <div className="flex justify-start items-center gap-5">
            <div className="badge text-white bg-black">New</div>
            <div className="badge text-white bg-black">{i?.category}</div>
          </div>
          <p>{i?.description.slice(0, 116)}</p>
          <div className="card-actions justify-start flex flex-col">
            <p className="text-lg font-bold text-yellow-500 flex justify-center items-center">
              <div className="flex gap-2 justify-center items-center">
                {i?.rating} <User_Rating />
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
                  <h3 className="text-xl font-bold">{i?.author}</h3>
                  <p className="text-sm">Verified Seller</p>
                </div>
              </div>
              <div>
                <h1 className="text-purple-600 text-2xl font-bold">
                  ${i?.price}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Software_card;

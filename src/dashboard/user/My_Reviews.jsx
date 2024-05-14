import { useContext, useEffect, useState } from "react";
import Review_card from "../../components/Review_card/Review_card";
import { DataContext } from "../../DataProvider/DataProvider";
import useAuth from "../../Hooks/useAuth";

const My_Reviews = () => {

  const {allData, DataFetch } = useContext(DataContext);

  return (
    <div className="text-center">
      <p className="">Given Product Reviews</p>
      <h1 className="text-4xl font-bold ">My Reviews</h1>
      <div className="overflow-y-auto h-[80vh]">
        <div className="p-5 sm:p-0 sm:w-[70vw]" onChange={() => DataFetch()}>
          {allData[11]?.map((review) => (
            <Review_card key={review?._id} review={review?.review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default My_Reviews;

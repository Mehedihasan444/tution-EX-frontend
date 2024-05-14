// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Feedback_Card from "../Cards/Feedback_Card";

const Students_Feedback = () => {
  return (
    <div className="relative my-20">
      <div className="absolute z-50">
        <h1 className="text-5xl font-bold">Feedback From Students</h1>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={40}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide>
          <div className="">
            <Feedback_Card />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <Feedback_Card />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <Feedback_Card />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <Feedback_Card />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <Feedback_Card />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <Feedback_Card />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <Feedback_Card />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mx-10">
            <Feedback_Card />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Students_Feedback;

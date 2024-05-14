import img from "../../assets/banner/hero-bg.jpg";
import slide1 from '../../assets/banner/hero-people.jpg'
import slide2 from '../../assets/banner/hero-people2.jpg'
import slide3 from '../../assets/banner/hero-people3.jpg'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <section className="">
      <div
        className="w-full h-[90vh] rounded-lg flex mt-10 justify-center items-center"
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="md:space-y-5 space-y-3 ml-5 md:ml-10 text-center">
          <h3 className="text-xs bg-red-600 font-semibold text-white text-center px-5 py-1 rounded-full inline-block  mb-2">
            LearnIT
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 text-center">
            Grow your skills to advance <br /> your career path
          </h2>
          <p className="text-sm text-white mb-4">
            LearnIT is a Global training provider based across the UK that
            specialises in accredited.
          </p>
          <div className="flex gap-5 justify-center">
            <button className="btn bg-[#AD6CF5] font-bold text-white border-none">
              Get Started
            </button>
            <button className="btn">Our Courses</button>
          </div>
        </div>
      </div>
      <div className="">
      <div className="-mt-40">
        <Swiper
          // centeredSlides={true}
          pagination={{
            dynamicBullets: true,
          }}

          slidesPerView={1}
        // spaceBetween={40}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className=""><img className="md:w-[800px] mx-auto md:h-[500px] rounded-xl" src={slide2} alt="" /></SwiperSlide>
          <SwiperSlide className=""><img className="md:w-[800px] mx-auto md:h-[500px] rounded-xl" src={slide1} alt="" /></SwiperSlide>
          <SwiperSlide className=""><img className="md:w-[800px] mx-auto md:h-[500px] rounded-xl" src={slide3} alt="" /></SwiperSlide>
        </Swiper>
      </div>
      </div>
    </section>
  );
};
export default Banner;

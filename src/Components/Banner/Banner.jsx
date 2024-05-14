const Banner = () => {
  return (
    <section className="flex ">
      <div className="flex-1 w-full h-[90vh] rounded-lg flex mt-10 justify-start items-center">
        <div className=" md:space-y-5 space-y-3 ml-5 md:ml-10 ">
          <h3 className="text-xs bg-red-600 font-semibold text-white  px-5 py-1 rounded-full inline-block  mb-2">
            TutionEX
          </h3>
          <h2 className="text-3xl tracking-wide md:text-5xl font-bold  mb-2 ">
            Improve Your Online Learning Experience Better Instantly
          </h2>
          <p className="text-sm  mb-4">
          TutionEX is a Global training provider based across the UK that
            specialises in accredited.
          </p>
          <div className="flex gap-5 justify-start">
            <a href="/shop">
            <button className="btn bg-[#AD6CF5] font-bold text-white border-none">
              Get Started
            </button>

            </a>
            <a href="/shop">

            <button className="btn">Browse Courses</button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1 ">
        <img
          src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsb2ZmaWNlMTJfcGhvdG9fb2ZfeW91bmdfaW5kaWFuX2dpcmxfaG9sZGluZ19zdHVkZW50X2JhY19hNDdmMzk1OS0zZDAyLTRiZWEtYTEzOS1lYzI0ZjdhNjEwZGFfMS5qcGc.jpg"
          alt=""
          className=""
        />
      </div>
    </section>
  );
};
export default Banner;

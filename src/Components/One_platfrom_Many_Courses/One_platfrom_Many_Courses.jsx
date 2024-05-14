import { LuBadgeCheck } from "react-icons/lu";

const One_platform_Many_Courses = () => {

    // static data
  const data = {
    title: "One platform, Many courses and E-book For You",
    paragraph:
      "Education also provides educational consulting services for student-client who want to study in canada, the application process. Provides educational consulting services for student -client who want to study in require help with the application process.",
    features: [
      "Easy Online Learning Platform",
      "Friendly Environments & Teachers",
    ],
    img: "https://img.freepik.com/premium-photo/indian-students-isolated-white-background_988871-5.jpg",
    tag: "Grow skill",
  };


  
  return (
    <section
      id=""
      className="sm:flex flex-row justify-between items-center gap-5 sm:h-screen px-5"
    >
      <div className="flex-1 space-y-5">
        <h1 className="font-bold text-3xl  lg:text-5xl ">{data?.title}</h1>
        <p className="text-justify">{data?.paragraph}</p>
        {data?.features?.map((i, idx) => (
          <h3 className="flex  flex-row items-center  gap-3" key={idx}>
          <span className="p-2 rounded-full text-white bg-orange-500 text-3xl"> <LuBadgeCheck /></span> <span className="font-bold text-lg">{i}</span>
          </h3>
        ))}
      </div>
      <div className="flex-1 flex flex-row justify-center items-center">
        <img src={data?.img} alt="" className="" />
      </div>
    </section>
  );
};

export default One_platform_Many_Courses;

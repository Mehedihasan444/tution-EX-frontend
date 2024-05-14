import webApp from "../../assets/software/app-development.png";
import wordpress from "../../assets/software/wordpress.png";
import photo from "../../assets/software/photoshop.png";
import custom from "../../assets/software/custom-web=app.png";
import { Link } from "react-router-dom";
const Softwares = () => {
  return (
    <section className="mt-10 space-y-3">
      <h1 className="text-6xl font-bold text-center">
        Our Software Collection
      </h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint a
        cupiditate <br /> excepturi eos deserunt id natus fuga odio qui aut.
      </p>
      <div className="grid grid-cols-4 mx-auto bg-[#F7F5FA] p-16 gap-5">
        <Link to={`/software/${"web-app"}`}>
          <div className="bg-white p-7 flex flex-col justify-center items-center rounded-lg cursor-pointer hover:scale-105">
            <div className="p-5 rounded-full bg-[#3d98e219] py-6">
              <img src={webApp} alt="" />
            </div>
            <h1 className="text-2xl font-bold">Web App</h1>
            <p className="font-bold">12 Course</p>
          </div>
        </Link>
        <Link to={`/software/${"wordpress"}`}>
          <div className="bg-white p-7 flex flex-col justify-center items-center rounded-lg cursor-pointer hover:scale-105">
            <div className="p-5 rounded-full bg-[#FFF0EE] py-6">
              <img src={wordpress} alt="" />
            </div>
            <h1 className="text-2xl font-bold">WordPress</h1>
            <p className="font-bold">9 Course</p>
          </div>
        </Link>
        <Link to={`/software/${"custom-web-app"}`}>
          <div className="bg-white p-7 flex flex-col justify-center items-center rounded-lg cursor-pointer hover:scale-105">
            <div className="p-5 rounded-full bg-[#3d98e219] py-6">
              <img src={custom} alt="" />
            </div>
            <h1 className="text-2xl font-bold">Custom Web app</h1>
            <p className="font-bold">3 Course</p>
          </div>
        </Link>
        <Link to={`/software/${"photoshop"}`}>
          <div className="bg-white p-7 flex flex-col justify-center items-center rounded-lg cursor-pointer hover:scale-105">
            <div className="p-5 rounded-full bg-[#FFF0EE] py-6">
              <img src={photo} alt="" />
            </div>
            <h1 className="text-2xl font-bold">PhotoShop</h1>
            <p className="font-bold">6 Course</p>
          </div>
        </Link>
      </div>
    </section>
  );
};
export default Softwares;

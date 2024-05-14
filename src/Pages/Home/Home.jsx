import Banner from "../../Components/Banner/Banner";
import Categories from "../../Components/Categories/Categories";
import One_platform_Many_Courses from "../../Components/One_platfrom_Many_Courses/One_platfrom_Many_Courses";
import Our_Experts from "../../Components/Our_Experts/Our_Experts";
import Popular_courses from "../../Components/Popular_courses/Popular_courses";
import Students_Feedback from "../../Components/Students_Feedback/Students_Feedback";
import Why_Choose_Us from "../../Components/Why_Choose_Us/Why_Choose_Us";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <Popular_courses />
     
      <One_platform_Many_Courses />
      <Why_Choose_Us />
      <Our_Experts />
      <Students_Feedback />

    </div>
  );
};

export default Home;

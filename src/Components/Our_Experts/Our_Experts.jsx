import Team_Member_Card from "../Cards/Team_Member_Card";

const Our_Experts = () => {
  const data = [
    {
      name: "Mario Fleming",
      img: "https://cdn.mos.cms.futurecdn.net/UAStwz3iBUsYghdn9cT9bW.jpeg",
      position: "Instructor",
    },
    {
      name: "Kimberly walker",
      img: "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2021/04/team-1.jpg",
      position: "Instructor",
    },
    {
      name: "Gilberto walker",
      img: "https://images.squarespace-cdn.com/content/v1/590cc57ebe659408c68d77fd/1539204722132-3G1X2T8BL4WXUFE5X533/Lyndsey+Scott.png",
      position: "Instructor",
    },
    {
      name: "Rhodes",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnHkAba8WfqfKMg6-SBbhr9rq6kyy9DFK554ndkZmRLQ&s",
      position: "Instructor",
    },
  ];

  return (
    <div className="my-20 space-y-5">
      <h1 className="text-4xl font-bold text-center my-10">
        Our Industry Experts
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center my-20 gap-5">
        {data?.map((expert, i) => (
          <Team_Member_Card expert={expert} key={i}></Team_Member_Card>
        ))}
      </div>
    </div>
  );
};

export default Our_Experts;

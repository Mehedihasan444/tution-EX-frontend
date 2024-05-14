import Team_Member_Card from "../Cards/Team_Member_Card";

const Our_Experts = () => {
  const data = [
    {
      name: "Jonathan Kimble",
      img: "https://i.ibb.co/kDxSpZr/New-01.webp",
      position: "Instructor",
    },
    {
      name: "Unkel Roger",
      img: "https://i.ibb.co/FVPCXJT/New-2.webp",
      position: "Instructor",
    },
    {
      name: "Megnas Nakamura",
      img: "https://i.ibb.co/RTL2pny/New-3.webp",
      position: "Instructor",
    },
    {
      name: "Rhodes Helgot",
      img: "https://i.ibb.co/h9nYq4W/New-4.webp",
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

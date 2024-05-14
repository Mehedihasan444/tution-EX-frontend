

const Why_Choose_Us = () => {

// static data
  const data = [
    {
      img: "https://asset.uibucket.net/html/ilearning/assets/images/icons/choose-us-1.svg",
      title: "Expert Instructor",
      description:
        "onvallis vivamus at cras porta nibh velit quis nostrud exercitation ullamco.",
    },
    {
      img: "https://asset.uibucket.net/html/ilearning/assets/images/icons/choose-us-2.svg",
      title: "Flexible Learning",
      description:
        "onvallis vivamus at cras porta nibh velit quis nostrud exercitation ullamco.",
    },
    {
      img: "https://asset.uibucket.net/html/ilearning/assets/images/icons/choose-us-3.svg",
      title: "Educator Support",
      description:
        "onvallis vivamus at cras porta nibh velit quis nostrud exercitation ullamco.",
    },
  ];

  return (
    <div className="my-20 space-y-5">
      <h1 className="text-4xl font-bold text-center my-10">Why Choose Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center px-5">
        {data?.map((card, idx) => (
          <div
            className="p-5 flex flex-col items-center justify-center text-center space-y-3 border shadow max-w-[400px]"
            key={idx}
          >
            <div className="">
          
              <img src={card?.img} alt="" className="" />
            </div>
            <h3 className="text-xl font-bold">{card?.title}</h3>
            <p className="">{card?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why_Choose_Us;

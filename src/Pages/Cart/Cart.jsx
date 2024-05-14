import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { DataContext } from "../../DataProvider/DataProvider";
import Cart_Card from "../../Components/Cards/Cart_Card";

const Cart = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { allData, dataFetch } = useContext(DataContext);
  const [totalAmount, setTotalAmount] = useState(0);

  // Genarate todays date
  const date = new Date();

  useEffect(() => {
    let bill = 0;
    for (let i = 0; i < allData[1]?.length; i++) {
      bill += parseInt(allData[1][i].price);
    }
    setTotalAmount(bill);
    dataFetch();
  }, [allData, dataFetch]);




  // payment function
  const handlePayment = async () => {
    const info = {
      total_bill: totalAmount,
      discount: 0,
      phone: "",
      delivery_location: "",
      ordered_date: date,
      quantity: 0,
      userName: user?.displayName,
      userEmail: user?.email,
      status: "pending",
      payment: "pending",
      transactionId: "",
      courses: allData[1],
    };
    const res = await axiosSecure.post("/payment", info);
    window.location.replace(res.data.url);
  };

  return (
    <div className="relative h-screen w-full flex justify-between gap-5">
      <div className="">
        <h1 className="text-xl font-semibold max-w-5xl mx-auto text-center mt-5">
          Available items: {allData[1]?.length}
        </h1>
        <div className="divider max-w-5xl mx-auto"></div>
        <div className="h-[85vh] overflow-y-auto">
          <div className="grid grid-cols-1 justify-center items-center px-5">
            <div className="space-y-5 my-10 max-w-5xl mx-auto mb-40">
              {allData[1]?.length == 0 ? (
                <div className="">
                  <h1 className="text-xl font-semibold">
                    You have not added any product yet!
                  </h1>
                </div>
              ) : (
                allData[1]?.map((item) => (
                  <Cart_Card
                    key={item._id}
                    course={item}
                    dataFetch={dataFetch}
                    setTotalAmount={setTotalAmount}
                    totalAmount={totalAmount}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/3">
        <div
          className=" border p-5 space-y-5 px-5 w-full mr-5"
          style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 3px 0px" }}
        >
          <h3 className="text-2xl font-semibold ">Cart totals</h3>
          
          <hr />
          <div className="flex justify-between items-center">
            <h1 className="text-xl ">
              Subtotal: 
            </h1>
            <h1 className="text-xl">

              ${totalAmount}
            </h1>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <h1 className="text-xl">Total: </h1>
            <h1 className="text-xl">${totalAmount}</h1>
          </div>
          <button className="btn bg-purple-500 text-white" onClick={handlePayment}>
           Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

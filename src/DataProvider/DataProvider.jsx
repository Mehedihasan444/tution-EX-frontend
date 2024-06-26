import { createContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";


export const DataContext = createContext(null);


const DataProvider = ({ children }) => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [searchValue, setSearchValue] = useState("");

  // Here fetch all data centrally
  const { data: allData = [], refetch } = useQuery({
    queryKey: ["allData", user?.email],
    queryFn: async () => {
      try {
        const res1 = await axiosPublic.get("/courses");
        const res2 = await axiosPublic.get(`/cart/${user?.email}`);
        const res3 = await axiosSecure.get(`/users/${user?.email}`);
        const res4 = await axiosPublic.get(`/courses/${user?.email}`);
        const res5 = await axiosPublic.get("/admin/users");

        return [res1.data.result, res2.data, res3.data, res4.data, res5.data];
      } catch (error) {
        // Handle errors here
        console.error("Error fetching data:", error);
        return [];
      }
    },
  });

  // Here fetch all data centrally by id
  const byId = async (id) => {
    try {
      const course = await axiosPublic.get(`/courses/${id}`);

      return [course.data];
    } catch (error) {
      // Handle errors here
      console.error("Error fetching data by id:", error);
      return [];
    }
  };

  // A function that refetches all data
  const dataFetch = () => {
    refetch();
  };

  // A object which contains all the fetched data and functions
  const all_data = {
    allData,
    dataFetch,
    byId,
    setSearchValue,
    searchValue,
  };

  return (
    <DataContext.Provider value={all_data}>{children}</DataContext.Provider>
  );
};

export default DataProvider;

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

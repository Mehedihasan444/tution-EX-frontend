import { useContext, useEffect, useState } from "react";
import DataProvider from "../../DataProvider/DataProvider";

import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Course_Card from "../../Components/Cards/Course_Card";
import { useQuery } from "@tanstack/react-query";

const Shop = () => {
  const {allData,searchValue}=useContext(DataProvider)
  const axiosPublic = useAxiosPublic();
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [courses, setCourses] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [category, setCategory] = useState("");
  // useEffect(() => {
  //   axiosPublic.get("/courses").then((res) => {
  //     setAll_courses(res.data);
  //   });
  // }, [axiosPublic]);

  const { data, isPending, refetch } = useQuery({
    queryKey: [
      "data",
      searchValue,
      sortBy,
      currentPage,
      category,
      itemsPerPage,
      numberOfPages,
    ],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/courses?courseName=${searchValue}&category=${category}&sortField=price&sortOrder=${sortBy}&page=${currentPage}&limit=${itemsPerPage}`
      );

      return res.data;
    },
  });

  console.log(data)
  useEffect(() => {
    if (data) {
      setCourses(data);
      const count = data.count;
      const NumOfPages = Math.ceil(count / itemsPerPage);
      setNumberOfPages(NumOfPages);
    }
  }, [itemsPerPage, data]);

  const pages = [...Array(numberOfPages).keys()];
  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value);
    setItemsPerPage(val);
    setCurrentPage(1);
  };

  // console.log(data)
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };


  return (
    <div className="">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-center my-5 mt-20">
          Popular Courses
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  gap-5  justify-center items-center px-10">
          {courses?.map((course) => (
            <Course_Card key={course._id} course={course}></Course_Card>
          ))}
        </div>
      </div>
       {/* pagination */}
       <div className="flex justify-center sm:justify-end items-center pr-5">
          <div className="py-10 text-center">
            <button
              className="btn btn-accent mr-3 text-white"
              onClick={handlePreviousPage}
              disabled={currentPage === 1 ? true : false}
            >
              «
            </button>
            {pages?.map((page) => (
              <button
                className={`${
                  currentPage === page + 1 ? "btn-disabled" : "text-white"
                } mr-2 btn btn-accent`}
                key={page}
                onClick={() => setCurrentPage(page + 1)}
              >
                {page + 1}
              </button>
            ))}
            <button
              className="btn btn-accent text-white"
              onClick={handleNextPage}
              disabled={currentPage === pages.length ? true : false}
            >
              »
            </button>
            <select
              value={itemsPerPage}
              onChange={handleItemsPerPage}
              className="rounded-md ml-2 select  input-bordered"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>
    </div>
  );
};
export default Shop;

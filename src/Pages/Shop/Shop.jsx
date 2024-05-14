import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Course_Card from "../../Components/Cards/Course_Card";
import { useQuery } from "@tanstack/react-query";
import { DataContext } from "../../DataProvider/DataProvider";

const Shop = () => {
  const {  searchValue } = useContext(DataContext);
  const axiosPublic = useAxiosPublic();
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [courses, setCourses] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [category, setCategory] = useState("");

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
    <div className="mt-5">
      <div className="mb-10">
        <div className="flex justify-end items-center gap-10">
          {/* Category filter */}
          <div className="mb-4 flex items-center gap-5">
            <h3 className="text-sm font-semibold mb-2">Category</h3>
            {/* Sample categories, you can fetch this from your API */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="" disabled>
                Categories
              </option>
              <option value="Design">Design</option>
              <option value="Development">Development</option>
              <option value="Data Science">Data Science</option>
              <option value="Photography">Photography</option>
              <option value="Sales Marketing">Sales Marketing</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Sort By dropdown */}
          <div className="flex justify-between items-center gap-5 mb-4">
            <h3 className="text-sm font-semibold mb-2">Sort By:</h3>
            <div className="">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="" disabled selected>
                  Price
                </option>
                <option value="desc">High To Low</option>
                <option value="asc">Low To High</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
        </div>
        {/* View options */}
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  gap-5  justify-center items-center px-10">
          {courses.result?.map((course) => (
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

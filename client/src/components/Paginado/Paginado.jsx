import React from "react";
import { pagesControl } from "../../redux/actions/index.js";
import { useDispatch } from "react-redux";

const Pager = ({ currentPage, itemsPerPage, totalItems, pageHandler }) => {
  const pageNumbers = [];
  const dispatch = useDispatch();
  // Pages creation
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Pagination handlers
  const handlePrevious = () => {
    if (currentPage - 1 > 0) {
      pageHandler(currentPage - 1);
    }
  };

  const handlePagination = (number) => {
    pageHandler(number);
  };

  const handleNext = () => {
    if (currentPage + 1 <= pageNumbers.length) {
      pageHandler(currentPage + 1);
    }
  };
  return (
    <div className="cursor-pointer">
      <ul className="inline-flex -space-x-px">
        {currentPage !== 1 ? (
          <li
            onClick={() => handlePrevious()}
            className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            {"<"}
          </li>
        ) : null}
        {pageNumbers.map((number) => (
          <li
            className={
              currentPage === number
                ? "px-3 py-2 ml-0 leading-tight text-gray-100 bg-slate-900 border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-purple-900 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                : "px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            }
            key={number}
            id={currentPage === number}
            onClick={() => {
              handlePagination(number);
              dispatch(pagesControl(number));
            }}
          >
            {number}
          </li>
        ))}
        {currentPage < pageNumbers.length ? (
          <li
            onClick={() => handleNext()}
            className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            {">"}
          </li>
        ) : null}
      </ul>
    </div>
  );
};

export default Pager;

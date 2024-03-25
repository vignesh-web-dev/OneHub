import React from "react";
import { usePagination } from "./usePagination";
import Link from "next/link";
const PaginationItems = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className=" flex flex-row items-center justify-center relative top-5 mt-14 w-full">
      {paginationRange.map((pageNumber, i) => {
        return (
          <Link href="" key={i}>
            <li
              className={
                currentPage === pageNumber
                  ? ` pagination-cur cursor-pointer relative mr-4 m-0 p-0 text-lg font-bold h-10 w-10 rounded-full border outline-2 border-black flex justify-center items-center text-white bg-black`
                  : `cursor-pointer relative mr-4 m-0 p-0 text-lg font-semibold pagination-cur text-[#6a6a6a] h-10 w-10 rounded-full border border-black flex justify-center items-center`
              }
              onClick={() => onPageChange(pageNumber)}
            >
              <span className="absolute top-1/2 -translate-y-1/2">
                {pageNumber}
              </span>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default PaginationItems;

import React from "react";
import "./Pagination.css";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [...Array(totalPages).keys()];
  const visiblePageNumbers =
    pageNumbers.length > 5 ? pageNumbers.slice(0, 5) : pageNumbers;

  return (
    <div className="pagination">
      {visiblePageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`pagination__button ${
            pageNumber === currentPage ? "active" : ""
          }`}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber + 1}
        </button>
      ))}
      {pageNumbers.length > 5 && (
        <button
          className={`pagination__button ${currentPage >= 5 ? "active" : ""}`}
          onClick={() => onPageChange(currentPage + 1)}
        >
          +
        </button>
      )}
    </div>
  );
}

export default Pagination;

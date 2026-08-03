function Pagination({ currentPage, totalResults, onPageChange }) {
  const resultsPerPage = 10;
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="pagination">
      <button
        className="pagination__btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ← Previous
      </button>

      <span className="pagination__status">
        Page {currentPage} / {totalPages}
      </span>

      <button
        className="pagination__btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next →
      </button>
    </div>
  );
}

export default Pagination;
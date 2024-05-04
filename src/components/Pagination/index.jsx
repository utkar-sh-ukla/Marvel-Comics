import "./style.css";

const Pagination = ({ currentPage, totalPages, changePage }) => {
  const renderPages = () => {
    const startPage = Math.max(2, Math.min(currentPage, totalPages - 3));
    const pages = [1, startPage];

    if (startPage < totalPages - 2) {
      if (startPage < totalPages - 3) {
        pages.push("...");
      }
    }

    pages.push(totalPages - 1, totalPages);
    return pages;
  };

  return (
    <div className="pagination">
      <button
        className="pagination__button"
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {renderPages().map((page, index) => (
        <button
          key={index}
          className={`pagination__button ${
            currentPage === page ? "active" : ""
          }`}
          onClick={() => {
            if (page !== "...") {
              changePage(page);
            }
          }}
        >
          {page}
        </button>
      ))}
      <button
        className="pagination__button"
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;

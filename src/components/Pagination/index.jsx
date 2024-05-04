import "./style.css";

const Pagination = ({ currentPage, totalPages, changePage }) => {
  const renderPages = () => {
    const pages = [1];
    const startPage = Math.max(2, Math.min(currentPage, totalPages - 3));

    if (startPage > 2) pages.push("...");

    for (let i = startPage; i <= Math.min(totalPages, startPage + 2); i++)
      pages.push(i);

    if (startPage + 2 < totalPages - 1) pages.push("...", totalPages);
    else if (startPage + 2 === totalPages - 1) pages.push(totalPages);

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

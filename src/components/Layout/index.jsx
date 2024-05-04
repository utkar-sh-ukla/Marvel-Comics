import React, { useState, useEffect } from "react";
import "./style.css";
import { useComics } from "../../service";
import Card from "../Card";
import Pagination from "../Pagination"; // Import the Pagination component

const Layout = () => {
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError } = useComics(offset);
  const comics = data?.data?.results;
  const totalComics = data?.data?.total;

  const itemsPerPage = 20;
  const totalPages = Math.ceil(totalComics / itemsPerPage);

  useEffect(() => {
    setCurrentPage(Math.ceil(offset / itemsPerPage) + 1);
  }, [offset, itemsPerPage]);

  const changePage = (newPage) => {
    if (newPage < 1 || newPage > totalPages || newPage === currentPage) return;
    setOffset((newPage - 1) * itemsPerPage);
    setCurrentPage(newPage);
  };

  return (
    <main className="layout">
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong</p>}
      <div className="layout__item">
        {comics &&
          comics.map((comic, index) => <Card key={index} comic={comic} />)}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        changePage={changePage}
      />
    </main>
  );
};

export default Layout;

import "./style.css";
import { useState } from "react";

const Navbar = ({ setComicsQueryParams }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setComicsQueryParams((prev) => ({
      ...prev,
      titleStartsWith: e.target.value,
    }));
  };
  return (
    <nav className="navbar">
      <h1 className="navbar__logo">MARVEL</h1>
      <input
        type="search"
        className="navbar__search"
        placeholder="Search for Comics"
        value={search}
        onChange={handleSearch}
      />
    </nav>
  );
};

export default Navbar;

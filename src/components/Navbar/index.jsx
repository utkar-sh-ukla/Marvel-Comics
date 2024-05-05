import "./style.css";
import { useState } from "react";
import { debounce } from "../../utils/helper";

const Navbar = ({ setComicsQueryParams }) => {
  const [search, setSearch] = useState("");

  const handleSearch = debounce((value) => {
    setComicsQueryParams((prev) => ({
      ...prev,
      characters: [],
      titleStartsWith: value,
    }));
  }, 500);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
    handleSearch(value);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar__logo">MARVEL</h1>
      <input
        type="search"
        className="navbar__search"
        placeholder="Search for Comics"
        value={search}
        onChange={handleChange}
      />
    </nav>
  );
};

export default Navbar;

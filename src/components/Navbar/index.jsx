import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar__logo">MARVEL</h1>
      <input
        type="search"
        className="navbar__search"
        placeholder="Search for Comics"
      />
    </nav>
  );
};

export default Navbar;

import { Link } from "react-router-dom";

export default function Navbar({ search, setSearch }) {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          MovieHub <span>Demo</span>
        </Link>
      </div>

      <div className="navbar-center">
        <input
          type="text"
          placeholder="Search for movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="navbar-right">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/history" className="nav-link">
          History
        </Link>
      </div>
    </header>
  );
}
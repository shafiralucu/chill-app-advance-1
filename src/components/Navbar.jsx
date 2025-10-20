import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-left">
        <div className="logo">
          {/* Link to Beranda */}
          <Link to="/"><img src="/assets/Logo.png" alt="Logo" /></Link>
        </div>
        <div className="nav-links">
          <a href="#">Series</a>
          <a href="#">Film</a>
          <a href="#">Daftar Saya</a>
        </div>
      </div>

      <div className="nav-right">
        {/* Link to Masuk page */}
        <Link to="/masuk">
          <img className="profile-pic" src="/assets/ICON.png" alt="Profile" />
        </Link>
        <Link to="/task-movies">Task: Movies</Link>
         <Link to="/task-movies-redux">Task: Movies (Redux)</Link>
        <span className="dropdown-icon">▼</span>
      </div>
    </nav>
  );
}

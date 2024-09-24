import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-success">
        <div className="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="https://th.bing.com/th/id/OIP.k3zp_jQGlCClWJ63j2hp0QHaHa?rs=1&pid=ImgDetMain"
              alt="Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            Guvi
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/">All</Link>
              </li>
              <li className="nav-item">
                <Link to="fsd">Full Stack Development</Link>
              </li>
              <li className="nav-item">
                <Link to="datascience">Data Science</Link>
              </li>
              <li className="nav-item">
                <Link to="cybersecurity">Cyber Securiy</Link>
              </li>
              <li className="nav-item">
                <Link to="career">Careers</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

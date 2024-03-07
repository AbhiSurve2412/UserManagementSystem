import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary"> 
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <i className="bi bi-briefcase-fill"></i> 
        </Link>
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                <i className="bi bi-house-fill"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users">
                <i className="bi bi-people-fill"></i> Employees List 
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

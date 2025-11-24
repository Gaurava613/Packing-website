import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import "./Navbar.css";
import Home from "../Home/Home";
import About from "../About/About";

function Navbar() {
  return (
    <BrowserRouter>

      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
        <div className="container">

          <NavLink className="navbar-brand fw-bold" to="/">
            Custom Packing
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about-us">
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
      </Routes>

    </BrowserRouter>
  );
}

export default Navbar;

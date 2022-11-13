import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* header section starts */}
      <header className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <Link className="navbar-brand" to="/">
              <img src="images\Logo.png" alt="" height="40px" />
            </Link>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="true"> </span>
            </button>
            <div
              className="navbar-collapse collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto">
                <li className="nav-item" id="home">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item" id="menu">
                  <Link className="nav-link" to="/menu">
                    Menu
                  </Link>
                </li>
                <li className="nav-item" id="about">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item" id="book">
                  <Link className="nav-link" to="/book">
                    Book Table
                  </Link>
                </li>
              </ul>
              <div className="user_option">
                <Link to="/" className="order_online">
                  {" "}
                  Order Online{" "}
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* end header section */}
    </div>
  );
};

export default Navbar;

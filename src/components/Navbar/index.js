import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper blue-grey darken-1">
          <Link to="/" className="brand-logo">
            Christian Gonzalez
          </Link>
          <Link to="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons"></i>
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/comments">Comments</Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="comments">Comments</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

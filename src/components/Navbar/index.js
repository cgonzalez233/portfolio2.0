import React from "react";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper blue-grey darken-1">
          <a to="/" className="brand-logo">
            Christian Gonzalez
          </a>
          <a to="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons"></i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a to="/">Home</a>
            </li>
            <li>
              <a to="/portfolio">Portfolio</a>
            </li>
            {/* <li>
              <a to="/comments">Comments</a>
            </li> */}
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <a to="/">Home</a>
        </li>
        <li>
          <a to="/portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a to="comments">Comments</a>
        </li> */}
      </ul>
    </div>
  );
}

export default Navbar;

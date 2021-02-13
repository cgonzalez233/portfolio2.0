import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Comments from "./components/Comments";
import "./App.css";
import M from "materialize-css/dist/js/materialize.min.js";

function App() {
  document.title = "Christian Webpage";
  // Initilize Materialize
  useEffect(() => {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250,
    });
    // Initialize Materialize
  }, []);
  return (
    <Router>
      {/* Navbar */}
      <nav>
        <div className="nav-wrapper blue-grey darken-1">
          <Link to="/" className="brand-logo">
            Christian Gonzalez
          </Link>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
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

      <ul className="sidenav glassSidenav" id="mobile-demo">
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
      {/* Navbar */}

      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/comments" component={Comments} />
      </main>
    </Router>
  );
}

export default App;

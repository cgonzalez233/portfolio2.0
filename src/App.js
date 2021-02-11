import React from "react";
import "materialize-css/dist/css/materialize.min.css";
// import { Button, Card, Row, Col } from "react-materialize";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Comments from "./components/Comments";
import "./App.css";

function App() {
  document.title = "Christian Webpage";
  return (
    <Router>
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

      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/comments" component={Comments} />
      </main>
    </Router>
  );
}

export default App;

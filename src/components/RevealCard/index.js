import React from "react";

function RevealCard(props) {
  return (
    <div className="card hoverable portfolioCard z-depth-2">
      <div className="card-image waves-effect waves-block waves-light">
        <img
          className="activator"
          alt={`${props.alt}`}
          src={`${
            props.image || "https://materializecss.com/images/sample-1.jpg"
          }`}
        ></img>
      </div>
      <div className="card-content grey lighten-5">
        <span className="card-title grey-text text-darken-4 activator ">
          {`${props.title}`}
          {/* Heroku and GitHub logos */}
          {props.heroku ? (
            <a href={`${props.heroku}`}>
              <img className="logoSize" src="/images/heroku.png"></img>
            </a>
          ) : (
            ""
          )}
          {/* <a href={`${props.heroku}`}>
            <img className="logoSize" src="/images/heroku.png"></img>
          </a> */}
          <a href={`${props.github}`}>
            <img className="logoSize" src="/images/github.png"></img>
          </a>
          {/* Heroku and GitHub logos */}
          <i className="material-icons right">close</i>
        </span>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {`${props.title}`}
          <i className="material-icons right">close</i>
        </span>
        <p className="grey-text">{`${props.children}`}</p>
        <br></br>
        <p>
          <a href={`${props.heroku}`}>
            <img className="logoSize" src="/images/heroku.png"></img>
          </a>
          <a href={`${props.github}`}>
            <img className="logoSize" src="/images/github.png"></img>
          </a>
        </p>
      </div>
    </div>
  );
}

export default RevealCard;

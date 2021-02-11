import React from "react";

function RevealCard(props) {
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img
          className="activator"
          alt={`${props.alt}`}
          src={`${
            props.image || "https://materializecss.com/images/sample-1.jpg"
          }`}
        ></img>
      </div>
      <div className="card-content">
        <span className="card-title grey-text text-darken-4">
          {`${props.title}`}
          <i className="material-icons right">close</i>
        </span>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {`${props.title}`}
          <i className="material-icons right">close</i>
        </span>
        <p>{`${props.children}`}</p>
      </div>
    </div>
  );
}

export default RevealCard;

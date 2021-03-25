import React from "react";
import { Card, Row, Col } from "react-materialize";
import "./style.css";

function Home() {
  return (
    <div className="container">
      <Row className="valign-wrapper">
        <Col m={12} className="valign">
          <div className="col s3">
            <img
              src="/images/mepic.jpg"
              className="circle responsive-img z-depth-2"
            ></img>
          </div>
          <Card
            className="glassCard col s9 z-depth-2"
            textClassName="white-text"
            title="Christian Gonzalez"
          >
            Hi, my name is Christian, I just completed UCF's Coding Bootcamp and
            learned various languages and skills from the amazingly talented
            teachers that work there. Look forward to all the crazy things im
            going to be making as I delve deeper into coding!
            <br></br>
            <br></br>
            <div className="center-align">
              <img id="badge" src="/images/UCFBCBadge.png"></img>
            </div>
            Currently known languages and skills:<br></br>
            <img
              src="/images/htmlLogo.png"
              alt="HTML Logo"
              className="languageLogo"
            ></img>
            <img
              src="/images/cssLogo.png"
              alt="CSSLogo"
              className="languageLogo"
            ></img>
            <img
              src="/images/javascriptLogo.png"
              alt="Javascript Logo"
              className="languageLogo"
            ></img>
            <img
              src="/images/jqueryLogo.png"
              alt="JQueryLogo"
              className="languageLogo"
            ></img>
            <img
              src="/images/nodeLogo.png"
              alt="Node Logo"
              className="languageLogo"
            ></img>
            <img
              src="/images/sqlLogo.png"
              alt="SQLLogo"
              className="languageLogo"
            ></img>
            <img
              src="/logo192.png"
              alt="React Logo"
              className="languageLogo"
            ></img>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Home;

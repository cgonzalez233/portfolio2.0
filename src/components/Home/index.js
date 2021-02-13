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
              src="/images/christian.jpg"
              className="circle responsive-img"
            ></img>
          </div>
          <Card
            className="blue-grey darken-1 col s9"
            textClassName="white-text"
            title="Christian Gonzalez"
          >
            I am a very simple card. I am good at containing small bits of
            information. I am convenient because I require little markup to use
            effectively.
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Home;

import React from "react";
import { Card, Row, Col } from "react-materialize";

function Comments() {
  return (
    <div className="container">
      <Row className="valign-wrapper">
        <Col m={12} className="valign">
          <Card
            className="blue-grey darken-1"
            textClassName="white-text"
            title="Comments"
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

export default Comments;

import React from "react";
import { Card, Row, Col } from "react-materialize";
import PortfolioContent from "../PortfolioContent/index.js";

function Portfolio() {
  return (
    <div className="container">
      <Row className="valign-wrapper">
        <Col m={13} s={12} className="valign">
          <Card
            className="blue-grey darken-1"
            textClassName="white-text"
            title="Portfolio"
          >
            <PortfolioContent />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Portfolio;

import React from "react";
import { Row, Col } from "react-materialize";
import RevealCard from "../RevealCard/index.js";

function PortfolioContent() {
  return (
    <div>
      <Row>
        <Col m={6} s={12}>
          <RevealCard title="TestCard" image="https://i.imgur.com/WezvA3p.jpg">
            Test Test
          </RevealCard>
        </Col>
        <Col m={6} s={12}>
          <RevealCard title="TestCard">Test Test</RevealCard>
        </Col>
      </Row>
      <Row>
        <Col m={6} s={12}>
          <RevealCard title="TestCard">Test Test</RevealCard>
        </Col>
        <Col m={6} s={12}>
          <RevealCard title="TestCard" image="https://i.imgur.com/hO1i0Kl.jpg">
            Test Test
          </RevealCard>
        </Col>
      </Row>
    </div>
  );
}

export default PortfolioContent;

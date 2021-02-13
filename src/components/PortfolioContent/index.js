import React from "react";
import { Row, Col } from "react-materialize";
import RevealCard from "../RevealCard/index.js";

function PortfolioContent() {
  return (
    <div>
      <Row>
        <Col m={6} s={12}>
          <RevealCard
            title="Pokéssist"
            image="/images/pokessist.png"
            alt="Image for Pokessist App"
          >
            An application used to look up pokemon and check the type
            effectiveness for each specific pokemon. You can also create an
            account to build teams to set yourself up for success when you play
            a pokemon game
          </RevealCard>
        </Col>
        <Col m={6} s={12}>
          <RevealCard title="TestCard" alt="Image for Pokessist App">
            Test Test
          </RevealCard>
        </Col>
      </Row>

      <Row>
        <Col m={6} s={12}>
          <RevealCard
            title="TestCard"
            image="/images/weatherGenerator.png"
            alt="Image for Pokessist App"
          >
            Test Test
          </RevealCard>
        </Col>
        <Col m={6} s={12}>
          <RevealCard
            title="TestCard"
            image="https://i.imgur.com/hO1i0Kl.jpg"
            alt="Image for Pokessist App"
          >
            Test Test
          </RevealCard>
        </Col>
      </Row>
    </div>
  );
}

export default PortfolioContent;

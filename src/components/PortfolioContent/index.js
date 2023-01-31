import React from "react";
import { Row, Col } from "react-materialize";
import RevealCard from "../RevealCard/index.js";

function PortfolioContent() {
  return (
    <div className="card-container">
      <Row>
        <Col m={6} s={12}>
          <RevealCard
            title="RPGenerator"
            image="/images/RPGenerator.png"
            alt="Image for RPGenerator App"
            github="https://github.com/cgonzalez233/RPGenerator"
          >
            An application for randomizing characters in Dungeons and Dragons
            5e. It allows you to log in, save characters, and view them on the
            homepage. It also features a Spell Book and Bestiary for easy spell
            and monster lookup.
          </RevealCard>
        </Col>
        <Col m={6} s={12}>
          <RevealCard
            title="Pokéssist"
            image="/images/pokessist.png"
            alt="Image for Pokessist App"
            github="https://github.com/cgonzalez233/Group1Project"
          >
            An application for looking up Pokemon and checking type
            effectiveness. It has an option to create an account and build teams
            for success in Pokemon games.
          </RevealCard>
        </Col>
      </Row>

      <Row>
        <Col m={6} s={12}>
          <RevealCard
            title="ShoppingApp"
            image="/images/shoppingapp.png"
            alt="Image for ShoppingApp"
            github="https://github.com/cgonzalez233/ShoppingApp"
          >
            An eCommerce application that enables users to create and log in to
            an account, add products to their cart, and checkout.
          </RevealCard>
        </Col>
        <Col m={6} s={12}>
          <RevealCard
            title="RevLoot"
            image="/images/revloot.png"
            alt="Image for RevLoot App"
            github="https://github.com/cgonzalez233/REVLoot-Front-End"
            github2="https://github.com/cgonzalez233/REVLoot-Back-End"
          >
            Our team was assigned to create the structure for an eCommerce app
            for our company, Revature, to sell merchandise. We handed it over to
            the next team for design and product implementation.
          </RevealCard>
        </Col>
      </Row>

      <Row>
        <Col m={6} s={12}>
          <RevealCard
            title="Weather Dashboard"
            image="/images/weatherGenerator.png"
            alt="Image for Weather Dashboard App"
            github="https://github.com/cgonzalez233/weatherDashboard"
          >
            An application used to check the current weather for a given city as
            well as a 5 day forecast
          </RevealCard>
        </Col>
        <Col m={6} s={12}>
          <RevealCard
            title="Daily Planner"
            image="/images/scheduler.png"
            alt="Image for Daily Planner App"
            github="https://github.com/cgonzalez233/dailyPlanner"
          >
            An application used to manage a schedule for a given work day. Able
            to save tasks for the day and changes task colors based on if it is
            after the current time, before the current time or is the current
            time.
          </RevealCard>
        </Col>
      </Row>

      <Row>
        <Col m={6} s={12}>
          <RevealCard
            title="Finance Tracker"
            image="/images/financeTracker.png"
            alt="Image for Finance Tracker App"
            github="https://github.com/cgonzalez233/budgetTracker"
          >
            An application used to keep track of your finances, whether that is
            adding funds or subtracting funds. There is also a chart to
            visualize the ups and downs of your spending
          </RevealCard>
        </Col>
        <Col m={6} s={12}>
          <RevealCard
            title="Workout Tracker"
            image="/images/fitnessTracker.png"
            alt="Image for Daily Planner App"
            github="https://github.com/cgonzalez233/workoutTracker"
          >
            An application used to manage a schedule for a given work day. Able
            to save tasks for the day and changes task colors based on if it is
            after the current time, before the current time or is the current
            time.
          </RevealCard>
        </Col>
      </Row>

      <Row>
        <Col m={6} s={12}>
          <RevealCard
            title="Note Taker"
            image="/images/noteTaker.png"
            alt="Image for Note Taker App"
            github="https://github.com/cgonzalez233/noteTaker"
          >
            An application used to keep track of your finances, whether that is
            adding funds or subtracting funds. There is also a chart to
            visualize the ups and downs of your spending
          </RevealCard>
        </Col>
        <Col m={6} s={12}>
          <RevealCard
            title="Password Generator"
            image="/images/passwordGenerator.png"
            alt="Image for Password Generator App"
            github="https://github.com/cgonzalez233/passwordGenerator"
          >
            An application used to manage a schedule for a given work day. Able
            to save tasks for the day and changes task colors based on if it is
            after the current time, before the current time or is the current
            time.
          </RevealCard>
        </Col>
      </Row>
      <Row>
        <Col m={6} s={12}>
          <RevealCard
            title="Food Group"
            image="/images/foodGroup.png"
            alt="Image for Food Group App"
            github="https://github.com/cgonzalez233/Food-Group"
          >
            An application that takes a given ingredient and gives recipes that
            include that ingredient. The application also gives the user a map
            showing their closest grocery stores. I worked on the cards and the
            card functionality for this project.
          </RevealCard>
        </Col>
      </Row>
    </div>
  );
}

export default PortfolioContent;

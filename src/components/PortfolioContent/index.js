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
            heroku="https://rpgenerator233.herokuapp.com/"
            github="https://github.com/cgonzalez233/RPGenerator"
          >
            An application used to randomize characters for Dungeons and Dragons
            5e. When logged in, you can save the randomized characters and look
            at each of them on the homepage. Additional features includes a
            Spell Book and Bestiary so you can look up spells and monsters
            easily.
          </RevealCard>
        </Col>
        <Col m={6} s={12}>
          <RevealCard
            title="Pokéssist"
            image="/images/pokessist.png"
            alt="Image for Pokessist App"
            heroku="https://pokessist-0220.herokuapp.com/"
            github="https://github.com/cgonzalez233/Group1Project"
          >
            An application used to look up pokemon and check the type
            effectiveness for each specific pokemon. You can also create an
            account to build teams to set yourself up for success when you play
            a pokemon game
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
            heroku="https://budgetboys.herokuapp.com/"
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
            heroku="https://whispering-meadow-90051.herokuapp.com/?id=6028369b010983001577efca"
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
            heroku="https://boiling-refuge-12896.herokuapp.com/"
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

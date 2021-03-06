import React from "react";
import { Card, Row, Col } from "react-materialize";
import CommentField from "../CommentField/index.js";

function Comments() {
  return (
    <div className="container">
      <Row className="valign-wrapper">
        <Col m={12} className="valign">
          <Card
            className="commentCard glassCard z-depth-2"
            textClassName="white-text"
            title="Comments"
          >
            <CommentField />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Comments;

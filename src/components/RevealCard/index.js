import React from "react";
import { Card, Icon, CardTitle } from "react-materialize";

function RevealCard(props) {
  return (
    <Card
      closeIcon={<Icon>close</Icon>}
      header={
        <CardTitle
          image={`${
            props.image || "https://materializecss.com/images/sample-1.jpg"
          }`}
          reveal
          waves="light"
        />
      }
      reveal={<p>{props.children}</p>}
      revealIcon={<Icon>more_vert</Icon>}
      title={`${props.title}`}
    ></Card>
  );
}

export default RevealCard;

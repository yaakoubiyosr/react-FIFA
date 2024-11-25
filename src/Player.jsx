import React from "react";
import { Card } from "react-bootstrap";

function Player({ player }) {


  return (
    <Card className="cardStyle">
      <Card.Body>
        <Card.Title>{player.name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {player.team} <br />
          <strong>Nationality:</strong> {player.nationality} <br />
          <strong>Jersey Number:</strong> {player.jerseyNumber} <br />
          <strong>Age:</strong> {player.age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Player;

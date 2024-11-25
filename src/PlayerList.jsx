import React from "react";
import players from "./players";
import Player from "./Player";

function PlayerList() {
 

  return (
    <div className="listStyle">
      {players.map((player) => (
        <Player key={player.name} player={player} />
      ))}
    </div>
  );
}

export default PlayerList;

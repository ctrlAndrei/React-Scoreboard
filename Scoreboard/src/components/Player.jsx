import React, { Component } from "react";
import Counter from "./Counter";

function Player(props) {
  return (
    <div className="player" id={props.id}>
      <span className="player-name">
        <button className="remove-player" onClick={props.removePlayer}>✖</button>
        {props.name}
      </span>
      <Counter 
        handleScoreChange={props.handleScoreChange} 
        id={props.id}
        score={props.score} />
    </div>
  );
}

export default Player;

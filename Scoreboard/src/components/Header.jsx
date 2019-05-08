import React, { Component } from "react";
import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

function Header(props) {
  return (
    <header>
      <h1>Scoreboard</h1>
      <Stats nrPlayers = {props.nrPlayers} tScore = {props.tScore} />
      <Stopwatch/>
    </header>
  );
}

export default Header;

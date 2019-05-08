import React, { Component } from "react";

function Stats(props) {
  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{props.nrPlayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{props.tScore}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Stats;

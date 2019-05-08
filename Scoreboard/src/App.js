import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Player from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";

class App extends Component {
  state = {
    players: [
      { id: 0, name: "Guil", score: 0 },
      { id: 1, name: "Treasure", score: 0 },
      { id: 2, name: "Ahley", score: 0 },
      { id: 3, name: "James", score: 0 }
    ],
    
  };
  
  
  handleScoreChange = (id, direction) => {

    this.setState(prevState => ({
      players: prevState.players.map(element =>
        element.id !== id
          ? element
          : { ...element, score: element.score + direction }
      )
    }));
  };

  removePlayer = index => {
    let arr = this.state.players.map(el => el);
    
    arr.splice(index, 1);
    arr.forEach((el, i) => {
      el.id = i;
    });
    this.setState({ players: [...arr] });
  };

  addPlayer = (nm)=>{
    
    this.setState(prev=>({
      players: [...prev.players,{id: prev.players.length, name: nm, score: 0}]
    }));
   
  }

  render() {
    return (
      <div className="App">
        <div id="root">
          <div className="scoreboard">
            <Header
              nrPlayers={this.state.players.length}
              tScore={this.state.players
                .map(el => el.score)
                .reduce((tot, elem) => {return tot + elem},0)}
            />
            {this.state.players.map(el => (
              <Player
                key={el.id.toString()}
                id={el.id}
                name={el.name}
                score={el.score}
                handleScoreChange={this.handleScoreChange}
                removePlayer={() => {
                  this.removePlayer(el.id);
                }}
              />
            ))}
            <AddPlayerForm addPlayer={this.addPlayer}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

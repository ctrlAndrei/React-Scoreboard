import React, { Component } from "react";

class AddPlayerFrom extends Component {
  state = {
    value: ""
  };

  changeHandler = ev => {
    this.setState({
      value: ev.target.value
    });
    console.log(this.state.value);
  };

  submitHandler = ev => {
    ev.preventDefault();
    if (this.state.value !== "") {
      this.props.addPlayer(this.state.value);
      this.setState({ value: "" });
    }
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          placeholder="Enter a player's name"
          value={this.state.value}
          onChange={this.changeHandler}
        />
        <input type="submit" value="Add Player" />
      </form>
    );
  }
}

export default AddPlayerFrom;

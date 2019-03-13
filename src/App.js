import React, { Component } from "react";
import Button from "./Button";
import Modal from "./Modal";
import OrderPicker from "./OrderPicker";
import "./App.css";

class App extends Component {
  state = {
    modal: false,
    value: 50
  };

  getInitialState = () => {
    return this.state.modal;
  };

  checkoutClick = () => {
    this.setState({ modal: true });
  };

  okayClick = () => {
    this.setState({ modal: false });
  };

  handleChange = value => {
    this.setState({ value });
  };

  meal = () => {
    const { value } = this.state;
    let valueString = "";
    value === 0 || value === 100
      ? (valueString = "Tea")
      : value === 25
      ? (valueString = "Dinner")
      : value === 50
      ? (valueString = "Breakfast")
      : (valueString = "Lunch");
    return valueString;
  };

  render() {
    return (
      <div className="App">
        <OrderPicker
          value={this.state.value}
          meal={this.meal}
          onChange={this.handleChange}
        />
        <Button onClick={this.checkoutClick} />
        <Modal
          onClick={this.okayClick}
          status={this.state.modal}
          title="Thanks for the order!"
          subtitle={`Your ${this.meal()} is on the way.`}
          cta="Cool!"
        />
      </div>
    );
  }
}

export default App;

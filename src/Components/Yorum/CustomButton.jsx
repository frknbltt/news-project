import React, { Component } from "react";
import "../../global.css";

class CustomButton extends Component {
  render() {
    const { onReset, onAdd } = this.props;
    return (
      <div className="message-button">
        <button className="button-add" onClick={() => onAdd()}>
          Yorumunu Gönder
        </button>
        <button className="button-reset" onClick={() => onReset()}></button>
      </div>
    );
  }
}
export default CustomButton;

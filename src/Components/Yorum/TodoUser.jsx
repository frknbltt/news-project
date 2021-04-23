import React, { Component } from "react";
import "../../global.css";

class TodoUser extends Component {
  render() {
    const { date, onDelete, id, onMaked, isDone, not, name } = this.props;
    return (
      <div className="message-head">
        <h2>{not}:</h2>
        <span>{date}'de Yazıldı</span>
        <p>{name}</p>
        <hr />
        <br />
      </div>
    );
  }
}
export default TodoUser;

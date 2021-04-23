import React, { Component } from "react";
import img from "../../png6.jpg";
import "../../global.css";
class NewsCard extends Component {
  render() {
    return (
      <div className="newscard">
        <div className="newscardtop">
          <img src={this.props.img} alt="" />
          <p>Okuma Süresi: {Math.floor(Math.random() * 10)} dk</p>
        </div>
        <div className="newscardmid">
          <p>{this.props.title}</p>
        </div>

        <span className="newscard-date">{this.props.date}</span>
      </div>
    );
  }
}
export default NewsCard;

import React, { Component } from "react";
import "../../global.css";
import user from "./user.jpg";
import user2 from "./user2.jpg";
import user3 from "./user3.jpg";
import user4 from "./user4.jpg";
class Senarist extends Component {
  render() {
    return (
      <div className="senarist">
        <div className="senarist-top">
          <h4>YAZARLAR</h4>
        </div>
        <div className="senarist-bottom">
          <div className="senarist-item">
            <img src={user} alt="" />
            <ul>
              <h4>Mert Çuhadaroğlu</h4>
            </ul>
          </div>
          <div className="senarist-item">
            <img src={user2} alt="" />
            <ul>
              <h4>Okan Geçgel</h4>
            </ul>
          </div>
          <div className="senarist-item">
            <img src={user3} alt="" />
            <ul>
              <h4>Zeynep Osman</h4>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Senarist;

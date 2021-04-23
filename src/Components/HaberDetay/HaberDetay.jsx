import React, { Component } from "react";
import "../../global.css";
import png from "../../png6.jpg";
import UserConsumer from "../Context/Context";
import { withRouter } from "react-router-dom";
import Message from "../Yorum/Message";

class HaberDetay extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <UserConsumer>
        {(value) => {
          const { data } = value;
          const id = this.props.match.params.id;
          const selectedNews =
            data &&
            data.length > 0 &&
            data.find((item) => item.id === parseInt(id));
          console.log(selectedNews);
          return (
            selectedNews && (
              <div className="haberdetay">
                <div className="haberdetay-head">
                  <h1>{selectedNews.title}</h1>
                  <h4>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="clock"
                      class="svg-inline--fa fa-clock fa-w-16"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
                      ></path>
                    </svg>{" "}
                    Son Güncellenme: {selectedNews.publishedAt}
                  </h4>
                </div>
                <div className="haberdetay-image">
                  <img src={selectedNews.urlToImage} alt="haberimage" />
                </div>
                <div className="haberdetay-content">
                  <p>{selectedNews.description}</p>
                  <p>{selectedNews.content}</p>
                  <br />
                  <h5>(API yetersiz olduğu için haber metni yetersizdir.)</h5>
                </div>
                <Message />
              </div>
            )
          );
        }}
      </UserConsumer>
    );
  }
}
export default withRouter(HaberDetay);

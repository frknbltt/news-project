import React, { Component, setState } from "react";
import CustomButton from "./CustomButton";
import "../../global.css";
import TodoUser from "./TodoUser";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: "",
      text2: "",
      notlar: [
        {
          not: "Sinan Bulut",
          name:
            "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanıl…i standardı sahte metinler olarak kullanılmıştır.",
          id: 6617,
          date: "19.04.2021",
          isCompleted: false,
        },
      ],
    };
  }
  handleInputChange = (event) => {
    this.setState({
      text1: event.target.value,
    });
  };
  handleInputChange2 = (event) => {
    this.setState({
      text2: event.target.value,
    });
  };

  handleSubmit = () => {
    let prevState = this.state.notlar;
    prevState.push({
      not: this.state.text1,
      name: this.state.text2,
      id: Math.floor(Math.random() * 10000),
      date: new Date().toLocaleDateString(),
      isCompleted: false,
    });
    console.log(this.state.notlar);
    this.setState({ notlar: prevState, text1: "", text2: "" });
    // Atılan yorumları localstorage a günceller
    // localStorage.setItem("notlar", JSON.stringify(prevState));
  };

  handleReset = () => {
    this.setState({ notlar: [] });
    localStorage.clear();
  };

  handleDelete = (xx) => {
    let delstate = this.state.notlar;
    delstate = delstate.filter((item) => item.id !== xx);
    this.setState({ notlar: delstate });
    localStorage.setItem("notlar", JSON.stringify(delstate));
  };

  componentDidMount() {
    let notlar = localStorage.getItem("notlar");
    console.log(notlar);
    if (notlar) {
      this.setState({ notlar: JSON.parse(notlar) });
    }
  }

  findIsCompleted = (id) =>
    this.state.notlar.find((item) => item.id === id).isCompleted;

  render() {
    return (
      <div className="message">
        <ul className="message-top">
          <h1>Yorumlar({this.state.notlar.length}) </h1>

          {this.state.notlar.map((item) => {
            return (
              <TodoUser
                id={item.id}
                not={item.not}
                name={item.name}
                date={item.date}
              />
            );
          })}
        </ul>

        <div className="message-bottom">
          <div className="input-bottom-name">
            <p>Adınız</p>
            <input
              className="add-input"
              type="text"
              placeholder="Adınızı Yazınız..."
              value={this.state.text1}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="input-bottom-name-z">
            <p>Yorumunuz</p>
            <input
              type="text"
              placeholder="Yorumunuzu Yazınız..."
              value={this.state.text2}
              onChange={this.handleInputChange2}
            />
          </div>
          <div>
            <CustomButton
              onAdd={this.handleSubmit}
              onReset={this.handleReset}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Message;

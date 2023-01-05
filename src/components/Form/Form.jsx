import React, { Component } from "react";

// import shortid from "shortid";
export default class Form extends Component {
  state = {
    num: 0,
    name: "",
    telNumber: 0,
  };

  // nameInputId = shortid.generate();
  // tagInput = shortid.generate();

  increment = (e) => {
    e.preventDefault();
    return this.setState({ num: this.state.num + 1 });
  };

  decrement = (e) => {
    e.preventDefault();
    return this.setState({ num: this.state.num - 1 });
  };

  handleChange = (e) => {
    this.setState({ name: e.currentTarget.value });
  };
  handleChangeTel = (e) => {
    this.setState({ telNumber: e.currentTarget.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
    this.setState({ telNumber: e.target.value });
    alert("Name and Telnumber were submitted:" + this.state.name);
  };
  render() {
    return (
      <>
        <form action="" className="form">
          <button className="btn" onClick={this.decrement}>
            -
          </button>
          <p>{this.state.num}</p>
          <button className="btn" onClick={this.increment}>
            +
          </button>
        </form>
        <form className="forms" onSubmit={this.onSubmit} action="">
          <h1>Заполните анкету</h1>
          <input
            className="button"
            onChange={this.handleChange}
            value={this.state.name}
            type="text"
            placeholder="Введите имя"
            required
            id={this.nameInputId}
          />
          <input
            className="button"
            onChange={this.handleChangeTel}
            value={this.state.telNumber === 0 ? false : this.state.telNumber}
            type="number"
            placeholder="Введите номер телефона"
            required
            id={this.nameInputId}
          />
          <button className="btn">Отправить</button>
        </form>

        <div className="wrapper">
          <h1 className="title">Контакты</h1>
          <p>{this.state.name}</p>
          <p>{this.state.telNumber === 0 ? false : this.state.telNumber}</p>
        </div>
      </>
    );
  }
}

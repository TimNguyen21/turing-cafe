import React, { Component } from "react";
import "./Form.css"

export default class Form extends Component {
  constructor({addReservation}) {
    super();
    this.state = {
      name: "",
      date: "",
      time: "",
      number: ""
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitReservation = (e) => {
    e.preventDefault();
    const newReservation = {...this.state, id: Date.now()}
    this.props.addReservation(newReservation);
    this.resetForm()
  }

  resetForm = () => {
    this.setState({
      name: "",
      date: "",
      time: "",
      number: ""
    })
  }

  render() {
    return(
      <form>
        <input
          type="text"
          placeholder="name"
          value={this.state.name}
          name="name"
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="date (mm/dd)"
          value={this.state.date}
          name="date"
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="time (hh:mm)"
          value={this.state.time}
          name="time"
          onChange={this.handleChange}
        />
        <input
          type="number"
          placeholder="number of guests"
          value={this.state.number}
          name="number"
          onChange={this.handleChange}
        />
        <button onClick={this.submitReservation}>Make Reservations</button>
      </form>
    )
  }
}

import React, { Component } from 'react';
import './App.css';
import Reservations from "../Reservations/Reservations.js"
import Form from "../Form/Form.js"

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    };
  }

  componentDidMount () {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(data => this.setState({ reservations: data }))
    .catch(err => console.log(err.message))
  }

  addReservation = (newReservation) => {
    fetch('http://localhost:3001/api/v1/reservations', {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(
        newReservation
      )
    })
    .then(response => response.json())
    .catch(err => console.log(err.message))

    this.setState({reservations: [...this.state.reservations, newReservation]})
  }

  removeReservation = (id) => {
    const updatedReservation = this.state.reservations.filter(reservation => reservation.id != id)

    this.setState({reservations: updatedReservation})
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation} removeReservation={this.removeReservation}/>
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;

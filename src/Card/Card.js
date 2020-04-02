import React from "react";
import "./Card.css"

const Card = ({id, name, date, time, numberOfGuest, removeReservation }) => {
  return(
    <section className="reservation-card">
      <h1>{ name }</h1>
      <p>{ date }</p>
      <p>{ time }</p>
      <p>Number of Guest: { numberOfGuest }</p>
      <button>Cancel</button>
    </section>
  )
}

export default Card;

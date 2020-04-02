import React from "react"
import "./Reservations.css"
import Card from "../Card/Card.js"

const Reservations = ({ reservations }) => {

  const reservationCards = reservations.map(reservation => {
    return <Card
      id={reservation.id}
      key={reservation.id}
      name={reservation.name}
      date={reservation.date}
      time={reservation.time}
      numberOfGuest={reservation.number}
    />
  })

  return(
    <section>
      {reservationCards}
    </section>
  )
}

export default Reservations;

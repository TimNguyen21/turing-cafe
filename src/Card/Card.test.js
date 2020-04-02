import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card.js";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"

describe("Card", () => {
  it("should display the correct card on the DOM", () => {
    const { getByText } = render(
      <Card
      id={999}
      key={999}
      name={"Jonny Jonny"}
      date={"03/29"}
      time={"12:10"}
      numberOfGuest={"7"}
      />)

    const nameElement = getByText("Jonny Jonny")
    const dateElement = getByText("03/29")
    const timeElement = getByText("12:10")
    const guestsElement = getByText("Number of Guest: 7")

    expect(nameElement).toBeInTheDocument()
    expect(dateElement).toBeInTheDocument()
    expect(timeElement).toBeInTheDocument()
    expect(guestsElement).toBeInTheDocument()
  })
})

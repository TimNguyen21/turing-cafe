import React from "react";
import ReactDOM from "react-dom";
import Reservations from "./Reservations.js";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"

describe("Reservations", () => {
  it("should display reservation details on DOM - Christie", () => {
    const { getByText } = render(
      <Reservations
        reservations={[
          { id: 18907224, name: 'Christie', date: '8/8', time: '7:00', number: 3 },
          { id: 189, name: 'Chris', date: '9/2', time: '5:00', number: 6 }
        ]}
      />)

      const guestOneName = getByText("Christie")
      const guestOneDate = getByText("8/8")
      const guestOneTime = getByText("7:00")
      const guestOneGuests = getByText("Number of Guest: 3")

      expect(guestOneName).toBeInTheDocument()
      expect(guestOneDate).toBeInTheDocument()
      expect(guestOneTime).toBeInTheDocument()
      expect(guestOneGuests).toBeInTheDocument()
  })

  it("should display reservation details on DOM - Chris", () => {
    const { getByText } = render(
      <Reservations
        reservations={[
          { id: 18907224, name: 'Christie', date: '8/8', time: '7:00', number: 3 },
          { id: 189, name: 'Chris', date: '9/2', time: '5:00', number: 6 }
        ]}
      />)

      const guestTwoName = getByText("Chris")
      const guestTwoDate = getByText("9/2")
      const guestTwoTime = getByText("5:00")
      const guestTwoGuests = getByText("Number of Guest: 6")

      expect(guestTwoName).toBeInTheDocument()
      expect(guestTwoDate).toBeInTheDocument()
      expect(guestTwoTime).toBeInTheDocument()
      expect(guestTwoGuests).toBeInTheDocument()
  })
})

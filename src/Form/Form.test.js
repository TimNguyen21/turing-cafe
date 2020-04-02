import React from "react";
import ReactDOM from 'react-dom';
import Form from "./Form.js";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"

describe("Form", () => {
  it("should have the correct value on info entry", () => {
    const mockAddReservation = jest.fn()
    const { getByText, getByPlaceholderText } = render(<Form
      addReservation={mockAddReservation}/>)

      fireEvent.change(getByPlaceholderText("name"), {target: {value: "Tim"}});
      fireEvent.change(getByPlaceholderText("date (mm/dd)"), {target: {value: '03/29'}});
      fireEvent.change(getByPlaceholderText("time (hh:mm)"), {target: {value: "02:10"}});
      fireEvent.change(getByPlaceholderText("number of guests"), {target: {value: 6}});

      expect(getByPlaceholderText("name").value).toBe("Tim")
      expect(getByPlaceholderText("date (mm/dd)").value).toBe("03/29")
      expect(getByPlaceholderText("time (hh:mm)").value).toBe("02:10")
      expect(getByPlaceholderText("number of guests").value).toBe("6")
  })

  it("should submit correct data on submit", () => {
    Date.now = jest.fn().mockImplementation(()=> 9999)

    const mockAddReservation = jest.fn()
    const { getByText, getByPlaceholderText } = render(<Form
      addReservation={mockAddReservation}/>)

      fireEvent.change(getByPlaceholderText("name"), {target: {value: "Tim"}});
      fireEvent.change(getByPlaceholderText("date (mm/dd)"), {target: {value: '03/29'}});
      fireEvent.change(getByPlaceholderText("time (hh:mm)"), {target: {value: "02:10"}});
      fireEvent.change(getByPlaceholderText("number of guests"), {target: {value: 6}});

      fireEvent.click(getByText("Make Reservations"))

      expect(mockAddReservation).toHaveBeenCalledWith({id:9999, name: "Tim", date: "03/29", time: "02:10", number: "6" })
  })
})

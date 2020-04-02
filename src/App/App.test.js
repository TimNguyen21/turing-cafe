import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("App", () => {
  it("should display new Reservation on submit", () => {
    const { getByText, getByPlaceholderText } = render(<App />)

    fireEvent.change(getByPlaceholderText("name"), {target: {value: "Tim"}});
    fireEvent.change(getByPlaceholderText("date (mm/dd)"), {target: {value: '01/01'}});
    fireEvent.change(getByPlaceholderText("time (hh:mm)"), {target: {value: "12:15"}});
    fireEvent.change(getByPlaceholderText("number of guests"), {target: {value: 60}});

    fireEvent.click(getByText("Make Reservations"));

    expect(getByText("Tim")).toBeInTheDocument();
    expect(getByText("01/01")).toBeInTheDocument();
    expect(getByText("12:15")).toBeInTheDocument();
    expect(getByText("Number of Guest: 60")).toBeInTheDocument();
  })
})

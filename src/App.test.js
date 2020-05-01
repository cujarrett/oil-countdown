import React from "react"
import { act, fireEvent, render, screen } from "@testing-library/react"
import App from "./App.js"

test("App loads as expected works as expected", async () => {
  render(<App />)
  const number = screen.getByTestId("number")
  expect(number).toBeInTheDocument()
  const message = screen.getByTestId("message")
  expect(message).toHaveTextContent("barrels of oil left.")
  act(() => {
    const moreInfoButton = screen.getByTestId("more-info-button")
    fireEvent.click(moreInfoButton)
  })
  const moreInfoContent = screen.getByTestId("more-info-content")
  expect(moreInfoContent).toBeInTheDocument()
  act(() => {
    const moreInfoCloseButton = screen.getByTestId("more-info-close-button")
    fireEvent.click(moreInfoCloseButton)
  })
})

import React from "react"
import { render, screen } from "@testing-library/react"
import App from "../App"

test("renders one gif", () => {
  render(<App />)
  const linkElement = screen.getByAltText(/gatitos locos/i)

  expect(linkElement).toBeVisible()
})

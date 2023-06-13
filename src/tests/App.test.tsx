import React from "react"
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react"
import App from "../App"

test("Renderiza un gif", async () => {
  render(<App />)
  await waitForElementToBeRemoved(() => screen.queryByText("Cargando..."))
  const linkElement = screen.getByAltText(/gatitos locos/i)
  expect(linkElement).toBeVisible()
})

test("Muestra hasta 20 gifs", async () => {
  render(<App />)
  await waitForElementToBeRemoved(() => screen.queryByText("Cargando..."))
  const elements = screen.getAllByTestId("gif-card")
  expect(elements.length).toBeLessThanOrEqual(20)
})

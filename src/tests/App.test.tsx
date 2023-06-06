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

test("Muestra 20 gifs", async () => {
  //const { container } = render(<App />);
  render(<App />)
  await waitForElementToBeRemoved(() => screen.queryByText("Cargando..."))
  const elements = screen.getAllByRole("img")
  expect(elements.length).toBe(20)
})

test("Muestra hasta 20 gifs", async () => {
  //const { container } = render(<App />);
  render(<App />)
  await waitForElementToBeRemoved(() => screen.queryByText("Cargando..."))
  const elements = screen.getAllByRole("img")
  expect(elements.length).toBeLessThanOrEqual(21)
})

test("Muestra primero el gif mas votado", async () => {
  render(<App />)
  await waitForElementToBeRemoved(() => screen.queryByText("Cargando..."))
  const elements = screen.getAllByRole("img")
  expect(elements[0].getAttribute("alt")).toEqual(/gif mas votado/i)
})

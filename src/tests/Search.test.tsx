import {
  render,
  screen,
  waitForElementToBeRemoved,
  fireEvent,
  findByAltText,
} from "@testing-library/react"
import App from "../App"

test("Search cats", async () => {
  render(<App />)
  await waitForElementToBeRemoved(() => screen.queryByText("Cargando..."))
  const input = screen.getByPlaceholderText(
    "¿Que quieres buscar? ¡Encuentralo!"
  )
  fireEvent.change(input, { target: { value: "cat" } })

  const button = screen.getByAltText("Search Icon")
  fireEvent.click(button)

  screen.getByText("Cargando...")

  const elements = await screen.findAllByTestId("gif-card")
  elements.forEach((element) => {
    expect(element.getAttribute("aria-label")).toMatch(/cat/i)
  })
})

test("Search dogs", async () => {
  render(<App />)
  await waitForElementToBeRemoved(() => screen.queryByText("Cargando..."))
  const input = screen.getByPlaceholderText(
    "¿Que quieres buscar? ¡Encuentralo!"
  )
  fireEvent.change(input, { target: { value: "dog" } })

  const button = screen.getByAltText("Search Icon")
  fireEvent.click(button)

  screen.getByText("Cargando...")

  const elements = await screen.findAllByTestId("gif-card")
  elements.forEach((element) => {
    expect(element.getAttribute("aria-label")).toMatch(/dog/i)
  })
})

test("Search goiko -> no results found", async () => {
  render(<App />)
  await waitForElementToBeRemoved(() => screen.queryByText("Cargando..."))
  const input = screen.getByPlaceholderText(
    "¿Que quieres buscar? ¡Encuentralo!"
  )
  fireEvent.change(input, { target: { value: "goiko" } })

  const button = screen.getByAltText("Search Icon")
  fireEvent.click(button)

  screen.getByText("Cargando...")

  expect(await screen.findByText("No se han encontrado guifs")).toBeVisible()
  expect(screen.queryByTestId("gif-card")).toBeNull()
})

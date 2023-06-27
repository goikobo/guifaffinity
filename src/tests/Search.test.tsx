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

  await screen.findByText("Cargando...")
  await waitForElementToBeRemoved(() => screen.queryByText("Cargando..."))

  const elements = screen.getAllByTestId("gif-card")
  elements.forEach((element) => {
    expect(element.getAttribute("aria-label")).toMatch(/cat/i)
  })
})

import {
  render,
  screen,
  waitForElementToBeRemoved,
  fireEvent,
} from "@testing-library/react";
import App from "../App";

test("Search dogs", async () => {
  render(<App />);
  await waitForElementToBeRemoved(() => screen.queryByText("Cargando..."));
  const input = screen.getByPlaceholderText(
    "¿Que quieres buscar? ¡Encuentralo!"
  );
  fireEvent.change(input, { target: { value: "cat" } });

  const button = screen.getByAltText("Search Icon");
  fireEvent.click(button);

  const elements = screen.getAllByTestId("gif-card");
  // TODO: expect all to contains cat in alt text
  expect(true).toBeFalsy();
});

import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("Renderiza un gif", () => {
  render(<App />);
  const linkElement = screen.getByAltText(/gatitos locos/i);

  expect(linkElement).toBeVisible();
});

test("Muestra 20 gifs", () => {
  //const { container } = render(<App />);
  render(<App />);
  const elements = screen.getAllByRole("img");
  expect(elements.length).toBe(20);
});

test("Muestra hasta 20 gifs", () => {
  //const { container } = render(<App />);
  render(<App />);
  const elements = screen.getAllByRole("img");
  expect(elements.length).toBeLessThanOrEqual(21);
});

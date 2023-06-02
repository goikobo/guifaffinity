import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("Renderiza un gif", () => {
  render(<App />);
  const linkElement = screen.getByAltText(/gatitos locos/i);

  expect(linkElement).toBeVisible();
});

test("Muestra hasta 20 gifs", () => {
  //const { container } = render(<App />);
  render(<App />);
  const elements = screen.getAllByRole("img");
  expect(elements.length).toBe(20);
});

// describe("App", () => {
//   it("Muestra hasta 20 gifs", () => {
//     render(<App />);
//     const imgElement = screen.getByAltText("gatitos locos");
//     const className = imgElement.className;

//     expect(screen.get("numGift1")).toBeInTheDocument();
//   });

//   // it("Muestra un máximo de 20 gifs.", () => {
//   //   const { container } = render(<Button variant="default" />);
//   //   expect(container.getElementsByClassName("default").length).toBe(20);
//   // })
// });

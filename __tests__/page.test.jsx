import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Hero from "../src/app/ui/Hero";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it("renders a heading with the correct text", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("José Germán");
  });

  it("renders a subheading", () => {
    render(<Hero />);
    const subheading = screen.getByRole("heading", { level: 2 });
    expect(subheading).toBeInTheDocument();
  });

  //testear que exita al menos una fracción de cadena de texto dentro de un parrafo del documento getByText
  it("renders a paragraph with the correct text", () => {
    render(<Hero />);
    const paragraph = screen.getByText(/desarrollador web/i);
    expect(paragraph).toBeInTheDocument();
  });





});

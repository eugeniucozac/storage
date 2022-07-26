import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Header } from "./Header";

const renderHeader = () => {
  return render(<Header />, { wrapper: MemoryRouter });
};

describe("COMPONENTS › Header", () => {
  it("renders without crashing", () => {
    // arrange
    const { container } = renderHeader();

    // assert
    expect(container).toBeInTheDocument();
  });

  it("renders menu", () => {
    // arrange
    renderHeader();

    // assert
    expect(screen.getByText("Products")).toBeInTheDocument();
  });
});

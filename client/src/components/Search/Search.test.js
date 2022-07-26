import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Search } from "./Search";

const componentProps = {
  query: "",
  handleSearch: jest.fn(),
};

describe("COMPONENTS › Search", () => {
  it("renders default input field", () => {
    // arrange
    render(<Search {...componentProps} />, {
      wrapper: MemoryRouter,
    });

    // assert
    expect(screen.getByRole("textbox")).toHaveValue("");
  });

  it("renders custom input field", () => {
    const props = {
      ...componentProps,
      query: "text",
    };

    // arrange
    render(<Search {...props} />, {
      wrapper: MemoryRouter,
    });

    // assert
    expect(screen.getByRole("textbox")).toHaveValue("text");
  });
});

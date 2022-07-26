import { render } from "@testing-library/react";
import { Footer } from "./Footer";

const renderFooter = () => {
  return render(<Footer />);
};

describe("COMPONENTS › Footer", () => {
  it("renders without crashing", () => {
    // arrange
    const { container } = renderFooter();

    // assert
    expect(container).toBeInTheDocument();
  });
});

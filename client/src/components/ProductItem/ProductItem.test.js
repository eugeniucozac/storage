import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ProductItem } from "./ProductItem";

const renderProductItem = (props) => {
  const componentProps = {
    ...props,
    id: 1,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    title: "Product name",
    price: 22,
  };
  render(<ProductItem {...componentProps} />, {
    wrapper: MemoryRouter,
  });

  return {
    componentProps,
  };
};

describe("COMPONENTS > ProductItem", () => {
  it("renders product details", () => {
    // arrange
    const { componentProps } = renderProductItem();
    const title = screen.getByRole("heading", { level: 3 });
    const price = screen.getByRole("heading", { level: 6 });
    const logo = screen.getByRole("img");

    // assert
    expect(title).toHaveTextContent(componentProps.title);
    expect(price).toHaveTextContent(componentProps.price);
    expect(logo).toHaveAttribute("src", componentProps.image);
  });
});

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Products } from "./Products";

const componentProps = {
  data: [
    {
      id: 1,
      title: "Foldsack Backpack",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: "Slim Fit T-Shirts",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
  ],
};

const renderProducts = () => {
  render(<Products {...componentProps} />, { wrapper: MemoryRouter });

  return {
    componentProps,
  };
};

describe("COMPONENTS › Products", () => {
  it("renders with products", () => {
    // arrange
    const { componentProps } = renderProducts();

    // assert
    componentProps.data.forEach((product) =>
      expect(screen.getByText(product.title)).toBeInTheDocument()
    );
  });

  it("renders with no products", () => {
    // arrange
    const props = {
      ...componentProps,
      data: [],
    };

    render(<Products {...props} />, {
      wrapper: MemoryRouter,
    });

    // assert
    expect(screen.getByText("No Products")).toBeInTheDocument();
  });
});

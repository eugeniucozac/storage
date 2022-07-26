import { ChangeEvent, useEffect, useState } from "react";
import { ProductItem } from "../ProductItem";
import { Search } from "../Search";
import { ProductType } from "../../type";
import classes from "./Products.styles";

export const Products = ({ data }: any) => {
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(data);
  }, []);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value.toLowerCase();
    setQuery(searchQuery);

    const searchResult = data.filter(
      (product: ProductType) =>
        product.title.toLowerCase().includes(searchQuery) ||
        product.price.toString().includes(searchQuery)
    );
    setFilteredProducts(searchResult);
  };

  return (
    <>
      <Search query={query} handleSearch={handleSearch} />
      {filteredProducts.length ? (
        <section className={classes.products}>
          {filteredProducts.map((product: ProductType, iter: number) => (
            <ProductItem key={iter} {...product} />
          ))}
        </section>
      ) : (
        <h3 className={classes.noProducts}>No Products</h3>
      )}
    </>
  );
};

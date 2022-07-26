import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getProducts, productsSelector } from "../../redux/products";
import { Products } from "../../components/Products";
import { PageLayout } from "../../layouts/PageLayout";
import classes from "./home.styles";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { products, loading, hasErrors } = useAppSelector(productsSelector);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (loading) return <p>Loading products...</p>;
  if (hasErrors) return <p>Cannot display products...</p>;

  return (
    <PageLayout>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Products</h2>
      </div>
      {products.length ? <Products data={products} /> : null}
    </PageLayout>
  );
};

import { useParams } from "react-router-dom";
import { PageLayout } from "../../layouts/PageLayout";
import { productsSelector } from "../../redux/products";
import { useAppSelector } from "../../redux/store";
import { ProductType } from "../../type";
import classes from "./product.styles";

export const SingleProduct = () => {
  const { productId } = useParams();
  const { products } = useAppSelector(productsSelector);
  const currentProduct = products.find(
    (product: ProductType) => product.id === Number(productId)
  );

  return (
    <PageLayout>
      <div className={classes.wrapper}>
        {currentProduct ? (
          <>
            <div className={classes.container}>
              <div className={classes.imageBlock}>
                <img
                  src={currentProduct?.image}
                  alt={currentProduct?.title}
                  className={classes.image}
                />
              </div>
              <div className={classes.details}>
                <h2 className={classes.title}>{currentProduct?.title}</h2>
                <h3 className={classes.price}>${currentProduct?.price}</h3>
                <h4 className={classes.category}>
                  Category:
                  <span className="italic"> {currentProduct?.category}</span>
                </h4>
                <div className="mt-6">
                  <h3>Reviews:</h3>
                  <div className="flex items-center">
                    <p>
                      {currentProduct?.rating?.rate} out of 5 stars{" "}
                      <span className={classes.reviews}>
                        {currentProduct?.rating?.count} reviews
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.description}>
              <div className="space-y-6">
                <h1 className={classes.descriptionTitle}>Description:</h1>
                <p className="text-white">{currentProduct?.description}</p>
              </div>
            </div>
          </>
        ) : (
          <h3>Product Not found</h3>
        )}
      </div>
    </PageLayout>
  );
};

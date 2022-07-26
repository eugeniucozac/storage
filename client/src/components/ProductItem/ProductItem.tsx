import { Link } from "react-router-dom";
import { ProductType } from "../../type";
import classes from "./ProductItem.styles";

export const ProductItem = ({ id, image, title, price }: ProductType) => {
  return (
    <section className={classes.product}>
      <img src={image} alt={title} className={classes.image} />
      <div className={classes.wrapper}>
        <div className="space-y-2">
          <h3 className={classes.title}>
            <Link to={`/product/${id}`}>{title}</Link>
          </h3>
          <h6>${price}</h6>
        </div>
      </div>
    </section>
  );
};

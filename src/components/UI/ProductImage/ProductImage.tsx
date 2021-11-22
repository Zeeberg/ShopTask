import React from "react";
import { IProduct } from "types/product";
import styles from "./styles.module.scss";

interface ProductItemProps {
  product: IProduct;
}

const ProductImage = ({ product }: ProductItemProps) => {
  return (
    <img
      className={styles["product-image"]}
      src={product.image}
      alt={product.title}
    />
  );
};

export default ProductImage;

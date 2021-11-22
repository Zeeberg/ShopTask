import ProductList from "components/Product/ProductList";
import Sidebar from "components/UI/Sidebar/Sidebar";
import React from "react";
import styles from "./styles.module.scss";
const Products = () => {
  return (
    <div className={styles["products-page"]}>
      <div className={styles["products-page__wrapper"]}>
        <Sidebar />
        <div className={styles.content}>
          <ProductList category="" />
        </div>
      </div>
    </div>
  );
};

export default Products;

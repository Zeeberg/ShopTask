import React from "react";
import ProductList from "components/Product/ProductList";
import Sidebar from "components/UI/Sidebar/Sidebar";
import styles from "./styles.module.scss";
import { useParams } from "react-router-dom";

interface ProductsCategoryPageParams {
  category: string;
}

const ProductsCategoryPage = () => {
  const params = useParams<ProductsCategoryPageParams>();
  return (
    <div className={styles["products-page"]}>
      <div className={styles["products-page__wrapper"]}>
        <Sidebar />
        <div className={styles.content}>
          <ProductList category={params.category} />
        </div>
      </div>
    </div>
  );
};

export default ProductsCategoryPage;

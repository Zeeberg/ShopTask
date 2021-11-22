import { useTypedSelector } from "hooks/useTypedSelector";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "store/action-creators/category";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";
import { capitalizeFirstLetter } from "utils/helpers";
import DotsLoader from "../Loader/DotsLoader";

const Navbar = () => {
  const { categories, error, loading } = useTypedSelector(
    (state) => state.category
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <div className="navbar">
      <div>
        {error || (loading && <DotsLoader />)}
        {categories.map((category) => (
          <NavLink
            key={category}
            className={styles.navbar__item}
            to={`/products/${category}`}
            activeClassName={styles.navbar__item + " " + styles.active}
          >
            {capitalizeFirstLetter(category)}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

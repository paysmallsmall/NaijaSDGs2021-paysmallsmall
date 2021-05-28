import React from "react";
import { Container } from "react-bootstrap";
import { RecommendedProduct } from ".";
import { products } from "../../dummy/products";
import styles from "../../styles/shop/SpecialList.module.css";

const Recommended = ({ name }) => {
  return (
    <Container className={styles.specials}>
      <div className={styles.header}>
        <div className={styles.title}>{name}</div>
      </div>
      <div className={styles.products}>
        {products && products.length > 0 ? (
          <>
            {products.slice(0, 4).map((product, index) => (
              <RecommendedProduct product={product} key={index} />
            ))}
          </>
        ) : (
          <div>
            <h6>No product found</h6>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Recommended;

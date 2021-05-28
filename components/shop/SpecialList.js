import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import { products } from "../../dummy/products";
import styles from "../../styles/shop/SpecialList.module.css";
import SpecialProduct from "./SpecialProduct";

const SpecialList = ({ name }) => {
  return (
    <Container className={styles.specials}>
      <div className={styles.header}>
        <div className={styles.title}>{name}</div>
        <div className={styles.link}>
          <Link href="/">
            <a>See all</a>
          </Link>
        </div>
      </div>
      <div className={styles.products}>
        {products && products.length > 0 ? (
          <>
            {products.map((product, index) => (
              <SpecialProduct product={product} key={index} />
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

export default SpecialList;

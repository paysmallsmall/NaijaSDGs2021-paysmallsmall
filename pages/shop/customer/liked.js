import React from "react";
import { Container } from "react-bootstrap";
import { SpecialProduct } from "../../../components/shop";
import { products } from "../../../dummy/products";
import styles from "../../../styles/shop/customer/components/Liked.module.css";

const Liked = () => {
  return (
    <div className={styles.liked}>
      <section className={styles.header}>
        <Container>
          <h1>Liked Products</h1>
          <p>Overview of your liked products</p>
        </Container>
      </section>
      <section className="mt-4">
        <Container>
          <div className={styles.products}>
            {products && products.length > 0 ? (
              <>
                {products.slice(0, 5).map((product, index) => (
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
      </section>
    </div>
  );
};

Liked.layout = "customer";

export default Liked;

import React from "react";
import { Container } from "react-bootstrap";
import Order from "../../../components/customer/Order";
import styles from "../../../styles/shop/customer/pending.module.css";

const Open = () => {
  return (
    <div className={styles.pending}>
      <section className={styles.header}>
        <Container>
          <h1>Open Orders</h1>
          <p>Overview of your open orders</p>
        </Container>
      </section>
      <section className="mt-4">
        <Container>
          <Order />
          <Order />
        </Container>
      </section>
    </div>
  );
};

Open.layout = "customer";

export default Open;

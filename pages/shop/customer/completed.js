import React from "react";
import { Container } from "react-bootstrap";
import Order from "../../../components/customer/Order";
import styles from "../../../styles/shop/customer/pending.module.css";

const Completed = () => {
  return (
    <div className={styles.pending}>
      <section className={styles.header}>
        <Container>
          <h1>Completed Orders</h1>
          <p>Overview of your completed orders</p>
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

Completed.layout = "customer";

export default Completed;

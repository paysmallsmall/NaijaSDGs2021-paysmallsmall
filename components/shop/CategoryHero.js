import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/shop/Category.module.css";
import { PrimaryButton } from "../common";
const CategoryHero = () => {
  return (
    <section className={styles.ads1}>
      <Container>
        <Row>
          <Col
            xs={12}
            md={6}
            className="d-flex flex-column justify-content-center">
            <div className="mx-auto mt-5 mb-5">
              <h1 className="mb-4">
                Pay in installment for your dream furniture
              </h1>
              <PrimaryButton>Shop Now</PrimaryButton>
            </div>
          </Col>
          <Col className="d-none d-md-flex justify-content-end" xs={12} md={6}>
            <Image
              className="img-fluid"
              width={400}
              height={400}
              src="/images/chair2.png"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CategoryHero;

import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "../../styles/shop/Brands.module.css";

const Brands = () => {
  return (
    <section className={styles.brands}>
      <Container>
        <div className={styles.content}>
          <div className={styles.top}>
            <Link href="/brand/123">
              <a className={styles.brand}>
                <img
                  src="/images/brands/adidas.png"
                  className="img-fluid"
                  alt="addidas"
                />
              </a>
            </Link>
            <Link href="/brand/123">
              <a className={styles.brand}>
                <img
                  src="/images/brands/cowbell.png"
                  className="img-fluid"
                  alt="cowbell"
                />
              </a>
            </Link>
            <Link href="/brand/123">
              <a className={styles.brand}>
                <img
                  src="/images/brands/minimie.png"
                  className="img-fluid"
                  alt="minimie"
                />
              </a>
            </Link>
            <Link href="/brand/123">
              <a className={styles.brand}>
                <img
                  src="/images/brands/tecno.png"
                  className="img-fluid"
                  alt="tecno"
                />
              </a>
            </Link>
            <Link href="/brand/123">
              <a className={styles.brand}>
                <img
                  src="/images/brands/cowbell.png"
                  className="img-fluid"
                  alt="cowbell"
                />
              </a>
            </Link>
            <Link href="/brand/123">
              <a className={styles.brand}>
                <img
                  src="/images/brands/minimie.png"
                  className="img-fluid"
                  alt="minimie"
                />
              </a>
            </Link>
            {/* </div> */}
            {/* <div className={styles.down}> */}
            <Link href="/brand/123">
              <a className={styles.brand}>
                <img
                  src="/images/brands/minimie.png"
                  className="img-fluid"
                  alt="minimie"
                />
              </a>
            </Link>
            <Link href="/brand/123">
              <a className={styles.brand}>
                <img
                  src="/images/brands/tecno.png"
                  className="img-fluid"
                  alt="tecno"
                />
              </a>
            </Link>
            <Link href="/brand/123">
              <a className={styles.brand}>
                <img
                  src="/images/brands/adidas.png"
                  className="img-fluid"
                  alt="addidas"
                />
              </a>
            </Link>
            <Link href="/brand/123">
              <a className={styles.brand}>
                <img
                  src="/images/brands/minimie.png"
                  className="img-fluid"
                  alt="minimie"
                />
              </a>
            </Link>
            <Link href="/brand/123">
              <a className={styles.brand}>
                <img
                  src="/images/brands/cowbell.png"
                  className="img-fluid"
                  alt="cowbell"
                />
              </a>
            </Link>
            <Link href="/brand/123">
              <a className={styles.brand}>
                <img
                  src="/images/brands/tecno.png"
                  className="img-fluid"
                  alt="tecno"
                />
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Brands;

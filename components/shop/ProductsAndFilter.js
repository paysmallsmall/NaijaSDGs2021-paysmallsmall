import Link from "next/link";
import React, { useState } from "react";
import { Card, Col, Container, Form, Pagination, Row } from "react-bootstrap";
import { Product } from ".";
import styles from "../../styles/shop/ProductAndFilter.module.css";

const ProductsAndFilter = ({
  brands,
  prices,
  categories,
  categorySlug,
  products,
}) => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  return (
    <section className={styles.content}>
      <Container>
        <Row>
          <Col className="d-none d-md-flex flex-column" md={3}>
            <Card className="w-100 shadowv">
              <Card.Body>
                <div className={styles.category}>
                  <h5>CATEGORIES</h5>
                  <ul>
                    {categories &&
                      categories.map((category, index) => (
                        <Link
                          key={index}
                          href={`/shop/category/${category.slug}`}>
                          <a>
                            <li>
                              <span>{category.name}</span>{" "}
                              <span>{category.total}</span>
                            </li>
                          </a>
                        </Link>
                      ))}
                  </ul>
                </div>
              </Card.Body>
            </Card>
            <Card className="w-100 shadowv mt-3">
              <Card.Body>
                <div className={styles.brands}>
                  <h5>BRANDS</h5>
                  <Form.Group controlId="formBasicCheckbox">
                    {brands &&
                      brands.map((brand, index) => (
                        <Form.Check
                          key={index}
                          id={brand.name}
                          name={brand.name}
                          className={styles.brand}
                          type="checkbox"
                          label={brand.name}
                        />
                      ))}
                  </Form.Group>
                </div>
              </Card.Body>
            </Card>
            <Card className="w-100 shadowv mt-3">
              <Card.Body>
                <div className={styles.brands}>
                  <h5>PRICE</h5>
                  <Form.Group controlId="formBasicCheckbox">
                    {prices &&
                      prices.map((price, index) => (
                        <Form.Check
                          key={index}
                          id={price.name}
                          name={price.name}
                          className={styles.brand}
                          type="checkbox"
                          label={price.name}
                        />
                      ))}
                  </Form.Group>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={9}>
            <section className={styles.productsContent}>
              <div className={styles.heading}>
                <h4 className="text-capitalize">{categorySlug}</h4>
                <p>100 results found</p>
              </div>
              <div className={styles.products}>
                {products && products.length > 0 ? (
                  <>
                    {products.map((product, index) => (
                      <Product product={product} key={index} />
                    ))}
                  </>
                ) : (
                  <div>
                    <h6>No product found</h6>
                  </div>
                )}
              </div>
              <div className="d-flex justify-content-center mt-5">
                <Pagination>
                  <Pagination.Prev />
                  <Pagination.Item active={true}>{1}</Pagination.Item>
                  <Pagination.Item active={false}>{2}</Pagination.Item>
                  <Pagination.Item active={false}>{3}</Pagination.Item>
                  <Pagination.Item active={false}>{4}</Pagination.Item>
                  <Pagination.Next />
                </Pagination>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductsAndFilter;

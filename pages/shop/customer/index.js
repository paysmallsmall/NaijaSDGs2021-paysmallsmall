import Head from "next/head";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { BiCart, BiCoinStack } from "react-icons/bi";
import { BsCheckCircle } from "react-icons/bs";
import { FaPiggyBank } from "react-icons/fa";
import Order from "../../../components/customer/Order";
import { wrapper } from "../../../store/store";
// import { AUTH_RESOLVED } from "../../../store/types/authTypes";
import styles from "../../../styles/shop/customer/Customer.module.css";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const state = store.getState();
    // console.log("server: ", state);
    // const { isAuthenticated, user, role } = state.auth;
    // if (!isAuthenticated || !user) {
    //   return {
    //     redirect: {
    //       destination: "/login",
    //       permanent: false,
    //     },
    //   };
    // }
    return {
      props: {},
    };
  }
);

const Customer = ({ user }) => {
  // console.log("user is: ", user);
  // const auth = useSelector((state) => state.auth);
  // console.log("auth is:", auth);
  return (
    <div className={styles.customer}>
      <Head>
        <title>Dashboard - Pinchpayer NG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.header}>
        <Container>
          <Card className="mt-2">
            <Card.Body>
              <div className={styles.row}>
                <div className={styles.image} />
                <div className={styles.details}>
                  <div className={styles.top}>
                    Hi, <span className={styles.name}>Dino Rhythms</span>
                    <BsCheckCircle color="green" className="ml-2" />
                  </div>
                  <div className={styles.bottom}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </section>
      <section className={styles.statistics}>
        <Container>
          <Row>
            <Col xs={6} md={3}>
              <Card className="mb-3 shadow">
                <Card.Body className={styles.box}>
                  <div className={styles.icon}>
                    <BiCoinStack color="#5663fb" />
                  </div>
                  <div className={styles.name}>Available Credit</div>
                  <div className={styles.value}>N 10000</div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3}>
              <Card className="mb-3 shadow">
                <Card.Body className={styles.box}>
                  <div
                    className={styles.icon}
                    style={{ backgroundColor: "#f1f1b8" }}>
                    <FaPiggyBank color="#c3c320" />
                  </div>
                  <div className={styles.name}>Credit Limit</div>
                  <div className={styles.value}>N 10000</div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3}>
              <Card className="mb-3 shadow">
                <Card.Body className={styles.box}>
                  <div
                    className={styles.icon}
                    style={{ backgroundColor: "#f7d4d4" }}>
                    <BiCart color="#ff0000" />
                  </div>
                  <div className={styles.name}>Open Orders</div>
                  <div className={styles.value}>3</div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3}>
              <Card className="mb-3 shadow">
                <Card.Body className={styles.box}>
                  <div
                    className={styles.icon}
                    style={{ backgroundColor: "#b3f1b3" }}>
                    <BsCheckCircle color="#008000" />
                  </div>
                  <div className={styles.name}>Completed Orders</div>
                  <div className={styles.value}>5</div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.history}>
        <Container>
          <div className={styles.header}>
            <div>Order History</div>
            <div className={styles.more}>View All</div>
          </div>
          <div className={styles.main}>
            <Order />
            <Order />
            <Order />
          </div>
        </Container>
      </section>
    </div>
  );
};

Customer.layout = "customer";

export default Customer;

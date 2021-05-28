import Head from "next/head";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { PrimaryButton } from "../components/common";
// @ts-ignore
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>PinchPayer - Pay Small Small</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.overlay}>
            <div className={styles.rectangle}>
              <div className="d-flex mb-3">
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
              </div>
              <div className="d-flex mb-3">
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
              </div>
              <div className="d-flex mb-3">
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
              </div>
              <div className="d-flex mb-3">
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
              </div>
              <div className="d-flex mb-3">
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
              </div>
              <div className="d-flex mb-3">
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
              </div>
              <div className="d-flex mb-3">
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
              </div>
              <div className="d-flex mb-3">
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
              </div>
              <div className="d-flex mb-3">
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
              </div>
            </div>
            <div className={styles.circle} />
            <div className={styles.circle2} />
            <div className={styles.triangle} />
          </div>
          <Container className="mycontainer">
            <Row>
              <Col xs={12} md={6} className="d-flex">
                <div className="my-auto">
                  <h1 className="">
                    A seamless way to order and checkout with bit payments
                  </h1>
                  <p>
                    Pinchpayer makes online payments easy for you, with flexible
                    milestone payment options for products and services you
                    desire to own.
                  </p>
                  <Link href="/signup">
                    <a>
                      <PrimaryButton className="mb-0 mb-md-5">
                        Create Account
                      </PrimaryButton>
                    </a>
                  </Link>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div
                  style={{
                    position: "relative",
                    height: "100%",
                    width: "100%",
                    display: "flex",
                  }}>
                  <div className={styles.imgOverlay}>
                    <div className={styles.shape1} />
                    <div className={styles.shape2} />
                    <div className={styles.shape3} />
                    <div className={styles.shape4} />
                  </div>
                  <img
                    src="images/chair2.png"
                    className="img-fluid mx-auto"
                    alt="pay small small"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.intro}>
          <Container>
            <Row>
              <Col xs={12}>
                <h2 className="text-center">
                  Make more orders without waiting
                  <br /> to raise full checkout price.
                </h2>
              </Col>
            </Row>
            <Row className="pt-0 pt-md-3">
              <Col xs={12} md={6}>
                <img
                  src="images/laptop.png"
                  className="img-fluid"
                  alt="Make more orders without waiting
                   to raise full checkout price"
                />
              </Col>
              <Col xs={12} md={6}>
                <h3 className="mt-0 mt-md-5">
                  Checkout more orders <br /> with flexible payment in 3 steps
                </h3>
                <p className="bigP mt-3">
                  No need to wait until you get the full amount for your orders.
                  <br />
                  You can order now, own it and pay with flexible bit payment
                  options.
                </p>
                <h4 className="mt-4">Sign Up</h4>
                <p className="mt-3">
                  Create an account with your name, email, phone number, address
                  <br />
                  and debit card details
                </p>
                <h4 className="mt-3">Bit payment is active</h4>
                <p className="mt-3">
                  Bit payment checkout option is activated for your orders
                  <br />
                  across the web
                </p>
                <h4 className="mt-3">Shop with ease</h4>
                <p className="mt-3">
                  Order and own more items with your most flexible milestone
                  <br />
                  payment plan
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.why}>
          <div className={styles.overlay}>
            <div className={styles.shape1} />
            <div className={styles.shape2} />
            <div className={styles.shape3} />
          </div>
          <Container>
            <Row>
              <Col xs={12}>
                <h2 className="">Why use Pinchpayers?</h2>
                <p className="bigP mt-3">
                  No need to wait until you get the full amount for your orders.
                  <br />
                  You can order now, own it and pay with flexible bit payment
                  options.
                </p>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col xs={12} md={4} className="mb-3">
                <div className={`${styles.features} shadow`}>
                  <div className={styles.img}>
                    <img
                      src="images/icons/flexible.png"
                      alt="Flexible Milestone Payment"
                      className="mt-3 img-fluid"
                    />
                  </div>
                  <h4 className="mt-4">
                    Flexible Milestone
                    <br /> Payment
                  </h4>
                  <p className="mt-3">
                    No need to wait until you get the full amount for your
                    orders. You can order now, own it and pay with flexible bit
                    payment options.
                  </p>
                  <Link href="#">
                    <a className="mt-4 mb-4">Check More</a>
                  </Link>
                </div>
              </Col>
              <Col xs={12} md={4} className="mb-3">
                <div className={`${styles.features} shadow`}>
                  <div className={styles.img}>
                    <img
                      src="images/icons/secure.png"
                      alt="Flexible Milestone Payment"
                      className="mt-3"
                    />
                  </div>
                  <h4 className="mt-4">
                    Secure &
                    <br /> Safe
                  </h4>
                  <p className="mt-3">
                    When you shop using our bit payment checkout technology,
                    your data is kept safe with our advanced security
                    protection.
                  </p>
                  <Link href="#">
                    <a className="mt-4">Check More</a>
                  </Link>
                </div>
              </Col>
              <Col xs={12} md={4} className="mb-3">
                <div className={`${styles.features} shadow`}>
                  <div className={styles.img}>
                    <img
                      src="images/icons/cart.png"
                      alt="Flexible Milestone Payment"
                      className="mt-3"
                    />
                  </div>
                  <h4 className="mt-4">
                    No Checkout
                    <br /> Barriers
                  </h4>
                  <p className="mt-3">
                    At Pinchpayer, your current budget cannot limit your desired
                    order. Start shopping more without any checkout payment
                    barrier.
                  </p>
                  <Link href="#">
                    <a className="mt-4">Check More</a>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.shop}>
          <Container>
            <Row>
              <Col xs={12}>
                <h2 className="">Instant Shop</h2>
                <p className="bigP mt-3">
                  No item on your wishlist and cart pages will be unordered.
                  <br />
                  Pinchpayer enables you to shop & own luxury items with
                  flexible payment plans that fit yourbudget.
                </p>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col xs={12} md={5}>
                <Link href="#">
                  <a>
                    <div className={styles.bigproduct}>
                      <div className={styles.bigtitle}>
                        <div className="rotate">Furnitures</div>
                      </div>
                      <div className="d-flex align-items-center justify-content-center w-100 p-3">
                        <img
                          className="img-fluid"
                          src="images/chair2.png"
                          alt="funiture"
                        />
                      </div>
                    </div>
                  </a>
                </Link>
              </Col>
              <Col xs={12} md={7}>
                <Row>
                  <Col xs={12} md={6} className="mt-4 mt-md-0">
                    <Link href="#">
                      <a>
                        <div className={styles.smallproduct}>
                          <div className={styles.smalltitle}>
                            <div className="rotate">Home & Offices</div>
                          </div>
                          <div className="d-flex align-items-center justify-content-center w-100 p-3">
                            <img
                              className="img-fluid"
                              src="images/chair3.png"
                              alt="funiture"
                            />
                          </div>
                        </div>
                      </a>
                    </Link>
                  </Col>
                  <Col xs={12} md={6} className="mt-4 mt-md-0">
                    <Link href="#">
                      <a>
                        <div className={styles.smallproduct}>
                          <div className={styles.smalltitle}>
                            <div className="rotate">Home & Offices</div>
                          </div>
                          <div className="d-flex align-items-center justify-content-center w-100 p-3">
                            <img
                              className="img-fluid"
                              src="images/bridge.png"
                              alt="funiture"
                            />
                          </div>
                        </div>
                      </a>
                    </Link>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col xs={12} md={6}>
                    <Link href="#">
                      <a>
                        <div className={styles.smallproduct}>
                          <div className={styles.smalltitle}>
                            <div className="rotate">Fashion</div>
                          </div>
                          <div className="d-flex align-items-center p-3 w-100 justify-content-center">
                            <img
                              className="img-fluid"
                              src="images/shoe.png"
                              alt="funiture"
                            />
                          </div>
                        </div>
                      </a>
                    </Link>
                  </Col>
                  <Col xs={12} md={6} className="d-flex">
                    <div className="text-center my-auto mx-auto">
                      <h4 className="mt-5 mt-md-0">See all products</h4>
                      <p className="mb-5 mt-3">
                        New to Pinchpayer?{" "}
                        <Link href="/signup">
                          <a>Sign up</a>
                        </Link>
                      </p>
                      <Link href="/shop">
                        <a>
                          <PrimaryButton>SHOP NOW</PrimaryButton>
                        </a>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.try}>
          <Container className="text-center text-md-left">
            <Row>
              <Col xs={12} md={9}>
                <h2>Try Pinchpayer Now</h2>
                <p className="bigP mt-4">
                  Be the first to know when we launch in your location, plus all
                  the exciting benefits we will be giving out to our community
                  of selected beta users of the Pinchpayer flexible checkout
                  payment technology.
                </p>
              </Col>
              <Col xs={12} md={3}>
                <div className="h-100 d-flex justify-content-center mt-3 mt-md-0">
                  <Link href="/signup" className="my-auto">
                    <a>
                      <PrimaryButton className="my-auto">
                        Create Account
                      </PrimaryButton>
                    </a>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </div>
  );
};

Home.layout = "default";

export default Home;

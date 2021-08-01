import Head from "next/head";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
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
            <div className={styles.circle}></div>
            <div className={styles.circle2}></div>
          </div>
          <Container>
            <Row>
              <Col className="d-flex">
                <div className="my-auto">
                  <h1 className="">
                    Pay <span>Small Small</span>
                    <br /> on Your Purchase
                  </h1>
                  <p className="mb-5">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd
                  </p>
                  <Button
                    variant="outline-primary"
                    className={`${styles.getstarted} mb-5`}>
                    Get Started
                  </Button>
                </div>
              </Col>
              <Col>
                <img
                  src="images/chair.png"
                  className="img-fluid"
                  alt="pay small small"
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.howitworks}>
          <div className={styles.overlay}>
            <div className={`${styles.rectangle} d-none d-md-block`}>
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
            <div className={styles.circle}></div>
            <div className={styles.circle2}></div>
            <div className={styles.triangle}></div>
          </div>
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <div className="mt-5 mb-5 pt-5 pb-5">
                  <h2>
                    How it <br />
                    works
                  </h2>
                  <p className="text-white mt-5 mb-5">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia
                  </p>
                  <Button variant="outline-primary" className={styles.myBotton}>
                    Get Started
                  </Button>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <img
                  src="images/phone.png"
                  className="img-fluid d-none d-md-block"
                  alt="how it works"
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.flexible}>
          <div className={styles.overlay}>
            <div className={styles.circle}></div>
            <div className={styles.circle2}></div>
            <div className={styles.triangle}></div>
          </div>
          <Container className="mt-5 mb-5">
            <Row>
              <Col>
                <h2 className="text-center">
                  Offer Online Shoppers Flexible Pay<span>bybit</span> <br />
                  Options That will Grow Your Business
                </h2>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col xs={12} md={4}>
                <Card className={`${styles.card} shadow pt-3 pb-3 mb-3`}>
                  <Card.Body className="d-flex">
                    <div>
                      <img
                        src="images/flexible-item1.png"
                        className="img-fluid"
                        width="300"
                        alt="flexible payment"
                      />
                    </div>
                    <div className="pl-4">
                      <h3 className="text-capitalize">Wealth Management</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd
                      </p>
                      <Button
                        variant="outline-primary"
                        className={styles.mySmallBotton}>
                        Learn More
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={4}>
                <Card className={`${styles.card} shadow pt-3 pb-3 mb-3`}>
                  <Card.Body className="d-flex">
                    <div>
                      <img
                        src="images/flexible-item2.png"
                        className="img-fluid"
                        width="300"
                        alt="flexible payment"
                      />
                    </div>
                    <div className="pl-4">
                      <h3 className="text-capitalize">Manage Shopping</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd
                      </p>
                      <Button
                        variant="outline-primary"
                        className={styles.mySmallBotton}>
                        Learn More
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={4}>
                <Card className={`${styles.card} shadow pt-3 pb-3 mb-3`}>
                  <Card.Body className="d-flex">
                    <div>
                      <img
                        src="images/flexible-item3.png"
                        className="img-fluid"
                        width="300"
                        alt="flexible payment"
                      />
                    </div>
                    <div className="pl-4">
                      <h3 className="text-capitalize">Safety And Security</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd
                      </p>
                      <Button
                        variant="outline-primary"
                        className={styles.mySmallBotton}>
                        Learn More
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
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

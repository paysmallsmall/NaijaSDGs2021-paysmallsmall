import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import styles from "../../../styles/shop/customer/Inbox.module.css";

const Inbox = () => {
  const [show, setShow] = useState();

  const handleClick = (id) => {
    if (show === id) {
      setShow("");
      return;
    }
    setShow(id);
  };
  return (
    <div className={styles.inbox}>
      <section className={styles.header}>
        <Container>
          <h1 className="mt-4 mb-4 mt-md-0 mb-md-0">Inbox</h1>
        </Container>
      </section>
      <section className={styles.messages}>
        <Container>
          <Card className={styles.messageBox} onClick={() => handleClick(1)}>
            <Card.Body className={styles.message}>
              <div className={styles.image}>P</div>
              <div className={`${styles.type} text-truncate`}>Payment</div>
              <div className={styles.intro}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </div>
              <div className={styles.date}>9:00 AM</div>
            </Card.Body>
          </Card>
          <Card className={`${show === 1 ? "d-block" : "d-none"} shadow mb-2`}>
            <Card.Body>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </Card.Body>
          </Card>

          <Card className={styles.messageBox} onClick={() => handleClick(2)}>
            <Card.Body className={styles.message}>
              <div className={styles.image}>A</div>
              <div className={`${styles.type} text-truncate`}>Approval</div>
              <div className={styles.intro}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </div>
              <div className={styles.date}>July 7</div>
            </Card.Body>
          </Card>
          <Card className={`${show === 2 ? "d-block" : "d-none"} shadow mb-2`}>
            <Card.Body>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </Card.Body>
          </Card>

          <Card className={styles.messageBox} onClick={() => handleClick(3)}>
            <Card.Body className={styles.message}>
              <div className={styles.image}>C</div>
              <div className={`${styles.type} text-truncate`}>Checkout</div>
              <div className={styles.intro}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </div>
              <div className={styles.date}>July 5</div>
            </Card.Body>
          </Card>
          <Card className={`${show === 3 ? "d-block" : "d-none"} shadow mb-2`}>
            <Card.Body>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </Card.Body>
          </Card>

          <Card className={styles.messageBox} onClick={() => handleClick(4)}>
            <Card.Body className={styles.message}>
              <div className={styles.image}>P</div>
              <div className={`${styles.type} text-truncate`}>Payment</div>
              <div className={styles.intro}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </div>
              <div className={styles.date}>July 3</div>
            </Card.Body>
          </Card>
          <Card className={`${show === 4 ? "d-block" : "d-none"} shadow mb-2`}>
            <Card.Body>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </Card.Body>
          </Card>

          <Card className={styles.messageBox} onClick={() => handleClick(5)}>
            <Card.Body className={styles.message}>
              <div className={styles.image}>V</div>
              <div className={`${styles.type} text-truncate`}>Verification</div>
              <div className={styles.intro}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </div>
              <div className={styles.date}>July 2</div>
            </Card.Body>
          </Card>
          <Card className={`${show === 5 ? "d-block" : "d-none"} shadow mb-2`}>
            <Card.Body>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </Card.Body>
          </Card>
        </Container>
      </section>
    </div>
  );
};

Inbox.layout = "customer";

export default Inbox;

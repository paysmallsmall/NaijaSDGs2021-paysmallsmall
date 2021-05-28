import React, { useState } from "react";
import { Card, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsCheckCircle } from "react-icons/bs";
import { FiPlusCircle } from "react-icons/fi";
import { RiEditFill, RiTimerFlashLine } from "react-icons/ri";
import {
  OutlinePrimaryButton,
  PrimaryButton,
} from "../../../components/common";
import styles from "../../../styles/shop/customer/addresses.module.css";

const Addresses = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showForm, setShowForm] = useState(false);

  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <div className={styles.addresses}>
      <section className={styles.header}>
        <Container>
          <h1>Addresses</h1>
          <p>Overview of your addresses</p>
        </Container>
      </section>
      {showForm && (
        <section className={styles.form}>
          <Container>
            <p>Add a new address</p>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group>
                <Form.Control
                  className={styles.input}
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Name"
                />
                {errors.name && (
                  <small className="text-danger">This field is required</small>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Control
                  className={styles.input}
                  {...register("address", { required: true })}
                  type="text"
                  placeholder="Address"
                />
                {errors.adress && (
                  <small className="text-danger">This field is required</small>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Control
                  className={styles.input}
                  {...register("receiever", { required: true })}
                  type="text"
                  placeholder="Receiver name"
                />
                {errors.receiver && (
                  <small className="text-danger">This field is required</small>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Control
                  className={styles.input}
                  {...register("phone", { required: true })}
                  type="text"
                  placeholder="Phone number"
                />
                {errors.phone && (
                  <small className="text-danger">This field is required</small>
                )}
              </Form.Group>
              <div className="mt-5 d-flex justify-content-between">
                <OutlinePrimaryButton
                  onClick={() => setShowForm(false)}
                  className="pl-4 pr-4">
                  Close
                </OutlinePrimaryButton>
                <PrimaryButton type="submit" className="ml-3 pl-5 pr-5">
                  Add
                </PrimaryButton>
              </div>
            </Form>
          </Container>
        </section>
      )}
      {!showForm && (
        <section className={styles.cardsholder}>
          <Container>
            <div className={styles.cards}>
              <Card
                onClick={() => setShowForm(true)}
                className={styles.plusbox}>
                <Card.Body className={styles.plus}>
                  <FiPlusCircle className={styles.icon} />
                  <h4>Add Address</h4>
                </Card.Body>
              </Card>
              <Card className={styles.defaultcard}>
                <div className={styles.status}>
                  <BsCheckCircle className={styles.statusicon} />
                </div>
                <Card.Body className={styles.cardcontent}>
                  <div className={styles.head}>
                    <RiEditFill className={styles.icon} />{" "}
                    <span className={styles.bank}>Home Address</span>
                  </div>
                  <div className={styles.name}>
                    10 Ayoola Balogun Street, Off Ademoye Street, Ikotun, Lagos,
                    Nigeria
                  </div>
                  <div className={styles.account}>+234 802 283 5496</div>
                  <div className={styles.details}>
                    <div className={styles.type}>Adedamola Olaitan</div>
                  </div>
                </Card.Body>
              </Card>
              <Card className={styles.card}>
                <div className={styles.status}>
                  <RiTimerFlashLine className={styles.statusiconred} />
                </div>
                <Card.Body className={styles.cardcontent}>
                  <div className={styles.head}>
                    <RiEditFill className={styles.icon} />{" "}
                    <span className={styles.bank}>Office Address</span>
                  </div>
                  <div className={styles.name}>
                    10 Ayoola Balogun Street, Off Ademoye Street, Ikotun, Lagos,
                    Nigeria
                  </div>
                  <div className={styles.account}>+234 802 283 5496</div>
                  <div className={styles.details}>
                    <div className={styles.type}>Adedamola Olaitan</div>
                  </div>
                </Card.Body>
              </Card>
              <Card className={styles.card}>
                <div className={styles.status}>
                  <BsCheckCircle className={styles.statusicon} />
                </div>
                <Card.Body className={styles.cardcontent}>
                  <div className={styles.head}>
                    <RiEditFill className={styles.icon} />{" "}
                    <span className={styles.bank}>Lagos Address</span>
                  </div>
                  <div className={styles.name}>
                    10 Ayoola Balogun Street, Off Ademoye Street, Ikotun, Lagos,
                    Nigeria
                  </div>
                  <div className={styles.account}>+234 802 283 5496</div>
                  <div className={styles.details}>
                    <div className={styles.type}>Adedamola Olaitan</div>
                  </div>
                </Card.Body>
              </Card>
              <Card className={styles.card}>
                <div className={styles.status}>
                  <BsCheckCircle className={styles.statusicon} />
                </div>
                <Card.Body className={styles.cardcontent}>
                  <div className={styles.head}>
                    <RiEditFill className={styles.icon} />{" "}
                    <span className={styles.bank}>Abuja Address</span>
                  </div>
                  <div className={styles.name}>
                    10 Ayoola Balogun Street, Off Ademoye Street, Ikotun, Lagos,
                    Nigeria
                  </div>
                  <div className={styles.account}>+234 802 283 5496</div>
                  <div className={styles.details}>
                    <div className={styles.type}>Adedamola Olaitan</div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Container>
        </section>
      )}
    </div>
  );
};

Addresses.layout = "customer";

export default Addresses;

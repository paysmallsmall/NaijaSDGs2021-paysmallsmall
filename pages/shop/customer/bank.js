import React, { useState } from "react";
import { Card, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsCheckCircle } from "react-icons/bs";
import { FaPiggyBank } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import { RiTimerFlashLine } from "react-icons/ri";
import {
  OutlinePrimaryButton,
  PrimaryButton,
} from "../../../components/common";
import styles from "../../../styles/shop/customer/bank.module.css";

const Bank = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showForm, setShowForm] = useState(false);

  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <div className={styles.bank}>
      <section className={styles.header}>
        <Container>
          <h1>Bank</h1>
          <p>Overview of your bank accounts</p>
        </Container>
      </section>
      {showForm && (
        <section className={styles.form}>
          <Container>
            <p>Add a new bank details</p>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group>
                <Form.Control
                  {...register("type", { required: true })}
                  className={styles.input}
                  as="select">
                  <option value="">Type</option>
                  <option value="card">Debit Card</option>
                  <option value="transfer">Bank Transfer</option>
                </Form.Control>
                {errors.type && (
                  <small className="text-danger">This field is required</small>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Control
                  {...register("bank", { required: true })}
                  className={styles.input}
                  as="select">
                  <option value="">Bank</option>
                  <option value="access">Access Bank</option>
                  <option value="gtbank">Gt Bank</option>
                  <option value="firstbank">First Bank</option>
                </Form.Control>
                {errors.bank && (
                  <small className="text-danger">This field is required</small>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Control
                  className={styles.input}
                  {...register("account_number", { required: true })}
                  type="text"
                  placeholder="Account Number"
                />
                {errors.account_number && (
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
                  <h4>Add bank Account</h4>
                </Card.Body>
              </Card>
              <Card className={styles.defaultcard}>
                <div className={styles.status}>
                  <BsCheckCircle className={styles.statusicon} />
                </div>
                <Card.Body className={styles.cardcontent}>
                  <div className={styles.head}>
                    <FaPiggyBank className={styles.icon} />{" "}
                    <span className={styles.bank}>GT Bank</span>
                  </div>
                  <div className={styles.name}>Oladehinde Lanre Kazeem</div>
                  <div className={styles.account}>78565421555</div>
                  <div className={styles.details}>
                    <div className={styles.type}>Savings</div>
                    <div className={styles.exp}></div>
                  </div>
                </Card.Body>
              </Card>
              <Card className={styles.card}>
                <div className={styles.status}>
                  <RiTimerFlashLine className={styles.statusiconred} />
                </div>
                <Card.Body className={styles.cardcontent}>
                  <div className={styles.head}>
                    <FaPiggyBank className={styles.icon} />{" "}
                    <span className={styles.bank}>Access Bank</span>
                  </div>
                  <div className={styles.name}>Oladehinde Lande Kazeem</div>
                  <div className={styles.account}>7856 5421 5555 5798</div>
                  <div className={styles.details}>
                    <div className={styles.type}>MasterCard</div>
                    <div className={styles.exp}>04/21</div>
                  </div>
                </Card.Body>
              </Card>
              <Card className={styles.card}>
                <div className={styles.status}>
                  <BsCheckCircle className={styles.statusicon} />
                </div>
                <Card.Body className={styles.cardcontent}>
                  <div className={styles.head}>
                    <FaPiggyBank className={styles.icon} />{" "}
                    <span className={styles.bank}>GT Bank</span>
                  </div>
                  <div className={styles.name}>Oladehinde Lande Kazeem</div>
                  <div className={styles.account}>78565421555</div>
                  <div className={styles.details}>
                    <div className={styles.type}>Savings</div>
                    <div className={styles.exp}>04/21</div>
                  </div>
                </Card.Body>
              </Card>
              <Card className={styles.card}>
                <div className={styles.status}>
                  <BsCheckCircle className={styles.statusicon} />
                </div>
                <Card.Body className={styles.cardcontent}>
                  <div className={styles.head}>
                    <FaPiggyBank className={styles.icon} />{" "}
                    <span className={styles.bank}>GT Bank</span>
                  </div>
                  <div className={styles.name}>Oladehinde Lande Kazeem</div>
                  <div className={styles.account}>78565421555</div>
                  <div className={styles.details}>
                    <div className={styles.type}>Savings</div>
                    <div className={styles.exp}>04/21</div>
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

Bank.layout = "customer";

export default Bank;

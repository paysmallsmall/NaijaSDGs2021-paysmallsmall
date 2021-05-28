import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "../components/common";
// @ts-ignore
import styles from "../styles/Auth.module.css";

const Signup = () => {
  const [showPass, setShowPass] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.authentication}>
      <Head>
        <title>PinchPayer - Pay Small Small</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          <Container>
            <Row>
              <Col>
                <div className={`${styles.authbox} mx-auto`}>
                  <div className="d-flex justify-content-center mb-5">
                    <Link href="/" passHref>
                      <img
                        style={{ cursor: "pointer" }}
                        src="images/logo.png"
                        className="img-fluid mx-auto"
                        alt="pinchpayer logo"
                      />
                    </Link>
                  </div>
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    {/* <Form.Group>
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        name="firstname"
                        ref={register({ required: true })}
                        placeholder="First Name"
                        type="text"
                      />
                      {errors && errors.firstname && (
                        <Form.Text className="text-danger">
                          Firstname is required
                        </Form.Text>
                      )}
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        name="lastname"
                        ref={register({ required: true })}
                        placeholder="Last Name"
                        type="text"
                      />
                      {errors && errors.lastname && (
                        <Form.Text className="text-danger">
                          Lastname is required
                        </Form.Text>
                      )}
                    </Form.Group> */}
                    <Form.Group>
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        name="email"
                        // ref={register({ required: true })}
                        placeholder="Email Address"
                        type="email"
                      />
                      {errors && errors.email && (
                        <Form.Text className="text-danger">
                          Email is required
                        </Form.Text>
                      )}
                    </Form.Group>
                    {/* <Form.Group>
                      <Form.Label>Got a referral code? (optional)</Form.Label>
                      <Form.Control
                        name="referral"
                        ref={register}
                        placeholder="Referral Code"
                        type="text"
                      />
                      {errors && errors.referral && (
                        <Form.Text className="text-danger">
                          Referral is required
                        </Form.Text>
                      )}
                    </Form.Group> */}
                    <Form.Group>
                      <Form.Label>Choose a Password</Form.Label>
                      <InputGroup>
                        <Form.Control
                          name="password"
                          // ref={register({ required: true })}
                          placeholder="Password"
                          type={showPass ? "text" : "password"}
                          className="border-right-0"
                        />
                        <InputGroup.Append className="border border-left-0">
                          <img
                            src="images/icons/eye.png"
                            style={{ cursor: "pointer" }}
                            onClick={() => setShowPass(!showPass)}
                            className="my-auto pr-2"
                            height="20"
                            alt="show password"
                          />
                        </InputGroup.Append>
                      </InputGroup>
                      {errors && errors.password && (
                        <Form.Text className="text-danger">
                          Password is required
                        </Form.Text>
                      )}
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Please confirm your password</Form.Label>
                      <InputGroup>
                        <Form.Control
                          name="confirmpassword"
                          // ref={register({ required: true })}
                          placeholder="Confirm Password"
                          type={showPass ? "text" : "password"}
                          className="border-right-0"
                        />
                        <InputGroup.Append className="border border-left-0">
                          <img
                            src="images/icons/eye.png"
                            style={{ cursor: "pointer" }}
                            onClick={() => setShowPass(!showPass)}
                            className="my-auto pr-2"
                            height="20"
                            alt="show password"
                          />
                        </InputGroup.Append>
                      </InputGroup>
                      {errors && errors.confirmpassword && (
                        <Form.Text className="text-danger">
                          Confirm password is required
                        </Form.Text>
                      )}
                    </Form.Group>
                    <small>
                      By submitting this form, i acknowledge that I have read
                      and do hereby accept the terms and conditions in the
                      PaybyBit Terms of Use, Merchant Agreement and Privacy
                      Policy
                    </small>

                    <PrimaryButton
                      type="submit"
                      variant="primary"
                      className="pt-3 pb-3 mt-5 "
                      block>
                      Sign Up
                    </PrimaryButton>
                  </Form>
                  <div className="text-center">
                    <p className="text-center">
                      Already have an account?{" "}
                      <Link href="/login" className="text-primary">
                        <a>Login</a>
                      </Link>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </div>
  );
};

Signup.layout = "auth";

export default Signup;

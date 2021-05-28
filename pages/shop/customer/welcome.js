import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Card, Form, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BiAtom, BiEditAlt } from "react-icons/bi";
import { BsCheckCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { PrimaryButton } from "../../../components/common";
import { AUTH_COMPLETE_RESOLVED } from "../../../store/types/authTypes";
import styles from "../../../styles/common/Welcome.module.css";
import { shoppersRoutes } from "../../../utils/routes";

const Welcome = () => {
  const [step, setStep] = useState(2);

  const dispatch = useDispatch();
  const router = useRouter();

  const { isAuthenticated, user, role } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuthenticated || !user || role !== 1) {
      router.push(shoppersRoutes.LOGIN);
    }
    if (user) {
      const { phoneVerified, bvnVerified, bankVerified, employerVeried } = user;
      if (!phoneVerified) {
        setStep(2);
      } else if (!bvnVerified) {
        setStep(3);
      } else if (!bankVerified) {
        setStep(4);
      } else if (!employerVeried) {
        setStep(5);
      } else {
        router.push(shoppersRoutes.SHOPPERS_HOME);
      }
    }
  }, [isAuthenticated, role, router, user]);

  const PhoneVerification = () => {
    const [sent, setSent] = useState(false);
    // const [approved, setApproved] = useState(false);

    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();

    const onSubmitPhone = async (data) => {
      try {
        setSent(true);
        // console.log(JSON.stringify(data));
      } catch (error) {
        console.log(error);
      }
    };

    const onSubmitToken = async (data) => {
      try {
        setSent(true);
        // console.log(JSON.stringify(data));
        const payload = {
          phoneVerified: 1,
        };
        dispatch({
          type: AUTH_COMPLETE_RESOLVED,
          payload: payload,
        });
        setStep(step + 1);
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <>
        <h2>Step 2/5</h2>
        <div className={styles.subheader}>Phone Number Verification</div>
        <div className={styles.details}>
          We'll send you a 4 digit verification code which expires in 5 minutes.{" "}
        </div>
        <div className={styles.form}>
          {!sent && (
            <Form onSubmit={handleSubmit(onSubmitPhone)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="tel"
                  {...register("phone", { required: true })}
                  className={styles.textinput}
                  placeholder="Enter phone +234"
                />
                <Form.Text className="text-muted">
                  We'll never share your phone number with anyone else.
                </Form.Text>
                <Form.Text className="text-danger">
                  {errors.phone && <span>Phone is required</span>}
                </Form.Text>
              </Form.Group>
              <PrimaryButton className="mt-4" type="submit">
                Send Token
              </PrimaryButton>
            </Form>
          )}
          {sent && (
            <Form onSubmit={handleSubmit(onSubmitToken)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="font-weight-bold mb-3">
                  Token Sent to {watch("phone")}{" "}
                  <PrimaryButton
                    variant="outline-secondary"
                    className="text-white ml-2 pl-2 pr-2 pt-1 pb-1">
                    Resend
                  </PrimaryButton>
                </Form.Label>
                <InputGroup className="">
                  <Form.Control
                    type="text"
                    {...register("token", { required: true })}
                    className={styles.textinput}
                    placeholder="Enter Token"
                  />
                </InputGroup>
                <Form.Text className="text-danger">
                  {errors.token && <span>Token required</span>}
                </Form.Text>
                <Form.Text
                  className="text-muted"
                  onClick={() => setSent(false)}
                  style={{ cursor: "pointer", textDecoration: "underline" }}>
                  Use a different number.
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  name="address"
                  className={styles.textinput}
                  {...register("address", { required: true })}
                  placeholder="Address"
                  type="text"
                />
                {errors && errors.address && (
                  <Form.Text className="text-danger">
                    Address is required
                  </Form.Text>
                )}
              </Form.Group>
              <PrimaryButton className="mt-4" type="submit">
                Submit Token
              </PrimaryButton>
            </Form>
          )}
        </div>
      </>
    );
  };

  const BVNverification = () => {
    const [bvnDetails, setBVNDetails] = useState({});

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const onSubmitBVN = async (data) => {
      try {
        setBVNDetails({
          firstname: "Oladehinde",
          lastname: "Kazeem",
        });
      } catch (error) {
        console.log(error);
      }
    };

    const onNext = async (data) => {
      try {
        const payload = {
          bvnVerified: 1,
        };
        dispatch({
          type: AUTH_COMPLETE_RESOLVED,
          payload: payload,
        });
        setStep(4);
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <>
        <h2>Step 3/5</h2>
        <div className={styles.subheader}>BVN Verification</div>
        <div className={styles.details}>
          Input your registered bvn for verification.{" "}
        </div>
        <div className={styles.form}>
          <Form onSubmit={handleSubmit(onSubmitBVN)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <InputGroup className="">
                <Form.Control
                  type="text"
                  {...register("bvn", { required: true })}
                  className={styles.textinput}
                  placeholder="Enter BVN"
                />
                <PrimaryButton
                  type="submit"
                  variant="outline-secondary"
                  className="text-white">
                  Verify
                </PrimaryButton>
              </InputGroup>
              <Form.Text className="text-danger">
                {errors.bvn && <span>BVN required</span>}
              </Form.Text>
            </Form.Group>
            {bvnDetails && bvnDetails.firstname && (
              <>
                <Card>
                  <Card.Body>
                    <div className="d-flex align-items-center">
                      <div className="mr-2">
                        <BsCheckCircle size="38" color="green" />{" "}
                      </div>
                      <div>
                        <p className="m-0">
                          <span className="font-weight-bold">Firstname:</span>{" "}
                          {bvnDetails.firstname}
                        </p>
                        <p className="m-0">
                          <span className="font-weight-bold">Lastname:</span>{" "}
                          {bvnDetails.lastname}
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                <PrimaryButton
                  onClick={onNext}
                  className="mt-5 mb-5"
                  type="button">
                  Next step
                </PrimaryButton>
              </>
            )}
          </Form>
        </div>
      </>
    );
  };

  const BankVerification = () => {
    const [bankDetails, setBankDetails] = useState({});

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const onSubmitBank = async (data) => {
      try {
        setBankDetails({
          bank: "Access Bank",
          accountName: "Oladehinde Kazeem",
          accountNumber: "0215454588",
        });
      } catch (error) {
        console.log(error);
      }
    };

    const onNext = async () => {
      try {
        const payload = {
          bankVerified: 1,
        };
        dispatch({
          type: AUTH_COMPLETE_RESOLVED,
          payload: payload,
        });
        setStep(5);
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <>
        <h2>Step 4/5</h2>
        <div className={styles.subheader}>Salary Account Verification</div>
        <div className={styles.details}>
          Input your salary account details for verification.{" "}
        </div>
        <div className={styles.form}>
          <Form onSubmit={handleSubmit(onSubmitBank)}>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Bank Name</Form.Label>
              <Form.Control className={styles.textinput} as="select">
                <option value="">Pick your bank</option>
                <option value="01">Access Bank</option>
                <option value="02">First Bank</option>
                <option value="03">UBA</option>
                <option value="04">Zenith Bank</option>
              </Form.Control>
              <Form.Text className="text-danger">
                {errors.account && <span>Bank Name is required</span>}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <InputGroup className="">
                <Form.Control
                  type="text"
                  {...register("account", { required: true })}
                  className={styles.textinput}
                  placeholder="Account Number"
                />
                <PrimaryButton
                  type="submit"
                  variant="outline-secondary"
                  className="text-white">
                  Verify
                </PrimaryButton>
              </InputGroup>
              <Form.Text className="text-danger">
                {errors.account && <span>Account Number is required</span>}
              </Form.Text>
            </Form.Group>
            {bankDetails && bankDetails.accountName && (
              <>
                <Card>
                  <Card.Body>
                    <div className="d-flex align-items-center">
                      <div className="mr-2">
                        <BsCheckCircle size="38" color="green" />{" "}
                      </div>
                      <div>
                        <p className="m-0">
                          <span className="font-weight-bold">Bank:</span>{" "}
                          {bankDetails.bank}
                        </p>
                        <p className="m-0">
                          <span className="font-weight-bold">
                            Account Name:
                          </span>{" "}
                          {bankDetails.accountName}
                        </p>
                        <p className="m-0">
                          <span className="font-weight-bold">
                            Account Number:
                          </span>{" "}
                          {bankDetails.accountNumber}
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                <div>
                  <PrimaryButton
                    onClick={onNext}
                    className="mt-5 mb-5"
                    type="button">
                    Next step
                  </PrimaryButton>
                </div>
              </>
            )}
          </Form>
        </div>
      </>
    );
  };

  const Employer = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const onSubmitBank = async (data) => {
      try {
        // const endpoint = `process.env.BACKEND_API/auth/login`;
        // const response = await serverRequest().post(endpoint, data);
        const payload = {
          employerVeried: 1,
        };
        dispatch({
          type: AUTH_COMPLETE_RESOLVED,
          payload: payload,
        });
        router.push(shoppersRoutes.SHOPPERS_HOME);
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <>
        <h2>Step 5/5</h2>
        <div className={styles.subheader}>Employer Verification</div>
        <div className={styles.details}>
          Input your employer details for verification.{" "}
        </div>
        <div className={styles.form}>
          <Form onSubmit={handleSubmit(onSubmitBank)}>
            <Form.Group className="mb-3">
              <InputGroup className="">
                <Form.Control
                  type="text"
                  {...register("name", { required: true })}
                  className={styles.textinput}
                  placeholder="Company Name"
                />
              </InputGroup>
              <Form.Text className="text-danger">
                {errors.name && <span>Company name is required</span>}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <InputGroup className="">
                <Form.Control
                  type="text"
                  {...register("address", { required: true })}
                  className={styles.textinput}
                  placeholder="Company Address"
                />
              </InputGroup>
              <Form.Text className="text-danger">
                {errors.address && <span>Company address is required</span>}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>State in Nigeria</Form.Label>
              <Form.Control className={styles.textinput} as="select">
                <option value="">Pick state</option>
                <option value="01">Lagos State</option>
                <option value="02">Abuja State</option>
                <option value="03">Rivers State</option>
                <option value="04">Kano State</option>
              </Form.Control>
              <Form.Text className="text-danger">
                {errors.account && <span>Bank Name is required</span>}
              </Form.Text>
            </Form.Group>
            <hr />
            <Form.Group className="mb-3">
              <InputGroup className="">
                <Form.Control
                  type="text"
                  {...register("hrm", { required: true })}
                  className={styles.textinput}
                  placeholder="Company HRM Name"
                />
              </InputGroup>
              <Form.Text className="text-danger">
                {errors.hrm && <span>HRM name is required</span>}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <InputGroup className="">
                <Form.Control
                  type="tel"
                  {...register("phone", { required: true })}
                  className={styles.textinput}
                  placeholder="HRM Phone"
                />
              </InputGroup>
              <Form.Text className="text-danger">
                {errors.phone && <span>HRM phone is required</span>}
              </Form.Text>
            </Form.Group>
            <PrimaryButton className="mt-5 mb-5" type="submit">
              Complete
            </PrimaryButton>
          </Form>
        </div>
      </>
    );
  };

  // console.log("check");

  return (
    <div className={styles.welcome}>
      <div className={styles.progress}>
        <div className={styles.logo}>
          <Link href="/">
            <a href="/">
              <img
                src="/images/logo.png"
                width="163.49"
                height="42.76"
                alt="pay small small"
              />
            </a>
          </Link>
        </div>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className="mr-3">
              <BsCheckCircle size="38" color="green" />{" "}
            </div>
            <div>
              <h5>Email</h5>
              <p>larrysnet2001@gmail.com</p>
            </div>
          </div>
          <div className={styles.step}>
            <div className="mr-3">
              {step > 2 && <BsCheckCircle size="38" color="green" />}{" "}
              {step < 2 && <BiAtom size="38" color="grey" />}{" "}
              {step === 2 && <BiEditAlt size="38" color="black" />}{" "}
            </div>
            <div>
              <h5>Phone</h5>
              <p>Verify Phone</p>
            </div>
          </div>
          <div className={styles.step}>
            <div className="mr-3">
              {step > 3 && <BsCheckCircle size="38" color="green" />}{" "}
              {step < 3 && <BiAtom size="38" color="grey" />}{" "}
              {step === 3 && <BiEditAlt size="38" color="black" />}{" "}
            </div>
            <div>
              <h5>BVN</h5>
              <p>Verify bvn</p>
            </div>
          </div>
          <div className={styles.step}>
            <div className="mr-3">
              {step > 4 && <BsCheckCircle size="38" color="green" />}{" "}
              {step < 4 && <BiAtom size="38" color="grey" />}{" "}
              {step === 4 && <BiEditAlt size="38" color="black" />}{" "}
            </div>
            <div>
              <h5>Bank Account</h5>
              <p>Salary account</p>
            </div>
          </div>
          <div className={styles.step}>
            <div className="mr-3">
              {step > 5 && <BsCheckCircle size="38" color="green" />}{" "}
              {step < 5 && <BiAtom size="38" color="grey" />}{" "}
              {step === 5 && <BiEditAlt size="38" color="black" />}{" "}
            </div>
            <div>
              <h5>Employer</h5>
              <p>Verify employer</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.overlay}>
          <div className={styles.circle} />
          <div className={styles.circle2} />
          <div className={styles.triangle} />
        </div>
        <div className={styles.heading}>
          <div className="mt-3 d-md-none">
            <Link href="/">
              <a href="/">
                <img
                  src="/images/logo.png"
                  width="163.49"
                  height="42.76"
                  alt="pay small small"
                />
              </a>
            </Link>
          </div>
          <h1>Complete Registration</h1>
        </div>
        <div className={styles.body}>
          {step === 2 && <PhoneVerification />}
          {step === 3 && <BVNverification />}
          {step === 4 && <BankVerification />}
          {step === 5 && <Employer />}
        </div>
      </div>
    </div>
  );
};

Welcome.layout = "onboarding";

export default Welcome;

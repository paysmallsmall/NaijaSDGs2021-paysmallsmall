import Link from "next/link";
// import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  Badge,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Nav,
  NavDropdown,
  Row,
} from "react-bootstrap";
import { BiLogInCircle } from "react-icons/bi";
import { CgProfile, CgShoppingCart } from "react-icons/cg";
import {
  FaHome,
  FaLocationArrow,
  FaPiggyBank,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import { useSelector } from "react-redux";
import { PrimaryButton } from ".";
// @ts-ignore
import styles from "../../styles/ShopNavBar.module.css";
import { shoppersRoutes } from "../../utils/routes";

const ShopNavBar = () => {
  const [isScrolled, setScrolled] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { noItems } = useSelector((state) => state.cart);
  const handleScroll = () => {
    if (window.scrollY > 40) {
      setScrolled(true);
      return;
    }
    setScrolled(false);
  };

  // const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className={styles.shopnav}>
      <div className={styles.top}>
        <Container className="mycontainer">
          <div className="d-flex">
            <Nav className={`${styles.right} mr-auto d-none d-md-flex`}>
              <Nav.Link
                href="/"
                className={`${styles.navlink} text-capitalize`}>
                HOME
              </Nav.Link>
              <Nav.Link href="/business" className={styles.navlink}>
                BUSINESS
              </Nav.Link>
            </Nav>
            <Nav className={`${styles.right}`}>
              <Link href="/shop/customer" passHref>
                <Nav.Link
                  // href="/shop/customer"
                  className={`${styles.navlink} pl-0`}>
                  MY ACCOUNT
                </Nav.Link>
              </Link>
              <Link href="/shop/cart" passHref>
                <Nav.Link
                  className={`${styles.navlink} d-none d-md-inline-block`}>
                  CART
                </Nav.Link>
              </Link>
              <Link href="/shop" passHref>
                <Nav.Link className={styles.navlink}>SHOP</Nav.Link>
              </Link>
              <Link href="#" passHref>
                <Nav.Link className={`${styles.navlink} pr-0`}>
                  CONTACT US
                </Nav.Link>
              </Link>
            </Nav>
          </div>
        </Container>
      </div>
      <div className={`${styles.bottom} ${isScrolled ? "fixed-top" : ""}`}>
        <Container className="mycontainer">
          <Row className="align-items-center">
            <Col xs={6} md={3}>
              <div>
                <Link href="/">
                  <img
                    src="/images/logo.png"
                    width="163.49"
                    height="42.76"
                    alt="pay small small"
                  />
                </Link>
              </div>
            </Col>
            <Col className="d-none d-md-block">
              <Form className={styles.form}>
                <InputGroup className="">
                  <InputGroup.Prepend className={styles.icon}>
                    <MdSearch size="20" />
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Search product and categories"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    className="input"
                  />
                  <InputGroup.Append>
                    <PrimaryButton className={styles.btn}>Search</PrimaryButton>
                  </InputGroup.Append>
                </InputGroup>
              </Form>
            </Col>
            <Col xs={6} md={3}>
              <div className={styles.cartBox}>
                <div
                  className={`${styles.iconBox} d-none d-md-flex`}
                  style={{ alignItems: "center" }}>
                  {/* <h6 className="mb-0 ml-1">Dino Rhythms</h6> */}
                  {!isAuthenticated && (
                    <div className="mr-3">
                      <Link href={shoppersRoutes.LOGIN}>
                        <a>
                          <CgProfile className={styles.icon} size="35" />
                          <span className="ml-2">Login</span>
                        </a>
                      </Link>
                    </div>
                  )}
                  {isAuthenticated && user && (
                    <NavDropdown
                      title={
                        <>
                          <CgProfile className={styles.icon} size="35" />{" "}
                          {user.firstname}
                        </>
                      }
                      id="nav-dropdown"
                      className={styles.dropdown}>
                      <Link href="/shop/customer" passHref>
                        <NavDropdown.Item eventKey="4.2">
                          <FaHome className="mr-2" /> Dashboard
                        </NavDropdown.Item>
                      </Link>
                      <Link href="/shop/customer/profile" passHref>
                        <NavDropdown.Item eventKey="4.2">
                          <CgProfile className="mr-2" /> Profile
                        </NavDropdown.Item>
                      </Link>
                      <Link href="/shop/customer/inbox" passHref>
                        <NavDropdown.Item eventKey="4.2">
                          <FaRegEnvelope className="mr-2" /> Inbox
                        </NavDropdown.Item>
                      </Link>
                      <Link href="/shop/customer/bank" passHref>
                        <NavDropdown.Item eventKey="4.3">
                          <FaPiggyBank className="mr-2" /> Bank Account
                        </NavDropdown.Item>
                      </Link>
                      <Link href="/shop/customer/addresses" passHref>
                        <NavDropdown.Item eventKey="4.4">
                          <FaLocationArrow className="mr-2" /> Addresses
                        </NavDropdown.Item>
                      </Link>
                      <NavDropdown.Divider />
                      <Link href="/logout" passHref>
                        <NavDropdown.Item eventKey="4.4">
                          <BiLogInCircle className="mr-2" /> Logout
                        </NavDropdown.Item>
                      </Link>
                    </NavDropdown>
                  )}
                </div>

                {/* <Link href="/shop/cart">
                  <a href="/shop/cart">
                    <div className={styles.iconBox}>
                      <MdFavoriteBorder className={styles.icon} size="35" />
                      <Badge pill className={styles.badge} variant="danger">
                        9
                      </Badge>
                    </div>
                  </a>
                </Link> */}
                <Link href="/shop/cart">
                  <a href="/shop/cart" className="ml-2">
                    <div className={styles.iconBox}>
                      <CgShoppingCart className={styles.icon} size="35" />
                      <Badge className={styles.badge} pill variant="danger">
                        {noItems}
                      </Badge>
                    </div>
                  </a>
                </Link>
              </div>
            </Col>
          </Row>
          <Row className="d-md-none mt-3">
            <Col>
              <Form className={styles.form}>
                <InputGroup className="">
                  <InputGroup.Prepend className={styles.icon}>
                    <MdSearch size="20" />
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Search product and categories"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    className="input"
                  />
                  <InputGroup.Append>
                    <PrimaryButton className={`${styles.btn} pl-2 pr-2 `}>
                      Go
                    </PrimaryButton>
                  </InputGroup.Append>
                </InputGroup>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ShopNavBar;

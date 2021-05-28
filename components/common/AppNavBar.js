import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { PrimaryButton } from ".";
// @ts-ignore
import styles from "../../styles/AppNavBar.module.css";

const AppNavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="dark"
      className=""
      fixed="top">
      <Container className="mycontainer">
        <Navbar.Brand href="/">
          <Link href="/">
            <img
              src="/images/logo.png"
              width="163.49"
              height="42.76"
              alt="pay small small"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          className={styles.appnav}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto ml-0 ml-md-5">
            <Nav.Link
              href="personal"
              className={`${styles.navlink} text-capitalize`}>
              Personal
            </Nav.Link>
            <Nav.Link href="business" className={styles.navlink}>
              Business
            </Nav.Link>
          </Nav>
          <Nav>
            <Link href="/shop" passHref>
              <Nav.Link className={styles.navlink}>Shop</Nav.Link>
            </Link>
            <Nav.Link href="#deets" className={styles.navlink}>
              Solutions
            </Nav.Link>
            <Nav.Link href="#deets" className={styles.navlink}>
              Products
            </Nav.Link>
            <Link href="/login" passHref>
              <Nav.Link
                className={`${styles.navlink} mr-4 ml-0 ml-md-3 mb-3 mb-md-0`}>
                Login
              </Nav.Link>
            </Link>
            <Link href="/signup">
              <a>
                <PrimaryButton>Create Account</PrimaryButton>
              </a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavBar;

import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import styles from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.footer} pt-5 pb-5`}>
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <img
              src="/images/logo.png"
              className="img-fluid"
              width="200"
              alt="pinchpayer logo"
            />
            <p className={styles.bluep}>info@pinchpayer.com</p>
            <p className={styles.bluep}>
              +234 802 283 5496 <br />
              +234 802 283 5496
            </p>
            <p>10, Ayoola Balogun Street, Lagos, Nigeria.</p>
          </Col>
          <Col xs={12} md={3}>
            <h4 className="mt-3 mt-md-0">Services</h4>
            <ul>
              <li>
                <Link href="#">
                  <a href="#">Store</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a href="#">Prices</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a href="#">Business</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a href="#">Personal</a>
                </Link>
              </li>
            </ul>
            <h4 className="mt-4">Get Support</h4>
            <ul>
              <li>
                <Link href="#">
                  <a href="#">Compliance</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a href="#">Help Desk</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a href="#">Live Chat</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a href="#">Contact Us</a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={3}>
            <h4 className="mt-3 mt-md-0">About Us</h4>
            <ul>
              <li>
                <Link href="#">
                  <a href="#">The Company</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a href="#">The Team</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a href="#">Career</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a href="#">Terms and Conditions</a>
                </Link>
              </li>
            </ul>
            <h4 className="mt-4">More Links</h4>
            <ul>
              <li>
                <Link href="#">
                  <a href="#">Blog</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a href="#">Testimonies</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a href="#">Partners</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a href="#">Clients</a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={3}>
            <h4 className="mt-3 mt-md-0">Social Media</h4>
            <ul>
              <li>
                <Link href="#">
                  <a href="#">Facebook</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a href="#">Twitter</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a href="#">instagram</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a href="#">linkedIn</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a href="#">Facebook</a>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="mt-5 mb-5" />
        <div className=" text-left text-md-center">
          <span>PinchPayer. © 2021</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

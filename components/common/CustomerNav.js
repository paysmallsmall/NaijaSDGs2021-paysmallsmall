import Link from "next/link";
// import { useRouter } from "next/router";
import React from "react";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import { BiLogInCircle } from "react-icons/bi";
import { BsCheckCircle, BsHeart } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import {
  FaHome,
  FaLocationArrow,
  FaPiggyBank,
  FaRegEnvelope,
} from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoEyeSharp } from "react-icons/io5";
import { RiHandCoinLine } from "react-icons/ri";
import { VscLoading } from "react-icons/vsc";
// import { useDispatch } from "react-redux";
import styles from "../../styles/shop/customer/Nav.module.css";
// import { shoppersRoutes } from "../../utils/routes";

const CustomerNav = () => {
  // const dispatch = useDispatch();
  // const router = useRouter()

  return (
    <section className={styles.nav}>
      <Container>
        <div>
          <Nav variant="pills" activeKey="1">
            {/* <Nav.Item className="mr-2">
              <Nav.Link eventKey="1">
                <RiMenu2Line color="white" />
              </Nav.Link>
            </Nav.Item> */}
            <Nav.Item className="mr-2 ButtonGroup d-none d-md-inline">
              <Link href="/shop/customer" passHref>
                <Nav.Link eventKey="1" href="#/home">
                  <FaHome />
                </Nav.Link>
              </Link>
            </Nav.Item>
            <NavDropdown
              title={
                <>
                  <CgProfile className="mr-2" /> Profile
                </>
              }
              id="nav-dropdown"
              className={`${styles.default} mr-2`}>
              <Link href="/shop/customer" passHref>
                <NavDropdown.Item eventKey="4.2">
                  <FaHome className="mr-2" /> Dashboard
                </NavDropdown.Item>
              </Link>
              <Link href="/shop/customer/profile" passHref>
                <NavDropdown.Item eventKey="4.2">
                  <CgProfile className="mr-2" /> Account
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
              <NavDropdown.Divider />
              <Link href="/shop/customer/addresses" passHref>
                <NavDropdown.Item eventKey="4.4">
                  <FaLocationArrow className="mr-2" /> Addresses
                </NavDropdown.Item>
              </Link>
              <Link href="/logout" passHref>
                <NavDropdown.Item eventKey="4.4">
                  <BiLogInCircle className="mr-2" /> Logout
                </NavDropdown.Item>
              </Link>
            </NavDropdown>
            <NavDropdown
              title={
                <>
                  <FiShoppingCart className="mr-2" /> Order
                </>
              }
              className={styles.default}
              id="nav-dropdown">
              <Link href="/shop/customer/pending" passHref>
                <NavDropdown.Item eventKey="4.2">
                  <VscLoading className="mr-2" /> Pending
                </NavDropdown.Item>
              </Link>
              <Link href="/shop/customer/open" passHref>
                <NavDropdown.Item eventKey="4.2">
                  <RiHandCoinLine className="mr-2" /> Open
                </NavDropdown.Item>
              </Link>
              <Link href="/shop/customer/completed" passHref>
                <NavDropdown.Item eventKey="4.3">
                  <BsCheckCircle className="mr-2" /> Completed
                </NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link href="/shop/customer/liked" passHref>
                <NavDropdown.Item eventKey="4.4">
                  <BsHeart className="mr-2" /> Liked Products
                </NavDropdown.Item>
              </Link>
              <Link href="/shop/customer/viewed" passHref>
                <NavDropdown.Item eventKey="4.4">
                  <IoEyeSharp className="mr-2" /> Viewed Products
                </NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
        </div>
      </Container>
    </section>
  );
};

export default CustomerNav;

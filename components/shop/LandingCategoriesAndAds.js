import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BiRadio } from "react-icons/bi";
import { FaBaby } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import {
  GiGamepad,
  GiHealthNormal,
  GiKitchenKnives,
  GiPerfumeBottle,
  GiSewingNeedle,
  GiWoodenChair,
} from "react-icons/gi";
import { MdDevicesOther, MdPayment } from "react-icons/md";
import { RiCustomerService2Line, RiShoppingBag3Line } from "react-icons/ri";
import { categories } from "../../dummy/categories";
import styles from "../../styles/shop/LandingCategoriesAndAds.module.css";

const LandingCategoriesAndAds = () => {
  const buildIcon = (iconName) => {
    switch (iconName) {
      case "BiRadio":
        return <BiRadio className={styles.icon} />;
      case "GiWoodenChair":
        return <GiWoodenChair className={styles.icon} />;
      case "GiSewingNeedle":
        return <GiSewingNeedle className={styles.icon} />;
      case "FiSmartphone":
        return <FiSmartphone className={styles.icon} />;
      case "GiPerfumeBottle":
        return <GiPerfumeBottle className={styles.icon} />;
      case "GiKitchenKnives":
        return <GiKitchenKnives className={styles.icon} />;
      case "FaBaby":
        return <FaBaby className={styles.icon} />;
      case "GiGamepad":
        return <GiGamepad className={styles.icon} />;
      case "GiHealthNormal":
        return <GiHealthNormal className={styles.icon} />;
      case "MdDevicesOther":
        return <MdDevicesOther className={styles.icon} />;
      default:
        return <BiRadio className={styles.icon} />;
    }
  };
  return (
    <div className={styles.main}>
      <section>
        <Container>
          <Row>
            <Col xs={12} md={3} className="d-none d-md-block">
              <div className={styles.categories}>
                <ul>
                  {categories &&
                    categories.length > 0 &&
                    categories.map((category, index) => (
                      <Link
                        key={index}
                        href={`/shop/category/${category.slug}`}>
                        <a>
                          <li>
                            <div className={styles.icon}>
                              {buildIcon(category.icon)}
                            </div>
                            <div className={styles.text}>{category.name}</div>
                          </li>
                        </a>
                      </Link>
                    ))}
                </ul>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className={styles.ads1}></div>
            </Col>
            <Col xs={12} md={3} className="d-none d-md-block">
              <div className={styles.ads2}></div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={`${styles.features}`}>
        <Container>
          <Row>
            <Col xs={4} md={4}>
              <Link href="/">
                <a>
                  <div className={styles.feature}>
                    <div className={styles.icon}>
                      <RiShoppingBag3Line />
                    </div>
                    <div className={`${styles.text} d-none d-md-block`}>
                      Official Stores
                    </div>
                  </div>
                </a>
              </Link>
            </Col>
            <Col xs={4} md={4}>
              <Link href="/">
                <a>
                  <div className={styles.feature}>
                    <div className={styles.icon}>
                      <MdPayment />
                    </div>
                    <div className={`${styles.text} d-none d-md-block`}>
                      Pay Instalment
                    </div>
                  </div>
                </a>
              </Link>
            </Col>
            <Col xs={4} md={4}>
              <Link href="/">
                <a>
                  <div className={styles.feature}>
                    <div className={styles.icon}>
                      <RiCustomerService2Line />
                    </div>
                    <div className={`${styles.text} d-none d-md-block`}>
                      Customer Care Support
                    </div>
                  </div>
                </a>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default LandingCategoriesAndAds;

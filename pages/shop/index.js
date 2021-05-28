import Head from "next/head";
import React from "react";
import { Container } from "react-bootstrap";
import { NavSpacer } from "../../components/common";
import {
  Brands,
  LandingCategoriesAndAds,
  Recommended,
  SpecialList,
  TopCategories,
} from "../../components/shop";
// @ts-ignore
import styles from "../../styles/shop/Shop.module.css";

const Shop = () => {
  const categories = [
    {
      name: "Electronics",
      imageSrc: "/images/categories/electronics.png",
      slug: "electronics",
      total: "5",
    },
    {
      name: "Furniture",
      imageSrc: "/images/categories/furniture.png",
      slug: "furniture",
      total: "3",
    },
    {
      name: "Fashion",
      imageSrc: "/images/categories/fashion.png",
      slug: "fashion",
      total: "12",
    },
    {
      name: "Phones",
      imageSrc: "/images/categories/phone.png",
      slug: "phones",
      total: "54",
    },
    {
      name: "Gadgets",
      imageSrc: "/images/categories/gadgets.png",
      slug: "gadgets",
      total: "5",
    },
  ];
  return (
    <div className={styles.shop}>
      <Head>
        <title>PinchPayer - Pay Small Small</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavSpacer />
        <LandingCategoriesAndAds />
        <SpecialList name={`Top Deals`} />
        <TopCategories categories={categories} heading="Top Categories" />
        <SpecialList name={`Top selling`} />
        <section>
          <Container className="d-flex flex-column flex-md-row">
            <div className="p-2">
              <img src="/images/ad1.png" className="img-fluid" alt="ads 1" />
            </div>
            <div className="p-2">
              <img src="/images/ad2.png" className="img-fluid" alt="ads 2" />
            </div>
          </Container>
        </section>
        <Brands />
        <Recommended name={`Recommended`} />
      </main>
    </div>
  );
};

Shop.layout = "shop";

export default Shop;

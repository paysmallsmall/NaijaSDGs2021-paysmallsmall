import Head from "next/head";
import React from "react";
import { NavSpacer } from "../../../components/common";
import {
  CategoryHero,
  ProductsAndFilter,
  TopCategories,
} from "../../../components/shop";
import styles from "../../../styles/shop/Category.module.css";

export const getServerSideProps = async ({ params }) => {
  const { categorySlug } = params;
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
  const brands = [
    {
      name: "Samsung",
      slug: "samsung",
    },
    {
      name: "Tecno",
      slug: "tecno",
    },
    {
      name: "Apple",
      slug: "apple",
    },
    {
      name: "Oraimo",
      slug: "oraimo",
    },
    {
      name: "Hp",
      slug: "hp",
    },
  ];
  const prices = [
    {
      name: "Under N25,000",
    },
    {
      name: "N25,000-N75,000",
    },
    {
      name: "Above N75,000",
    },
  ];
  const products = [
    {
      name: "Big Cozy Chair",
      slug: "big-cozy-chair",
      price: "30000",
      discount: "-50%",
      discountPrice: "15000",
      category: "funiture",
      rating: 3,
      favorite: true,
      image: "/images/products/chair2.jpg",
    },
    {
      name: "BVG Headphones",
      slug: "bvg-headphones",
      price: "11000",
      discount: null,
      discountPrice: null,
      category: "Gadgets",
      rating: 4,
      favorite: false,
      image: "/images/products/headphone.jpg",
    },
    {
      name: "Samsung Galaxy J6",
      slug: "samsung-galaxy-j6",
      price: "96000",
      discount: "-25%",
      discountPrice: "54000",
      category: "Phones",
      rating: 2,
      favorite: false,
      image: "/images/products/Samsung-Galaxy-J6.jpg",
    },
    {
      name: "Samsung Tv Series 6",
      slug: "samsung-tv-serie-6",
      price: "96000",
      discount: "-15%",
      discountPrice: "54000",
      category: "electronics",
      rating: 5,
      favorite: true,
      image: "/images/products/samsung-tv-png-samsung-tv-serie-6.jpg",
    },
  ];
  return {
    props: { categorySlug: categorySlug, categories, brands, prices, products }, // will be passed to the page component as props
  };
};

const Category = ({ categorySlug, categories, brands, prices, products }) => {
  // console.log("catogory ID:", categorySlug);
  return (
    <div className={styles.main}>
      <Head>
        <title>PinchPayer - Pay Small Small</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavSpacer />
        <CategoryHero />
        {categories && categories.length > 0 && (
          <TopCategories categories={categories} />
        )}
        <ProductsAndFilter
          categories={categories}
          brands={brands}
          prices={prices}
          categorySlug={categorySlug}
          products={products}
        />
      </main>
    </div>
  );
};

Category.layout = "shop";

export default Category;

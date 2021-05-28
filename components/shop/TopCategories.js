import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styles from "../../styles/shop/TopCategories.module.css";

const TopCategories = ({ categories, heading }) => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    lazyLoad: true,
    slidesToShow: categories.length > 5 ? 5 : categories.length,
    slidesToScroll: 1,
    nextArrow: <MdKeyboardArrowRight color="black" size="40" />,
    prevArrow: <MdKeyboardArrowLeft color="black" size="40" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: categories.length > 5 ? 5 : categories.length,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: categories.length > 4 ? 4 : categories.length,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: categories.length > 2 ? 2 : categories.length,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  return (
    <section className={styles.main}>
      <Container>
        {/* {heading && (
          <div className={styles.header}>
            <div className={styles.title}>{heading}</div>
          </div>
        )} */}
        <Slider {...settings}>
          {categories &&
            categories.map((category, index) => (
              <Link key={index} href={`/shop/category/${category.slug}`}>
                <a>
                  <div className={styles.category}>
                    <div className={styles.image}>
                      <img
                        alt={category.name}
                        className="img-fluid mx-auto"
                        src={category.imageSrc}
                      />
                    </div>
                    <p>{category.name}</p>
                  </div>
                </a>
              </Link>
            ))}
        </Slider>
      </Container>
    </section>
  );
};

export default TopCategories;

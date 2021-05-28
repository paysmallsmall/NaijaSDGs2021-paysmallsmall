import Link from "next/link";
import React, { useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import ReactStars from "react-rating-stars-component";
import styles from "../../styles/shop/SpecialProduct.module.css";
import { currencyFormat } from "../../utils/helpers";

const SpecialProduct = ({ product }) => {
  const [isShownBtn, setIsShownBtn] = useState(false);
  return (
    <Link href="/shop/samsung">
      <a
        className={`${styles.product} ${isShownBtn ? "shadow" : ""}`}
        onMouseEnter={() => setIsShownBtn(true)}
        onMouseLeave={() => setIsShownBtn(false)}>
        <div className={styles.heading}>
          <div>
            {product.favorite ? (
              <MdFavorite size={25} />
            ) : (
              <MdFavoriteBorder size={25} />
            )}
          </div>
          {product.discount && (
            <div className={styles.discount}>{product.discount}</div>
          )}
        </div>
        <div className={styles.image}>
          <img className="img-fluid" src={product.image} alt={product.name} />
        </div>
        <div className={styles.price}>
          <h5>{currencyFormat(product.price)}</h5>
          {product.discountPrice && (
            <h6>{currencyFormat(product.discountPrice)}</h6>
          )}
        </div>
        <div className={`${styles.name} text-truncate`}>{product.name}</div>
        <div className={styles.rating}>
          <ReactStars
            count={5}
            value={product.rating}
            edit={false}
            size={18}
            activeColor="#ffd700"
          />
        </div>
      </a>
    </Link>
  );
};

export default SpecialProduct;

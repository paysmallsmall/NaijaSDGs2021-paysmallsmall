import React, { useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import ReactStars from "react-rating-stars-component";
import styles from "../../styles/shop/Product.module.css";
import { currencyFormat } from "../../utils/helpers";
import { PrimaryButton } from "../common";

const Product = ({ product }) => {
  const [isShownBtn, setIsShownBtn] = useState(false);
  return (
    <div
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
          size={24}
          activeColor="#ffd700"
        />
      </div>
      <div className={styles.btn}>
        {isShownBtn && (
          <PrimaryButton
            block
            className="pt-1 pb-1 pl-0 pr-0 d-none d-md-block">
            Add to Cart
          </PrimaryButton>
        )}
        <PrimaryButton block className="pt-1 pb-1 pl-0 pr-0 d-md-none">
          Add to Cart
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Product;

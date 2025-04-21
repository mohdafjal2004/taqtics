import React from "react";
import style from "./ProductCard.module.css";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };
  return (
    <div className={style.wrapper}>
      <div className={style.container} onClick={handleClick}>
        <img src={product.image} alt={`Product - ${product.title}`} />
        <div className={style.textContainer}>
          <p>{product.title}</p>
          <p>
            ${product.price}{" "}
            <span className={style.oriPrice}>${product.price + 100}</span>
          </p>
          <p>{product.rating.rate}/5.0</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

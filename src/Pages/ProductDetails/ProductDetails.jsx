import React, { useEffect, useState } from "react";
import style from "./ProductDetails.module.css";
import { useParams } from "react-router";
import useAPIFetch from "../../hooks/useAPIFetch";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/cartSlice";

const ProductDetails = () => {
  const disoatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { data } = useAPIFetch({ url: `/products/${id}` });
  const cartData = useSelector((state) => state.cart);
  useEffect(() => {
    if (data) {
      setProduct(data);
    }
  }, [data]);
  const isProductInCart = cartData.find((item) => item?.id === product?.id);
  const handleAddToCart = () => {
    if (isProductInCart) {
      disoatch(removeFromCart(product.id));
    } else {
      disoatch(addToCart(product));
    }
  };
  return (
    <div>
      <div className={style.wrapper}>
        {product && (
          <div className={style.container}>
            <img src={product.image} alt={`Product - ${product.title}`} />
            <div className={style.textContainer}>
              <p className={style.title}>
                <span>{product.title}</span>
                <span>by Junaid</span>
              </p>
              <p className={style.price}>
                <span>${product.price}</span>{" "}
                <span className={style.oriPrice}>${product.price + 100}</span>
              </p>
              <p className={style.rating}>
                <span>
                  <FaStar />
                </span>
                <span></span>
                {product.rating.rate}/5.0
              </p>
              <p className={style.description}>
                <span>Description</span>
                <span>{product.description}</span>
              </p>
              <p className={style.addToCart}>
                <button onClick={handleAddToCart}>
                  {" "}
                  {isProductInCart ? "Remove from Cart" : "Add to Cart"}
                </button>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;

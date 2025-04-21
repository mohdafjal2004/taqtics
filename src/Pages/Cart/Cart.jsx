import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";
import style from "./Cart.module.css";
import { MdDelete } from "react-icons/md";
import { removeFromCart } from "../../store/cartSlice";

const Cart = () => {
  const cartData = useSelector((state) => state.cart);
  console.log("cartData ", cartData);
  const dispatch = useDispatch();
  return (
    <div className={style.wrapper}>
      <h1>Cart</h1>
      {cartData.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className={style.container}>
          {cartData.map((item) => (
            <div key={item.id} className={style.productCard}>
              <p className={style.dltContainer}>
                <span onClick={() => dispatch(removeFromCart(item.id))}>
                  <MdDelete />
                </span>
              </p>
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;

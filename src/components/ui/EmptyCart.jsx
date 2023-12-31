import React from "react";
import EmptyCartImg from "../../assets/empty_cart.svg";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="cart__body">
      <div className="container">
        <div className="row">
          <div className="cart__empty">
            <img src={EmptyCartImg} alt="" className="cart__empty--img" />
            <h2 className="section__title">
              You don't have any books in your cart!
            </h2>
            <Link to="/books">
              <button className="btn">Browse Books</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;

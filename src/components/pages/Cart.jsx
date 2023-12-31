import React from "react";
import EmptyCart from "../ui/EmptyCart";

const Cart = ({
  cart,
  getItemQuantity,
  getTotalPrice,
  removeBooks,
  getTotalQuantity,
  updateCart,
}) => {
  const taxRate = (6.5 / 100) * getTotalPrice();

  return (
    <div id="books__main">
      <div className="books__body">
        <section id="cart">
          <div className="container">
            <div className="bookInfo__row">
              <div className="bookInfo__top">
                <h2 className="cart__top--title">Cart</h2>
              </div>
              <div className="cart">
                <div className="cart__header">
                  <span className="cart__book">Book</span>
                  <span className="cart__quantity">Quantity</span>
                  <span className="cart__price">Price</span>
                </div>
                <div className="cart__body">
                  {cart.map((item) => (
                    <div className="cart__item">
                      <div className="cart__book">
                        <img
                          src={item.url}
                          alt=""
                          className="cart__book--img"
                        />
                        <div className="cart__book--info">
                          <span className="cart__book--title">
                            {item.title}
                          </span>
                          <span className="cart__book--price">
                            $
                            {item.salePrice
                              ? item.salePrice.toFixed(2)
                              : item.originalPrice.toFixed(2)}
                          </span>
                          <button
                            onClick={() => removeBooks(item)}
                            className="cart__book--remove"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="cart__quantity">
                        <input
                          type="number"
                          onChange={(event) => updateCart(item, event)}
                          className="cart__input"
                          min="0"
                          max="100"
                          // value={item.quantity}
                          defaultValue={item.quantity}
                        />
                      </div>
                      <div className="cart__price">
                        ${getItemQuantity(item).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {getTotalQuantity() === 0 ? (
                <EmptyCart />
              ) : (
                <div className="total">
                  <div className="total__item total__sub-total">
                    <span>Subtotal</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="total__item total__tax">
                    <span>Tax</span>
                    <span>${taxRate.toFixed(2)}</span>
                  </div>
                  <div className="total__item total__price">
                    <span>Total</span>
                    <span>${(getTotalPrice() + taxRate).toFixed(2)}</span>
                  </div>
                  <button className="btn cart__btn no-cursor">
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cart;

import React from "react";
import logo from "../assets/Library.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Nav = ({ cart, getTotalQuantity }) => {

  return (
    <nav>
      <div className="nav__container">
        <img src={logo} className="logo" alt="" />
        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/favorites" className="nav__link">
              <FontAwesomeIcon className="items__liked--heart" icon='heart' />
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/books" className="nav__link">
              Books
            </Link>
          </li>
          <li className="nav__list nav__icon">
            <Link to="/cart" className="nav__link">
              <FontAwesomeIcon icon="shopping-cart" />
            </Link>
            <span className="cart__length">{getTotalQuantity()}</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

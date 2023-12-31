import React from "react";
import Library from "../assets/Library.svg";
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <section id="footer">
      <div className="container">
        <div className="row">
          <a href="/">
            <img src={Library} alt="" className="logo footer__logo" />
          </a>
          <div className="footer__links">
            <a href="" className="footer__link">Home</a>
            <a href="" className="footer__link">About</a>
            <Link to="/books" className="footer__link">Books</Link>
            <Link to="/cart" className="footer__link">Cart</Link>
          </div>
          <div className="footer__copyright">Copyright &copy; 2023 Library</div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

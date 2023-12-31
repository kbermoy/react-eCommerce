import React from "react";
import UndrawImg from "../assets/Undraw_Books.svg";

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>America's most awarded online library platform</h1>
            <h2>
              Find your dream book with <span className="purple">Library</span>
            </h2>
            <a href="#featured">
              <button className="btn">Browse Books</button>
            </a>
          </div>

          <figure className="header__img--wrapper">
            <img src={UndrawImg} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Landing;

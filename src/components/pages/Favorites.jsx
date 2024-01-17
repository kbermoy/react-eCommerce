import React from "react";
import Book from "../ui/Book";
import EmptyFavoritesImg from "../../assets/empty_cart.svg";
import { Link } from "react-router-dom";

const Favorites = ({ favorites, addToFavorites }) => {
  const isEmpty = favorites.length === 0 ? true : false;

  return (
    <div id="books__main">
      <div className="books__container">
        <div className="bookInfo__row">
          <h2 className="section__title">Favorites</h2>
          {isEmpty ? (
            <>
              <div className="cart__empty">
                <img
                  src={EmptyFavoritesImg}
                  alt=""
                  className="cart__empty--img"
                />
                <h2 className="section__title">
                  You don't have any favorite books!
                </h2>
                <Link to="/books">
                  <button className="btn">Browse Books</button>
                </Link>
              </div>
            </>
          ) : (
            <div className="books">
              {favorites.map((book) => (
                <Book
                  book={book}
                  favorites={favorites}
                  addToFavorites={addToFavorites}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;

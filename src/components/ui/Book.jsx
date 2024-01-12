import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";
import Favorites from "../pages/Favorites";

const Book = ({ book, addToFavorites }) => {
  const [img, setImg] = useState();

  useEffect(() => {
    const image = new Image();
    image.src = book.url;
    image.onload = () => {
      setTimeout(() => {
        setImg(image);
      }, 300);
    };
  });

  function addMe() {

    console.log('addMe')
  }

  return (
    <div className="book">
      {img ? (
        <>
          <Link to={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
              <img src={book.url} alt="" className="book__img" />
            </figure>
          </Link>
          <button className="favorites__btn" onClick={addToFavorites} >
            <FontAwesomeIcon icon='heart' />
          </button>
          <div className="book__title">{book.title}</div>
          <Rating rating={book.rating} />
          <div className="book__pricing">
            <Price
              salePrice={book.salePrice}
              originalPrice={book.originalPrice}
            />
          </div>
        </>
      ) : (
        <>
          <div className="book__img--skeleton"></div>
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton book__rating--skeleton"></div>
          <div className="skeleton book__price--skeleton"></div>
        </>
      )}
    </div>
  );
};

export default Book;

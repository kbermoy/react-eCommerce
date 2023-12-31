import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";

const Book = ({ book }) => {
  return (
    <div className="book">
      <Link to={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          <img src={book.url} alt="" className="book__img" />
        </figure>
      </Link>
      <div className="book__title">{book.title}</div>
      <Rating rating={book.rating} />
      <div className="book__pricing">
        <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
      </div>
    </div>
  );
};

export default Book;

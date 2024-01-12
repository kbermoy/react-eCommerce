import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../ui/Rating";
import Price from "../ui/Price";
import Book from "../ui/Book";

const BookInfo = ({ books, addToCart, addToFavorites }) => {
  const { id } = useParams()
  const selectedBook = books.find(book => +id === +book.id)
  
  return (
    <div className="books__body">
      <section id="bookInfo">
        {/* {addToFavorites()} */}
        <div className="books__container">
          <div className="bookInfo__row">
            <div className="bookInfo__top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link className="book__link">
                <h2 className="bookInfo__top--title">Books</h2>
              </Link>
            </div>
            <div className="bookInfo__description">
              <figure className="selectedBook__img--wrapper">
                <img
                  src={selectedBook.url}
                  alt=""
                  className="selectedBook__img"
                />
              </figure>
              <div className="bookInfo__description--right">
                <h2 className="selectedBook__title">{selectedBook.title}</h2>
                <Rating rating={5} />
                <div className="selectedBook__price">
                  <Price salePrice={selectedBook.salePrice} originalPrice={selectedBook.originalPrice} />
                </div>
                <div className="selectedBook__summary">
                  <h3 className="selectedBook_summary--title">Summary</h3>
                  <p className="selectedBook_summary--para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Libero quidem, eligendi molestiae maxime praesentium aperiam
                    recusandae ut animi fugit ex nostrum debitis, ratione
                    placeat? Quam minima numquam earum eligendi impedit.
                  </p>
                  <p className="selectedBook_summary--para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Libero quidem, eligendi molestiae maxime praesentium aperiam
                    recusandae ut animi fugit ex nostrum debitis, ratione
                    placeat? Quam minima numquam earum eligendi impedit.
                  </p>
                </div>
                <button className="btn" onClick={() => addToCart(selectedBook)}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="bookInfo__row">
            <h2 className="section__title">Recommended</h2>
            <div className="books">
              {/* only want 4 5star books that are not the selected book item */}
              {books
                .filter(book => book.rating === 5 && book.id !== +id)
                .slice(0, 4)
                .map(book => <Book book={book} key={book.id} />)
              }
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookInfo;

/**
 *
 */

import React from "react";
import { books } from "../data";
import Book from "./ui/Book";

const Discounted = ({ addToFavorites, favorites }) => {
  return (
    <section id="discounted">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Discounted <span className="purple">Books</span>
          </h2>
          <div className="books">
            {books
              .filter((book) => book.salePrice !== null)
              .slice()
              .map((book) => (
                <Book book={book} key={book.id} addToFavorites={addToFavorites} favorites={favorites}/>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discounted;

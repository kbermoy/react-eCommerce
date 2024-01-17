import React, { useState } from "react";
import Book from "../ui/Book";

const Books = ({ books: initialBooks, addToFavorites, favorites }) => {
  // need to use a variable so useState
  const [books, setBooks] = useState(initialBooks)

  function filteredBooks(filter) {
    if(filter === "LOW_TO_HIGH") {
      setBooks(books.slice().sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)))
    } else if(filter === 'HIGH_TO_LOW') {
      setBooks(books.slice().sort((a, b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)))
    } else if(filter === 'RATING') {
      setBooks(books.slice().sort((a, b) => b.rating - a.rating))
    }
  }

  return (
    <div className="books__body">
      <div className="books__container">
        <div className="row">
          <div className="books__header">
            <h2 className="section__title">All Books</h2>
            <select onChange={event => filteredBooks(event.target.value)} id="filter" defaultValue='DEFAULT'>
                <option value="DEFAULT" disabled>Sort</option>
                <option value="LOW_TO_HIGH">Price, Low to High</option>
                <option value="HIGH_TO_LOW">Price, High to Low</option>
                <option value="RATING">Rating</option>
            </select>
          </div>

          <div className="books">
            {books
              .map(book => <Book book={book} addToFavorites={addToFavorites} favorites={favorites} key={book.id} />)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;

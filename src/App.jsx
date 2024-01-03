import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Books from "./components/pages/Books.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { books } from "./data";
import BookInfo from "./components/pages/BookInfo.jsx";
import { useEffect, useState } from "react";
import Cart from "./components/pages/Cart.jsx";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    const dupeItem = cart.find((item) => +item.id === +book.id); // if undefined it is not a dupeItem
    // if undefined then add to cart
    // if defined, dont add to cart but update quantity
    setCart((oldCart) =>
      dupeItem
        ? [
            ...oldCart.map((item) => {
              return +item.id === +dupeItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item;
            }),
          ]
        : [...oldCart, { ...book, quantity: 1 }]
    );
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  function getItemQuantity(item) {
    return item.salePrice
      ? item.quantity * item.salePrice
      : item.quantity * item.originalPrice;
  }

  function getTotalQuantity() {
    let quantity = 0;

    for (let i = 0; i < cart.length; i++) {
      quantity += cart[i].quantity;
    }
    return quantity;
  }

  function getTotalPrice() {
    let totalPrice = 0;

    for (let i = 0; i < cart.length; i++) {
      let price = cart[i].salePrice || cart[i].originalPrice;
      totalPrice += cart[i].quantity * price;
    }

    return totalPrice;
  }

  function removeBooks(books) {

    setCart((oldCart) => [...oldCart.filter((item) => +item.id !== +books.id)]);
  }

  function updateCart(item, event) {
    const newQuantity = event.target.value;

    setCart([
      ...cart.map((chartItem) => {
        return +chartItem.id === +item.id
          ? { ...chartItem, quantity: newQuantity }
          : chartItem;
      }),
    ]);
  }

  return (
    <Router>
      <div className="App">
        <Nav cart={cart} getTotalQuantity={getTotalQuantity} />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route
            path="/books"
            exact
            Component={() => <Books books={books} />}
          />
          <Route
            path="/books/:id"
            exact
            Component={() => <BookInfo books={books} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            exact
            Component={() => (
              <Cart
                books={books}
                cart={cart}
                getItemQuantity={getItemQuantity}
                getTotalPrice={getTotalPrice}
                removeBooks={removeBooks}
                getTotalQuantity={getTotalQuantity}
                updateCart={updateCart}
              />
            )}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Explore = () => {
  const { pathName } = useLocation()
  return (
    <section id="explore">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Explore more <span className="purple">Books</span>
          </h2>
          <Link to='/books'>
            <button className="btn">Explore Books</button>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Explore;

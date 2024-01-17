import React from "react";
import Discounted from "./Discounted";
import Explore from "./Explore";
import Featured from "./Featured";
import Landing from "./Landing";
import Highlights from "./Highlights";

const Home = ({ addToFavorites, favorites }) => {
  return (
    <>
      <Landing />
      <Highlights />
      <Featured addToFavorites={addToFavorites} favorites={favorites} />
      <Discounted addToFavorites={addToFavorites} favorites={favorites} />
      <Explore />
    </>
  );
};

export default Home;

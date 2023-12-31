import React from "react";
import Discounted from "./Discounted";
import Explore from "./Explore";
import Featured from "./Featured";
import Landing from "./Landing";
import Highlights from "./Highlights";

const Home = () => {
  return (
    <>
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
    </>
  );
};

export default Home;

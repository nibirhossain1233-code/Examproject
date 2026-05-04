import React from "react";
import Banner from "../components/home/Banner";
import Experience from "../components/home/Experience";
import Services from "../components/home/Services";
import Latest from "../components/home/Latest";
import Business from "../components/home/Business";

const Home = () => {
  return (
    <>
      <Banner />
      <Experience />
      <Services />
      <Latest />
      <Business />
    </>
  );
};

export default Home;

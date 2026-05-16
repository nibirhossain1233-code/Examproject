import React from "react";
import Banner from "../components/home/Banner";
import Experience from "../components/home/Experience";
import Services from "../components/home/Services";
import Latest from "../components/home/Latest";
import Business from "../components/home/Business";
import Clients from "../components/home/Clients";
import Trial from "../components/home/Trial";

const Home = () => {
  return (
    <>
      <Banner />
      <Experience />
      <Services />
      <Latest />
      <Business />
      <Clients/>
      <Trial/>
    </>
  );
};

export default Home;

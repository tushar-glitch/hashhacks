import React from "react";
import Contact from "../components/Contact";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeCircles from "../components/HomeCircles";
import Services from "../components/Services";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services/>
      <AboutUs />
      <HomeCircles />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
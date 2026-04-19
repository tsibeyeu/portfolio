import React from "react";
import Hero from "../component/Hero";
import About from "./About";
import Projects from "./Projects";
import CTA from "../component/CTA";
import Footer from "../component/Footer";
const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default Home;

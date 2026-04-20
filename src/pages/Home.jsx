import React from "react";
import Hero from "../component/Hero";
import About from "./About";
import Projects from "./Projects";

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

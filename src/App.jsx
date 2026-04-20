import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import { themeContext } from "./component/Context";
import PageNav from "./component/PageNav";
import Images from "./pages/Images";
import Footer from "./component/Footer";
import SideSocials from "./SideScoials";

const App = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    // The "dark" class on this div will control the colors of all components
    <div className={darkMode ? "dark" : ""}>
      <BrowserRouter>
        <PageNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <SideSocials />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

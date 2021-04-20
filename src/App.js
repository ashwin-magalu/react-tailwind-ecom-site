import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages";
import Menu from "./pages/menu";
import About from "./pages/about";
import Contact from "./pages/contact";
import DropDown from "./components/DropDown";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <>
      <Router>
        <NavBar toggle={toggle} />
        <DropDown isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Book from "./components/Book";
import About from "./components/About";
import Menu from "./components/Menu";

class App extends Component {
  render() {
    document.addEventListener(
      "touchmove",
      function (event) {
        if (event.scale !== 1) {
          event.preventDefault();
        }
      },
      false
    );
    return (
      <>
        <Router>
          <div className="hero_area">
            <div className="bg-box">
              <img src="images/hero-bg.jpg" alt="" />
            </div>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
          </div>
          <Routes>
            <Route exact path="/book" element={<Book />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/menu" element={<Menu />} />
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;

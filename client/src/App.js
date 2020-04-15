/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import Search from "./components/SearchForm/index";
import Footer from "./components/Footer/index";
import Header from "./components/Header/Header"
import "./App.css";

function App() {
  return (
    <>
      <div className="Directory">
        <Header />
        <Search />
      </div>
      <Footer />
    </>
  );
}

export default App;

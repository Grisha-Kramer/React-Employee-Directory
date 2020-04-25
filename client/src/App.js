/* eslint-disable react/prefer-stateless-function */
import React from "react";
import Search from "./components/SearchForm/index";
import Footer from "./components/Footer/index";
import Header from "./components/Header/Header"
import SearchResults from "./components/SearchResults"

import "./App.css";

function App() {
  return (
    <>
      <div className="Directory">
        <Header />
        <Search />
        <SearchResults />
      </div>
      <Footer />
    </>
  );
}

export default App;

// import React from "react";
import logo from "../../assets/qtifyLogo.svg";
import "./navbar.css";
import Btn from "../Button/Button";
import SearchBar from "../Search/Search";
import Hero from "../Hero/Hero";
import ActionAreaCard from "../Card/Card";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <SearchBar />
        <Btn className="navbar-btn" btnLable="Give Feedback" />
      </div>
      <div>
        <Hero />
      </div>
      <ActionAreaCard />
    </>
  );
}

export default Navbar;


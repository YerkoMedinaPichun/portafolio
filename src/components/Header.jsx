import React from "react";
import "../styles/Header.scss";
import Banner from "./Banner";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="header">
      <Nav />
      <Banner />
    </div>
  );
};

export default Header;

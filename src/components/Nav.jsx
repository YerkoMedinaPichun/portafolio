import React, { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import "../styles/Nav.scss";

const Nav = () => {
  const [clicked, setClicked] = useState(false);

  let isLargerThan480 = useMediaQuery("(min-width:480px)");
  //console.log(isLargerThan480);

  if (window.innerWidth >= 480) {
    isLargerThan480 = true;
  }

  const handleClick = () => {
    //cuando es true, lo convierte a false y cuando es false, pasa a true
    if (window.innerWidth < 480) {
      setClicked(!clicked);
    }
  };

  return (
    <nav className="nav">
      <button
        //clicked={clicked}
        onClick={handleClick}
        className={`button-nav ${clicked ? "button--active" : ""}`}
      >
        <ion-icon className="icon" name="menu"></ion-icon>
      </button>
      <ul
        className={`ul ${
          clicked ? "is-visible" : "" || isLargerThan480 ? "is-visible" : ""
        }`}
      >
        <li className="li">
          <a onClick={handleClick} className="a" href="#home">
            Inicio
          </a>
        </li>
        <li className="li">
          <a onClick={handleClick} className="a" href="#about">
            Sobre mí
          </a>
        </li>
        <li className="li">
          <a onClick={handleClick} className="a" href="#projects">
            Proyectos
          </a>
        </li>
        <li className="li">
          <a onClick={handleClick} className="a" href="#contact">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

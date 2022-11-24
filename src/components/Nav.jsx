import React from "react";
import "../styles/Nav.scss";
const d = document;

const Nav = () => {
  const clickNav = (e) => {
    e.stopPropagation();
    d.querySelector(".ul").classList.toggle("is-visible");
    if (d.querySelector(".ul").matches(".is-visible")) {
      d.querySelector(".button-nav").style.color = "#42b8e1";
      d.querySelector(".button-nav").style.border = "1px solid #42b8e1";
      //border: 1px solid #e1e1e1;
    } else {
      d.querySelector(".button-nav").style.color = "#e1e1e1";
      d.querySelector(".button-nav").style.border = "1px solid #e1e1e1";
    }
  };

  return (
    <nav className="nav">
      <button onClick={clickNav} className="button-nav">
        <ion-icon className="icon" name="menu"></ion-icon>
      </button>
      <ul className="ul">
        <li className="li">
          <a className="a" href="#">
            Inicio
          </a>
        </li>
        <li className="li">
          <a className="a" href="#">
            Proyectos
          </a>
        </li>
        <li className="li">
          <a className="a" href="#">
            Contacto
          </a>
        </li>
        <li className="li">
          <a className="a" href="#">
            Sobre mí
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

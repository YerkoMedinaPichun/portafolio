import React from "react";
import "../styles/CardProject.scss";

//import img from "../img/proyecto_01.jpg";
//import img from "../img/";

const CardProject = ({ name, description, link, tech, src }) => {
  console.log();
  return (
    <div className="card">
      <div className="lines"></div>
      <div className="container-img">
        {/* <img src={src} alt="Imagen" /> */}
        <div className="img" style={{ backgroundImage: `url(${src})` }}></div>
      </div>
      <p className="name">{name}</p>
      <p className="description">{description}</p>
      <p className="tech">{tech}</p>
      <a className="link" href={link} target="_blank" rel="noreferrer">
        Ver proyecto
      </a>
    </div>
  );
};

export default CardProject;

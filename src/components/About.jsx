import React from "react";
import "../styles/About.scss";
import "../styles/Section.scss";
import Shape from "./Shape";

const About = () => {
  return (
    <section className="section">
      <div className="about">
        <h2 id="about">Sobre Mí</h2>
        <p>
          Mi nombre es <span>Yerko Medina Pichún</span>, tengo 23 años, estudié
          la carrera de <span>Analista Programador</span> en <span>Inacap</span>{" "}
          y actualmente estoy en busca de realizar mi{" "}
          <span>práctica profesional</span> en el area de{" "}
          <span>Desarrollo Web</span>, específicamente como{" "}
          <span>Desarrollador Front End.</span>
        </p>
        <p>
          Actualmente manejo{" "}
          <span> HTML, CSS, JavaScript, SASS, ReactJS, Git/GitHub, MySQL</span>{" "}
          y también estoy dando mis primeros pasos con{" "}
          <span>Node.js y Express</span>
        </p>
      </div>
      <Shape fill="#1a1a1a" />
    </section>
  );
};

export default About;

import React from "react";
import "../styles/Projects.scss";
import "../styles/Section.scss";
import CardProject from "./CardProject";
import Shape from "./Shape";
import img01 from "../img/proyecto_01.jpg";
import img02 from "../img/proyecto_02.jpg";
import img03 from "../img/proyecto_03.jpg";
import img04 from "../img/proyecto_04.jpg";
import img05 from "../img/proyecto_05.jpg";
import img06 from "../img/proyecto_06.jpg";
import img07 from "../img/proyecto_07.jpg";
import img08 from "../img/proyecto_08.jpg";
import img09 from "../img/proyecto_09.jpg";
import img10 from "../img/proyecto_10.jpg";
import img11 from "../img/proyecto_11.jpg";
import img12 from "../img/proyecto_12.jpg";

const Projects = () => {
  return (
    <section className="section">
      <h2 id="projects">Mis Proyectos</h2>
      <div className="projects">
        <CardProject
          className="img"
          src={img12}
          name="Listar Tareas"
          description="Proyecto para listar tareas."
          tech="HTML - CSS - SASS - Javascript - React.js"
          link="https://lista-tareas-fcc01.netlify.app/"
        />
        <CardProject
          className="img"
          src={img11}
          name="Calculadora"
          description="Proyecto de calculadora."
          tech="HTML - CSS - SASS - Javascript - React.js"
          link="https://calculadora-fcc01.netlify.app/"
        />

        <CardProject
          className="img"
          src={img10}
          name="Contador de Clicks"
          description="Proyecto contador de clicks."
          tech="HTML - CSS - SASS - Javascript - React.js"
          link="https://contador-clicks-fcc01.netlify.app/"
        />
        <CardProject
          className="img"
          src={img09}
          name="Clon de Testimonios de FreeCodeCamp"
          description="Proyecto clon sección de testimonios, página de freecodecamp."
          tech="HTML - CSS - SASS - Javascript - React.js"
          link="https://testimonios-freecodecamp.netlify.app/"
        />
        <CardProject
          className="img"
          src={img08}
          name="Info Paradero Transantiago"
          description="Proyecto para consultar la información de buses Transantiago, mediante el codigo del paradero y codigo de bus (opcional)."
          tech="HTML - CSS - SASS - Javascript"
          link="https://yerkomedinapichun.github.io/API-TranSantiago/"
        />
        <CardProject
          className="img"
          src={img07}
          name="Inmobiliaria GreenHouse"
          description="Proyecto sobre una inmobiliaria ficticia."
          tech="HTML - CSS - SASS - Javascript"
          link="https://greenhouse-yamp.netlify.app/"
        />
        <CardProject
          className="img"
          src={img06}
          name="Cafetería Al-Majluf"
          description="Proyecto sobre la venta de productos como cafeteras, té, café, jugos, galletas, dátiles entre otros, todos de origen árabe."
          tech="HTML - CSS - SASS - Javascript"
          link="https://cafeteria-almajluf.netlify.app/"
        />
        <CardProject
          className="img"
          src={img05}
          name="Repostería Santana v.2."
          description="Proyecto sobre la venta de productos consumibles de repostería, tales como, queques, muffins, tortas, etc. Ahora con una mejora considerable en el diseño."
          tech="HTML - CSS - SASS - Javascript"
          link="https://reposteria-santana01.netlify.app/"
        />
        <CardProject
          className="img"
          src={img04}
          name="Rock & EDM Festival"
          description="Proyecto sobre la información de un evento de rock con bandas internacionales y sus horarios."
          tech="HTML - CSS - Javascript"
          link="https://festival-musical-deployment.netlify.app/"
        />
        <CardProject
          className="img"
          src={img03}
          name="Repostería Santana v.1."
          description="Proyecto sobre la venta de productos consumibles de repostería, tales como, queques, muffins, tortas, etc."
          tech="HTML - CSS - Javascript"
          link="https://reposteria-santana.netlify.app/"
        />
        <CardProject
          className="img"
          src={img02}
          name="Blog de Café"
          description="Proyecto sobre un blog de café con cursos y consejos."
          tech="HTML - CSS - Javascript"
          link="https://blog-cafe-yamp.netlify.app/"
        />
        <CardProject
          className="img"
          src={img01}
          name="Portafolio de Prueba"
          description="Proyecto sobre un portafolio de diseñador y desarrollador web freelancer."
          tech="HTML - CSS"
          link="https://portafolio-yamp.netlify.app/"
        />
      </div>
      <Shape fill="#242424" />
    </section>
  );
};

export default Projects;

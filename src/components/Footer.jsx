import React from "react";
import "../styles/Footer.scss";
import "../styles/Section.scss";

const Footer = () => {
  return (
    <>
      <div className="container-footer">
        <div className="footer">
          <span>
            <div className="container-icon">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <p>yrk.27.medina@gmail.com</p>
          </span>
          <span>
            <div className="container-icon">
              <ion-icon name="logo-github"></ion-icon>
            </div>
            <a
              href="https://github.com/YerkoMedinaPichun"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ir a Github
            </a>
          </span>
          <span>
            <div className="container-icon">
              <ion-icon name="logo-linkedin"></ion-icon>
            </div>
            <a
              href="https://www.linkedin.com/in/yerko-medina-pich%C3%BAn-8b731822a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_messaging%3BWHhWwo69SJ%2BWEj%2BU4lIBsw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ir a LinkedIn
            </a>
          </span>
        </div>

        <div className="copyright">
          <span>© COPYRIGHT 2022</span>{" "}
          <span>Todos los Derechos Reservados</span>{" "}
          <span>Desarrollado por Yerko Medina Pichún</span>
        </div>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import "../styles/UpButton.scss";

const UpButton = () => {
  return (
    <a href="#home" className="container-up-button">
      <ion-icon className="icon" name="arrow-up-outline"></ion-icon>
    </a>
  );
};

export default UpButton;

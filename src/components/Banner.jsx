import React from "react";
import "../styles/Banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <h1>
        {`Hola, mi nombre es `}
        <span>
          {"<"}Yerko Medina Pichún{" />"}
        </span>
      </h1>
    </div>
  );
};

export default Banner;

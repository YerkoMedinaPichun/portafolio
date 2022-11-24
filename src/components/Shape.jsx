import React from "react";
import "../styles/Shape.scss";

const Shape = (props) => (
  <div className="container-shape">
    <div className="custom-shape-divider-top-1669221812">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        {...props}
      >
        <path
          d="M598.97 114.72 0 0v120h1200V0L598.97 114.72z"
          className="shape-fill"
        />
      </svg>
    </div>
  </div>
);

export default Shape;

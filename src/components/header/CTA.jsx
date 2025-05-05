import React from "react";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href={
          "https://drive.google.com/file/d/1QmRqWlYc6xdYvo9Atn5clMtRoggtdQwl/view?usp=sharing"
        }
        download
        className="btn"
      >
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;

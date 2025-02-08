import React from "react";

const Servic = ({ seimg, hoverImg, sename }) => {
  return (
    <div className="service-item">
      <div className="image-container">
        <img src={seimg} alt={sename} className="default-img" />
        <img src={hoverImg} alt={sename} className="hover-img" />
      </div>
      <h3>{sename}</h3>
    </div>
  );
};

export default Servic;

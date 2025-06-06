import React from "react";
import "../css/SocialMediaAndMore.css";
import Icoins from "./Icons";

const SocialMediaAndMore: React.FC = () => {
  return (
    <>
      <div className="Container"       data-aos="fade-right">
        <div className="lines"></div>
        <div className="box" data-aos="zoom-out">
          <h1 className="V">V</h1>
        </div>
        <div className="text">
          <h4>exurex</h4>
        </div>

        <div className="shortDiscription">
          <p className="made">
            Made by <a>Khaleel</a>
          </p>
        </div>
        <div className="icoins">
          <Icoins />
        </div>
      </div>
    </>
  );
};

export default SocialMediaAndMore;

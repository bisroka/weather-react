//this comp is a picture
import React from "react";
import picture from "../img/temperature.jpg";
import "../css/Img.css";

const Img = () => {
  return <img className="temperature" src={picture} alt="" />;
};

export default Img;

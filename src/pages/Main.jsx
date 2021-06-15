import React from "react";
import img from "../images/content-2.jpg"
import "../styles/Main.css";

function Main() {
  return (
    <div className="main container">
      <div className="row">
        <div className="main-content col-sm-12 col-12 col-md-6 col-lg-6">
          <div className="content-img">
            <img src={img} width="100%" alt="tinchlik" />
          </div>
        </div>
        <div className="main-content col-sm-12 col-12 col-md-6 col-lg-6">
          <h3 className="content-title">Muassasa haqida</h3>
          <p className="content-text">Xorazm viloyati Gurlan tumani 5-son <span style={{fontWeight: "bold"}}>"Tinchlik"</span> nomidagi davlat maktabgacha ta'lim tashkiloti</p>
        </div>
      </div>
    </div>
  );
}

export default Main;

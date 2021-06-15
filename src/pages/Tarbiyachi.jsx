import React from "react";
import "../styles/Tarbiyachi.css";
import img from "../images/tarbiyachi_auto_x2.jpg";

function Tarbiyachi() {
  return (
    <div className="tarbiyachi container">
      <div className="row">
        <div className="tarbiyachi-img col-sm-5 col-md-5 col-lg-5 col-5">
          <div className="img">
            <img src={img} width="100%" alt="Tinchlik" />
          </div>
        </div>
        <div className="tarbiyachi-content col-sm-7 col-md-7 col-lg-7 col-7">
          <h3 className="content-title">Tarbiyachi haqida</h3>
          <p className="content-text" style={{fontSize: "16px"}}>
            Xorazm viloyati Gurlan tumani 5-son davlat maktabgacha ta'lim
            muassasasi tarbiyachisi <span>Abdullayeva Barno Ilxomovna</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tarbiyachi;

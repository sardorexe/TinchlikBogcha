import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginBottom: "10px",
      }}
      className="footer"
    >
      <span>
        &copy; Xorazm viloyati, Gurlan tumani 5-son "Tinchlik" maktabgacha
        ta'lim tashkiloti
      </span>
      <span>
        Dasturchi:{" "}
        <a target="_blank" href="https://instagram.com/sardor_insane">
          Sardor
        </a>
      </span>
    </footer>
  );
}

export default Footer;

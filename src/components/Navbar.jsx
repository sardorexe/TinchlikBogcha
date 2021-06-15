import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [clicked, setClick] = useState(false)
  const toggleClick = () => {
    setClick(!clicked)
  }
  return (
    <>
      <nav className="navigation">
        <div className="logo">
          <h3 className="logo-text">
            <Link to="/" activeClassName="active">
              TINCHLIK
            </Link>
          </h3>
        </div>
        <div className="nav-items">
          <Link activeClassName="active" to="/">
            Bosh Sahifa
          </Link>
          <Link activeClassName="active" to="/gallery">
            Fotolavha
          </Link>
          <Link activeClassName="active" to="/tarbiyachi">
            Tarbiyachi
          </Link>
        </div>
      </nav>
      <nav className="responsive-nav">
        <div className="control">
          <h3 className="logo">
            <Link to="/">TINCHLIK</Link>
          </h3>
          <i onClick={toggleClick} class={`${clicked ? "up" : ""} icon fas fa-angle-double-down`}></i>
        </div>
        <div className={`nav-items ${clicked ? "show" : ""}`}>
          <Link activeClassName="active" to="/">
            Bosh Sahifa
          </Link>
          <Link activeClassName="active" to="/gallery">
            Fotolavha
          </Link>
          <Link activeClassName="active" to="/tarbiyachi">
            Tarbiyachi
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

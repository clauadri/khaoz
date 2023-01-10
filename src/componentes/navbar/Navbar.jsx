import React from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink, useNavigate } from "react-router-dom";
import Imagen from "../Imagen";
import "./Navbar.scss";
import { FaUser } from "react-icons/fa";
const Navbar = () => {
  const navigate = useNavigate()
  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <div className="container">
    <div className="login">
    <div>
        <Imagen />
      </div>
      <div className="button">
      <button onClick={()=>goToLogin()}>Login <FaUser/></button>
      </div>
    </div>
      
      <div>
        <Menu>
          <NavLink className="menu-item" to="/">
            Home
          </NavLink>
          <NavLink className="menu-item" to="/artistas">
            Artistas
          </NavLink>
          <NavLink className="menu-item" to="/musica">
            Música
          </NavLink>
          <NavLink className="menu-item" to="/lienzos">
            Lienzos
          </NavLink>
          <NavLink className="menu-item" to="/artesania">
            Artesania
          </NavLink>
          <NavLink className="menu-item" to="/registrarse">
            Registrarse
          </NavLink>
          <NavLink className="menu-item" to="/contacto">
            Contacto
          </NavLink>
        </Menu>
      </div>
    </div>
  );
};
export default Navbar;

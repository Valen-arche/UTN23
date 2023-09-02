import React from "react";
import '../Componentes/NavStyle.css';
import { Link } from 'react-router-dom';


function Nav () { 
  return (
    <div className="Nav">
      <ul>
        <li><Link to="/"> <p>Inicio</p></Link></li>
        <li><Link to="/servicios"><p> Servicios</p></Link></li>

        <li><Link to="/Predicciones"> <p>Predicciones</p></Link></li>
              <li><Link to="/contacto"> <p>Contacto</p></Link></li>

      </ul>

    </div>
)}


export default Nav
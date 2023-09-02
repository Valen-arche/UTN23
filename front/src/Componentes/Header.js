import React from 'react';
import logo from '../Assets/Magisterius-logo.png'; 
import '../Componentes/HeaderStyle.css';

function Header() {
  return (
    <div className='HeaderStyle'>
      <a href="http://localhost:3000/Home">
        <img src={logo} alt="Logo de Magisterius" />
      </a>
       </div>
  );
}

export default Header;
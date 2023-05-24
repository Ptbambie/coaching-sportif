import React from 'react'
import logoImage from '../Assets/ROMAIN P..gif'; // img link home
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <ul className="nav-links">
        <li >  <a href="#"> <img src={logoImage} alt="Logo" class="logo" /></a></li>
        <li><a href="#">Biographie</a></li>
        <li><a href="#">Programmes</a></li>
        <li><a href="#">Témoignage</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className='trait-horizontal'></div>
    </nav>
  );
}

export default Nav; 
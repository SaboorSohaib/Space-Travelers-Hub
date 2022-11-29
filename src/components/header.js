import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/planet.png';

const Header = () => (
  <header className="nav-bar">
    <div className="logo">
      <img className="logoImg" src={Logo} alt="logo" />
      <h2 className="logoText">Space Travelers&apos; Hub</h2>
    </div>
    <nav className="navigation">
      <NavLink to="/">Rockets</NavLink>
      <NavLink to="/missoins">Missoins</NavLink>
      <NavLink to="/dragons">Dragons</NavLink>
      <span className="line" />
      <NavLink to="/myProfile">MyProfile</NavLink>
    </nav>
  </header>
);

export default Header;

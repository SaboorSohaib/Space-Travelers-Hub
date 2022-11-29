import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="nav-bar">
    <nav className="navigation">
      <Link to="/">Rockets</Link>
      <Link to="/missoins">Missoins</Link>
      <Link to="/myProfile">MyProfile</Link>
    </nav>
  </header>
);

export default Header;

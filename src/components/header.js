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
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? '#4e4eff' : 'none',
              fontSize: isActive ? '20px' : 'regular',
              textDecoration: isActive ? 'underline' : '',
            })}
          >
            Rockets
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/mission"
            style={({ isActive }) => ({
              color: isActive ? '#4e4eff' : 'none',
              fontSize: isActive ? '20px' : 'regular',
              textDecoration: isActive ? 'underline' : '',
            })}
          >
            Missions
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/dragons"
            style={({ isActive }) => ({
              color: isActive ? '#4e4eff' : 'none',
              fontSize: isActive ? '20px' : 'regular',
              textDecoration: isActive ? 'underline' : '',
            })}
          >
            Dragons
          </NavLink>
        </li>
        <li className="navbar-item">
          <span className="line" />
          <NavLink
            to="/myProfile"
            style={({ isActive }) => ({
              color: isActive ? '#4e4eff' : 'none',
              fontSize: isActive ? '20px' : 'regular',
              textDecoration: isActive ? 'underline' : '',
            })}
          >
            MyProfile
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

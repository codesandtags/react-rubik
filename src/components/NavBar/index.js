import React from "react";
import {NavLink} from 'react-router-dom';

const config = {
  cssClasses: {
    active: 'active'
  }
};

const NavBar = () => (
  <nav>
    <ol>
      <li><NavLink activeClassName={config.cssClasses.active} to="/">What is React Rubik?</NavLink></li>
      <li>Components
        <ul>
          <li><NavLink activeClassName={config.cssClasses.active} to="/components#gallery">Gallery</NavLink></li>
          <li><NavLink activeClassName={config.cssClasses.active} to="/components#counter">Counter</NavLink></li>
        </ul>
      </li>
    </ol>
  </nav>
);

export default NavBar;

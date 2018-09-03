import React from 'react';
import { NavLink } from 'react-router-dom';

const header = () => (
  <div>
    <h1>Adam</h1>
    <nav>
      <ul>
        <li>
          <NavLink to={{ pathname: '/' }} exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={{ pathname: '/login' }} exact>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default header;

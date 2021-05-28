import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>RESTy App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/History">History</NavLink>
          </li>
          <li>
            <NavLink to="/Help">Help</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
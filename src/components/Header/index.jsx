import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Header() {
  const styles = ({ isActive }) => ({
    textDecoration: isActive ? 'underline' : 'none',
  });

  return (
    <main>
      <header>
        <nav>
          <NavLink to="/" style={styles}>
            Home
          </NavLink>
          <NavLink to="/shows" style={styles}>
            Shows
          </NavLink>
          <NavLink to="/search" style={styles}>
            Search
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </main>
  );
}

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const location = useLocation();

  // Hide sidebar on /signIn route
  if (location.pathname === '/SignIn') {
    return null;
  }
  if (location.pathname === '/privateacc') {
    return null;
  }
  

  const handleThemeToggle = () => {
    toggleDarkMode(); // Call the toggleDarkMode function passed from App.js
  };

  return (
    <div className="content">
      <nav>
        <i className='bx bx-menu'></i>
        <form action="#">
          {/* <div className="form-input">
            <input type="search" placeholder="Search..." />
            <button className="search-btn" type="submit"><i className='bx bx-search'></i></button>
          </div> */}
        </form>
        <input type="checkbox" id="theme-toggle" hidden onChange={handleThemeToggle} checked={darkMode} />
        <label htmlFor="theme-toggle" className="theme-toggle"></label>
        <Link to="/chat" className="profile">
          <i className='bx bx-chat'></i>
        </Link>
        <Link to="#" className="notif">
          <i className='bx bx-bell'></i>
          <span className="count">12</span>
        </Link>
        <Link to="#" className="profile">
          <i className='bx bxs-user-circle'></i>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;

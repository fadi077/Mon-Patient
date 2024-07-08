import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();

  // Hide sidebar on /signIn route
  if (location.pathname === '/SignIn') {
    return null;
  }
  if (location.pathname === '/privateacc') {
    return null;
  }


  return (
    <div className="sidebar">
      <div className="logo-div">
        <Link to="#">
          <img className="logo-img" src="logo (2).png" alt="logo" />
        </Link>
        <Link to="#" className="logo">
          <div className="logo-name"><span>Mon</span>Patient</div>
        </Link>
      </div>
      <ul className="side-menu">
        <li><Link to="/"><i className='bx bxs-dashboard'></i>Home</Link></li>
        <li><Link to="#"><i className='bx bxs-check-shield'></i>Messages</Link></li>
        <li><Link to="/doctors"><i className='bx bx-group'></i>My Staff</Link></li>
        <li><Link to="#"><i className='bx bx-message-square-dots'></i>search</Link></li>
        <li><Link to="#"><i className='bx bx-message-square-dots'></i>Documents</Link></li>
        <li><Link to="/settings"><i className='bx bx-cog'></i>Settings</Link></li>
      </ul>
      <ul className="side-menu">
        <li>
          <Link to="/SignIn" className="logout">
            <i className='bx bx-log-out-circle'></i>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

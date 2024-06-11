import React from 'react';
import './Header.css'; // Import your CSS file for styling
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="nav-items">
        <div className="logo"><Link to="/">μ</Link></div>
        <div className="nav-item"><Link to="/record">Record</Link></div>
        <div className="nav-item"><Link to="/play">Play Along</Link></div>
      </div>

      <div className="nav-items"><div className="nav-item"><Link to="/settings">Settings</Link></div></div>
    </div>
  );
};

export default Header;
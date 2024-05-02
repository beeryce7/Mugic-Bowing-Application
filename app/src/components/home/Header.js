import React from 'react';
import './Header.css'; // Import your CSS file for styling
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="nav-items">
        <div className="logo"><Link to="/">μ</Link></div>
        <div className="nav-item">Record</div>
        <div className="nav-item">Files</div>
        <div className="nav-item"><Link to="/settings">Settings</Link></div>
      </div>

      <div className="professor">Professsor Kimura </div>
    </div>
  );
};

export default Header;
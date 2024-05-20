import React from 'react';
import './SessionState.css'; // Import your CSS file for styling
import { Link } from "react-router-dom";
import BasicMenu from './BasicMenu';

const Header = () => {
  return (
    <div className="header">
      <div className="nav-items">
        <div className="new-logo"><Link to="/">μ</Link></div>
        <BasicMenu/>
      </div>
      <div className="new-recenter"><div className="nav-item"><Link to="/settings">Settings</Link> </div></div>
    </div>
  );
};

export default Header;
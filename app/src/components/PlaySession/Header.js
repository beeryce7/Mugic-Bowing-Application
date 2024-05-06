import React from 'react';
import './SessionState.css'; // Import your CSS file for styling
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="nav-items">
        <div className="logo"><Link to="/">μ</Link></div>
        <div className="nav-item"><FormatListBulletedIcon style={{ color: 'white' }} /></div>
      </div>
      <div className="nav-item"><Link to="/settings">Settings</Link> </div>
    </div>
  );
};

export default Header;
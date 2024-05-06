import React from 'react';
import './SessionState.css'; // Import your CSS file for styling
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="nav-items">
        <div className="logo"><Link to="/">μ</Link></div>
      </div>
      <ListItem>
      <ListItemIcon>
        <FormatListBulletedIcon style={{ color: 'white' }} />
      </ListItemIcon>
      <ListItemText primary="Song Name" />
      </ListItem>
      <div className="nav-item"><Link to="/settings">Settings</Link> </div>
    </div>
  );
};

export default Header;
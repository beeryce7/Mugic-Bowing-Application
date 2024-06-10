import React from 'react';
import './Header.css'; // Import your CSS file for styling
import { Link } from "react-router-dom";
import { selectBattery } from '../../slices/mugicDataSlice';
import { useSelector } from 'react-redux';

const Header = () => {

  const battery = useSelector(selectBattery)

  return (
    <div className="header">
      <div className="nav-items">
        <div className="logo"><Link to="/">μ</Link></div>
        <div className="nav-item"><Link to="/record">Record</Link></div>
        <div className="nav-item"><Link to="/play">Play Along</Link></div>
      </div>
      <div>
        Battery: {battery}
      </div>
      <div className="nav-items"><div className="nav-item"><Link to="/settings">Settings</Link></div></div>
    </div>
  );
};

export default Header;
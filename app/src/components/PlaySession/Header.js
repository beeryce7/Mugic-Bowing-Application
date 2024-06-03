import React from 'react';
import './SessionState.css'; // Import your CSS file for styling
import { Link } from "react-router-dom";
import BasicMenu from './BasicMenu';
import { useSelector } from 'react-redux';
import { selectFileName } from '../../slices/loadedDataSlice';


const Header = () => {

  const fileName = useSelector(selectFileName)

  return (
    <div className="new-header">
      <div className="nav-items">
        <div className="new-logo"><Link to="/">MUGIC</Link></div>
      </div>
      <div> {fileName}</div>
      <div className="nav-items"><div className="nav-item"><Link to="/settings">Settings</Link> </div>
    </div></div>
  );
};

export default Header;
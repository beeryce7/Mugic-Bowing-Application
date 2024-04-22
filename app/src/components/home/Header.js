import React from 'react';
import './Header.css'; // Import your CSS file for styling

const Header = () => {
  return (
    <div className="header">
      <div className="nav-items">
        <div className="logo">μ</div>
        <div className="nav-item">Record</div>
        <div className="nav-item">Files</div>
        <div className="nav-item">Settings</div>
      </div>

      <div className="professor">Professsor Kimura </div>
    </div>
  );
};

export default Header;
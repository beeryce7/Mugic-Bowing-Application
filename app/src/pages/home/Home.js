import React from 'react';
import CustomButton from '../../components/CustomButton';
import logo from "../../assets/images/mugic_logo.png";
import './Home.css'; 

const Home = () => {
  return (
    <div className="container">
      <header>
        <h1 id="imagePlace">
            <img src={logo} alt="Logo" />
            Mugic App
        </h1>
      </header>
      <CustomButton text="Teacher" />
    </div>
  );
};

export default Home;

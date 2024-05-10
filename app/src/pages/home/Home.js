import React from 'react';
import CustomButton from '../../components/CustomButton';
import './Home.css'; 
import Header from '../../components/home/Header';
import SaveLoad from '../../components/mugic_tracker/SaveLoad';

const Home = () => {
  return (
    <div>
      <Header/>
      
      <h1 className="banner">
        Welcome to MμGIC!
      </h1>

      <h2 className="text_style">
        Start a new!
      </h2>

      <div className="container">
        <CustomButton text="Record" />
        <CustomButton text="Import" />
        <CustomButton text="Add Device" />
      </div>

      <h2 className="text_style">
        Recent Files
      </h2>
      <SaveLoad/>
    </div> 
  );
};

export default Home;

import React from 'react';
import CustomButton from '../../components/CustomButton';
import './Home.css'; 
import Header from '../../components/home/Header';
import MugicTracker from '../../components/mugic_tracker/MugicTracker';
import { Slider } from '@mui/material';

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

      <div className="container">
        <MugicTracker/>
      </div>

      <h2 className="text_style">
        Recent Files
      </h2>
        <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
       />
        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
    </div> 
  );
};

export default Home;

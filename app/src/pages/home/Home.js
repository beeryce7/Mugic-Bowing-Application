import React from 'react';
import CustomButton from '../../components/CustomButton';
import './Home.css'; 
import Header from '../../components/home/Header';

const Home = () => {
  return (
    <div>
      <Header/>
      
      <div className="banner">
        Welcome to MUGIC<sup>&reg;</sup>!
      </div>

      <div className="text_style">
        Start a new session!
      </div>

      <div className="container">
        <CustomButton text="Record" />
        <CustomButton text="Play Along" />
      </div>

      <h2 className="text_style">
        Recent Files
      </h2>
    </div> 
  );
};

export default Home;

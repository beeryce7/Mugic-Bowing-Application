import React from 'react';
import CustomButton from '../../components/CustomButton';
import './Home.css'; 
import Header from '../../components/home/Header';
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();
  
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
        <CustomButton text="Record" onClick={() => navigate("/record")}/>
        <CustomButton text="Play Along" onClick={() => navigate("/play")}/>
      </div>

    </div> 
  );
};

export default Home;

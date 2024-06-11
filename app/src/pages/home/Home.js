import React from 'react';
import CustomButton from '../../components/CustomButton';
import './Home.css'; 
import Header from '../../components/home/Header';
import { useNavigate } from "react-router-dom";
import { selectBattery } from '../../slices/mugicDataSlice';
import { useSelector } from 'react-redux';

const Home = () => {

  const navigate = useNavigate();
  const battery = useSelector(selectBattery)
  
  return (

    <div>
      <Header/>
      
      <div className="banner">
        Welcome to MUGIC<sup>&reg;</sup>!
      </div>
      <div className="text_style_container">
      
      
      <div className="text_style">
        Start a new session!
      </div>


      <div className="stay-on-right">
          {battery <= 0 || !battery ? (
            <div className="stay-on-right">Device Not Connected <div className="circle-red"></div></div>
          ) : (
            <div className="stay-on-right">Device Connected <div className="circle-green"></div></div>
          )}
        </div>

      </div>
      <div className="container">
        <CustomButton text="Record" onClick={() => navigate("/record")}/>
        <CustomButton text="Play Along" onClick={() => navigate("/play")}/>
      </div>
    </div> 
  );
};

export default Home;

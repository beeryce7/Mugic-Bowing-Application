import React from 'react';
import CustomButton from '../../components/CustomButton';
import './Settings.css'; 
import Header from '../../components/home/Header';
import { Grid, Container } from '@mui/material';

const Home = () => {
  return (
    <div>
      <Header/>
      
      <h1 className="banner">
        Settings - Calibration
      </h1>
      <Grid container spacing={2}>
        <Grid item xs={6}>
         <Container className="var-container">Yaw</Container>
        </Grid>
        <Grid item xs={6}>
         <Container className="var-container">Energy</Container>
        </Grid>
        <Grid item xs={6}>
         <Container className="var-container">Pitch</Container>
        </Grid>
        <Grid item xs={6}>
         <Container className="var-container">Jolt</Container>
        </Grid>
        <Grid item xs={6}>
         <Container className="var-container">Roll</Container>
        </Grid>
        <Grid item xs={6}>
         <Container className="var-container">Calibration</Container>
        </Grid>
      </Grid>
    </div> 
  );
};

export default Home;

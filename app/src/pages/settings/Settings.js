import React from 'react';
import './Settings.css'; 
import Header from '../../components/home/Header';
import { Grid, Container, Switch } from '@mui/material';
import InfoContainer from '../../components/settings/InfoContainer';

const Settings = () => {
  return (
    <div>
      <Header/>
      
      <h1 className="banner">
        Settings - Calibration
      </h1>
      <Grid container spacing={2}>
        <Grid item xs={6}>
         <InfoContainer title="Yaw" fill={true}>
            content
         </InfoContainer>
        </Grid>
        <Grid item xs={6}>
         <InfoContainer title="Energy">

         </InfoContainer>
        </Grid>
        <Grid item xs={6}>
         <InfoContainer title="Pitch">

         </InfoContainer>
        </Grid>
        <Grid item xs={6}>
         <InfoContainer title="Jolt">
         <Switch />
         </InfoContainer>
        </Grid>
        <Grid item xs={6}>
         <InfoContainer title="Roll">

         </InfoContainer>
        </Grid>
        <Grid item xs={6}>
         <InfoContainer title="Calibration" fill={false}>
            content
            
         </InfoContainer>
        </Grid>
      </Grid>
    </div> 
  );
};

export default Settings;

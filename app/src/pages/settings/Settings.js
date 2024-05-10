import React, {useState} from 'react';
import './Settings.css'; 
import Header from '../../components/home/Header';
import { Grid, Container, Switch } from '@mui/material';
import InfoContainer from '../../components/settings/InfoContainer';

const Settings = () => {
  const [orientation, setOrientation] = useState({
    yaw: 0,
    pitch: 0,
    roll: 0,
  });
  
  window.electronAPI.onMugicMessage((msg) => {
    let q0 = msg[13]
    let q1 = msg[14]
    let q2 = msg[15]
    let q3 = msg[16]

    let yr = -Math.atan(-2 * q1 * q2 + 2 * q0 * q3, q2 * q2 - q3 * q3 - q1 * q1 + q0 * q0);
    let pr = Math.asin(2 * q2 * q3 + 2 * q0 * q1);
    let rr = Math.atan2(-2 * q1 * q3 + 2 * q0 * q2, q3 * q3 - q2 * q2 - q1 * q1 + q0 * q0);

    setOrientation({
      yaw: Math.round(yr * 180 / Math.PI),
      pitch: Math.round(pr * 180 / Math.PI),
      roll: Math.round(rr * 180 / Math.PI),
    });
  });

  const getYaw = () => {
    return orientation.yaw;
  };

  const getPitch = () => {
    return orientation.pitch;
  };

  const getRoll = () => {
    return orientation.roll;
  };

  return (
    <div>
      <Header/>
      <h1 className="banner">
        Settings - Calibration
      </h1>
      <Grid container spacing={2}>
        <Grid item xs={6}>
         <InfoContainer title="Yaw">
          {getYaw()}
         </InfoContainer>
        </Grid>
        <Grid item xs={6}>
         <InfoContainer title="Energy">

         </InfoContainer>
        </Grid>
        <Grid item xs={6}>
         <InfoContainer title="Pitch">
          {getPitch()}
         </InfoContainer>
        </Grid>
        <Grid item xs={6}>
         <InfoContainer title="Jolt">
         <Switch />
         </InfoContainer>
        </Grid>
        <Grid item xs={6}>
         <InfoContainer title="Roll">
          {getRoll()}
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

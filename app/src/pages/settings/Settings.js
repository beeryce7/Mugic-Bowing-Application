import React, {useEffect} from 'react';
import './Settings.css'; 
import Header from '../../components/home/Header';
import { Grid, Container, Switch, Button } from '@mui/material';
import InfoContainer from '../../components/settings/InfoContainer';
import { useSelector, useDispatch } from 'react-redux';
import { selectMugicData, calibrateDevice } from '../../slices/mugicDataSlice';


const Settings = () => {

  const mugicData = useSelector(selectMugicData);

  const dispatch = useDispatch();

  const handleCalibration = () => {
    dispatch(calibrateDevice());
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
          {mugicData.yaw}
         </InfoContainer>
        </Grid>
        <Grid item xs={6}>
         <InfoContainer title="Energy">

         </InfoContainer>
        </Grid>
        <Grid item xs={6}>
         <InfoContainer title="Pitch">
          {mugicData.pitch}
         </InfoContainer>
        </Grid>
        <Grid item xs={6}>
         <InfoContainer title="Jolt">
         <Switch />
         </InfoContainer>
        </Grid>
        <Grid item xs={6}>
         <InfoContainer title="Roll">
         {mugicData.roll}
         </InfoContainer>
        </Grid>
        <Grid item xs={6}>
         <InfoContainer title="Calibration" fill={false}>
            <Button variant="contained" onClick={handleCalibration}>
              Calibrate
            </Button>
         </InfoContainer>
        </Grid>
      </Grid>
    </div> 
  );
};

export default Settings;

import React, {useEffect} from 'react';
import './Settings.css'; 
import Header from '../../components/home/Header';
import { Grid, Container, Switch, Button } from '@mui/material';
import InfoContainer from '../../components/settings/InfoContainer';
import MeasurementGauge from '../../components/settings/MeasurementGauge';
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
      <Grid container spacing={2} columns={12}>
        <Grid item xs={6}>
         <InfoContainer title="Yaw">
          <MeasurementGauge
            value={mugicData.yaw}
            measurement={'yaw'}
          />
         </InfoContainer>
         <InfoContainer title="Pitch">
          <MeasurementGauge
            value = {mugicData.pitch}
            measurement={'pitch'}
          />
         </InfoContainer>

         <InfoContainer title="Roll">
         <MeasurementGauge
            value = {mugicData.roll}
            measurement={'roll'}
          />
         </InfoContainer>
        </Grid>


        
        <Grid item xs={6}>
        
          <InfoContainer title= "What are these values?">
            Yaw, Pitch and Roll represent how you move your MUGIC device across the 3D plane.
            <img className= "plane"src={'https://upload.wikimedia.org/wikipedia/commons/7/7e/Rollpitchyawplain.png'}></img>
            <li> <b>Yaw </b>is the rotation from left to right as your device lays flat.</li>
            <li> <b>Pitch</b> is the rotation from up to down.</li>
            <li> <b>Roll</b> is the rotation of the whole device as if you are doing a barrel roll on a plane! </li>
          </InfoContainer>
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

import React, {useEffect} from 'react';
import './Settings.css'; 
import Header from '../../components/home/Header';
import { Grid, Container, Switch } from '@mui/material';
import InfoContainer from '../../components/settings/InfoContainer';
import { useSelector } from 'react-redux';
import { selectMugicData } from '../../slices/mugicDataSlice';
import MeasurementGauge from '../../components/settings/MeasurementGauge';

const Settings = () => {

  const mugicData = useSelector(selectMugicData);

  return (
    <div>
      <Header/>
      <h1 className="banner">
        Settings - Calibration
      </h1>
      <Grid container spacing={2}>
        <Grid item xs={6}>
         <InfoContainer title="Yaw">
          <MeasurementGauge
            value={mugicData.yaw}
            measurement={'yaw'}
          />
          
         </InfoContainer>
        </Grid>
        <Grid item xs={6}>
        </Grid>
        <Grid item xs={6}>
         <InfoContainer title="Pitch">
          <MeasurementGauge
            value = {mugicData.pitch}
            measurement={'pitch'}
          />
          
         </InfoContainer>
        </Grid>
        <Grid item xs={6}>
        </Grid>
        <Grid item xs={6}>
         <InfoContainer title="Roll">
         <MeasurementGauge
            value = {mugicData.roll}
            measurement={'roll'}
          />
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

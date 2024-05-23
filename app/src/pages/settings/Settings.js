import React, {useEffect} from 'react';
import './Settings.css'; 
import Header from '../../components/home/Header';
import { Grid, Container, Switch } from '@mui/material';
import InfoContainer from '../../components/settings/InfoContainer';

import { useSelector, useDispatch } from 'react-redux';
/*
import { listenToMugicData } from '../../slices/mugicDataSlice';
*/

//import { selectData } from '../../slices/mugicDataSlice';



const Settings = () => {
  /*
  const dispatch = useDispatch();
  const mugicData = useSelector((state) => state.mugicData.data);

  useEffect(() => {
    dispatch(listenToMugicData());
  }, [dispatch]);
  */

  const yaw = useSelector((state) => state.mugicData.data.yaw)



  return (
    <div>
      <Header/>
      <h1 className="banner">
        Settings - Calibration
      </h1>
      <Grid container spacing={2}>
        <Grid item xs={6}>
         <InfoContainer title="Yaw">
          {yaw}
         </InfoContainer>
        </Grid>
        <Grid item xs={6}>
         <InfoContainer title="Energy">

         </InfoContainer>
        </Grid>
        <Grid item xs={6}>
         <InfoContainer title="Pitch">
          {0}
         </InfoContainer>
        </Grid>
        <Grid item xs={6}>
         <InfoContainer title="Jolt">
         <Switch />
         </InfoContainer>
        </Grid>
        <Grid item xs={6}>
         <InfoContainer title="Roll">
         {0}
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

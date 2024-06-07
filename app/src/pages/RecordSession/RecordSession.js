import React from 'react';
import './RecordSession.css'; 
import Header from '../../components/PlaySession/Header';
import SessionState from '../../components/PlaySession/SessionState';
import { Button, Grid, Snackbar } from '@mui/material';

const RecordSession = () => {
  return (
    <div>
    <Header/>

    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={6}>
      <div className = "new-button-container">
        <Button variant="contained" className = "color-button"><div className = "text-for-button">Save as...</div></Button>
        <Button variant="contained" className = "color-button"><div className = "text-for-button">Clear</div></Button>
        <Button variant="contained" className = "color-button"><div className = "text-for-button">Redo</div></Button>
      </div>
      
     
    </Grid>

    <Grid item xs={6}> 
      <div className="be-on-right">00:00</div>
    </Grid>
    
  </Grid>
    
    
    <div className="new-graph">GRAPH</div>

    <SessionState/>

    </div> 
  );
};



export default RecordSession;
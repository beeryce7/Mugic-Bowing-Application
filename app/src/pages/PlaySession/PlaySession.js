import React from 'react';
import './PlaySession.css'; 
import Header from '../../components/PlaySession/Header';
import SessionState from '../../components/PlaySession/SessionState';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Grid, Snackbar } from '@mui/material';
//import DividerStack from '../../components/PlaySession/DividerStack';
import Visualizer from '../../components/visualizer/Visualizer';
import LoadedDataVisual from '../../components/visualizer/LoadedDataVisual';
import { selectRecordingTimer } from '../../slices/recordingDataSlice';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { loadRecording, selectLoadedType, selectTeacherData} from '../../slices/loadedDataSlice';

const PlaySession = () => {

  const dispatch = useDispatch()
  const [loadSnackbarOpen, setLoadSnackbarOpen] = React.useState(false)
  const recordingTimer = useSelector(selectRecordingTimer)

  const handleLoad = async () => {
    const {fileName, message, cancelled} = await window.electronAPI.loadFile();
    if(!cancelled){
        dispatch(loadRecording(fileName, message))
        setLoadSnackbarOpen(true)
    }

}

  return (
    <div>
        <Header/>
        <div className="top-graph">
          <Button 
            onClick={handleLoad} 
            size="large"
            variant="contained"
            style={{
              backgroundColor:  'var(--main-background-color)',
              fontSize: 'var(--default-text-size)',
              fontFamily: 'var(--main-font)',
            }}
          >
            <FileDownloadOutlinedIcon
              style={{
                fontSize: 'var(--default-text-size)',
              }}
            />
            Import File
          </Button>
        </div>
        <div className="be-on-right">  {recordingTimer}</div>

        <div className="new-graph">
            <LoadedDataVisual/> 
            <Visualizer/>
        </div>
 
        <div className="top-graph"><div className="key"><div class="color-block-teacher"></div><div className="change-font">Teacher</div></div></div>
        <div className="top-graph"><div className="key"><div class="color-block-student"></div><div className="change-font">Student</div></div></div>
        <SessionState/>
        
        
        
        <Snackbar
                open={loadSnackbarOpen}
                message="File Loaded!"
                autoHideDuration={2000}
                onClose={()=>setLoadSnackbarOpen(false)}
            />
    </div> 
  );
};

export default PlaySession;
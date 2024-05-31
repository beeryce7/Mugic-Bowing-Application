import * as React from 'react';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { selectRecordingData, selectRecordingStartTime } from '../../slices/recordingDataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { buildTeacherFile, buildTeacherStudentFile } from '../../utils/format';
import { loadRecording, selectLoadedType, selectTeacherData } from '../../slices/loadedDataSlice';
import { Snackbar, Menu, MenuItem, Button } from '@mui/material';

export default function BasicMenu() {

  const dispatch = useDispatch()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [loadSnackbarOpen, setLoadSnackbarOpen] = React.useState(false)

  

  const recordingData = useSelector(selectRecordingData)
  const recordingStartTime = useSelector(selectRecordingStartTime)
  const loadedType = useSelector(selectLoadedType)
  const teacherData = useSelector(selectTeacherData)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSave = () => {
    let fileString = ""

    console.log("saving file")
    
    if(loadedType == "None"){
      fileString = buildTeacherFile(recordingData, recordingStartTime);
    }
    else{ // student data contained in recording slice
      fileString = buildTeacherStudentFile(teacherData, recordingData, recordingStartTime)
    }
    window.electronAPI.saveFile(fileString)

    
    handleClose();
  }

   const handleLoad = async () => {
    const {fileName, message, cancelled} = await window.electronAPI.loadFile();
    if(!cancelled){
      dispatch(loadRecording(fileName, message))
      setLoadSnackbarOpen(true)
    }

  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      <div className="nav-item"><FormatListBulletedIcon style={{ color: 'white' }} /></div>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleSave}>Save File</MenuItem>
        <MenuItem onClick={handleLoad}>Load File</MenuItem>
        <MenuItem onClick={handleClose}>Return to Home</MenuItem>
        <MenuItem onClick={handleClose}>Quit Mugic</MenuItem>
        
      </Menu>

      <Snackbar
        open={loadSnackbarOpen}
        message="File Loaded!"
        autoHideDuration={2000}
        onClose={()=>setLoadSnackbarOpen(false)}
      />

    </div>
  );
}

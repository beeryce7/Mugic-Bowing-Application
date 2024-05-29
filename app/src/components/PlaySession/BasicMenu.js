import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import recordingDataSlice from '../../slices/recordingDataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { buildTeacherFile } from '../../utils/format';
import { loadRecording } from '../../slices/loadedDataSlice';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const dispatch = useDispatch()

  const recordingData = useSelector((state) => state.recordingData.data)
  const recordingStartTime = useSelector((state) => state.recordingData.recordingStartTime)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSave = () => {
    
    console.log("data:" + recordingData.toString())
    console.log("hi")
    window.electronAPI.saveFile(buildTeacherFile(recordingData, recordingStartTime));
    handleClose();
  }

   const handleLoad = async () => {
    const {fileName, message, cancelled} = await window.electronAPI.loadFile();
    if(!cancelled){
      dispatch(loadRecording(fileName, message))
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
    </div>
  );
}

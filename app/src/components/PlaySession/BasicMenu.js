import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import recordingDataSlice from '../../slices/recordingDataSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

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
    window.electronAPI.saveFile(buildRecordingFile(recordingData, recordingStartTime));
    handleClose();
  }
  const buildRecordingFile = (recordingData, recordingStartTime) => {
    var str = ""

    str += recordingStartTime.toString() + "\n"
    str += "Teacher"
    str += recordingData.length.toString()

    recordingData.forEach(element => {
      str += element.toString() + "\n"
    })
    return str
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
        Dashboard
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
        <MenuItem onClick={handleClose}>Save</MenuItem>
        <MenuItem onClick={handleSave}>Save As</MenuItem>
        <MenuItem onClick={handleClose}>Return to Home</MenuItem>
        <MenuItem onClick={handleClose}>Quit Mugic</MenuItem>
      </Menu>
    </div>
  );
}

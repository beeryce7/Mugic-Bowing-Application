import {React, useState} from 'react';
import CustomButton from '../../components/CustomButton';

const SaveLoad = () => {

    const [file, setFile] = useState("default")

    const saveFile = () => {

        
        window.electronAPI.saveFile("sample data")
        setFile("file saved!")
        
    }

    const loadFile = () => {

        
      
      console.log("data recieved: " + window.electronAPI.loadFile())
      setFile("file loaded!")
      
  }

    return (
        <div className="container">
          <h1>Save Test</h1>
          <p>{file}</p>
          
          <CustomButton onClick={saveFile} text="save file" ></CustomButton>
          <CustomButton onClick={loadFile} text="load file" ></CustomButton>
        </div>
      );
};

export default SaveLoad;
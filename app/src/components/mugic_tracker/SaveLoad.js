import {React, useState} from 'react';
import CustomButton from '../../components/CustomButton';

const SaveLoad = () => {

    const [file, setFile] = useState("default")

    const saveFile = () => {

        
        window.electronAPI.saveFile("sample data")
        setFile("file saved!")
        
    }
    return (
        <div className="container">
          <h1>Save Test</h1>
          <p>{file}</p>
          
          <CustomButton onClick={saveFile} text="save file" ></CustomButton>
        </div>
      );
};

export default SaveLoad;
import Home from './pages/home/Home.js';
import Settings from './pages/settings/Settings.js'
import PlaySession from './pages/PlaySession/PlaySession.js';
import './global.css';
import { HashRouter, Routes, Route } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { retrieveMugicData } from './slices/mugicDataSlice.js';

function App() {

  const dispatch = useDispatch()

  const interval = setInterval(() => dispatch(retrieveMugicData()), 1000)
  console.log(window.electronAPI.retrieveMugicData())

  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="settings" element={<Settings/>}/>
        <Route path="play" element={<PlaySession/>}/>
      </Routes>
    </HashRouter>

  );
}

export default App;
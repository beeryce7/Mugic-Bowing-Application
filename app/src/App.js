import Home from './pages/home/Home.js';
import Settings from './pages/settings/Settings.js'
import PlaySession from './pages/PlaySession/PlaySession.js';
import RecordSession from './pages/RecordSession/RecordSession.js'
import './global.css';
import { HashRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="settings" element={<Settings/>}/>
        <Route path="play" element={<PlaySession/>}/>
        <Route path="record" element={<RecordSession/>}/>
      </Routes>
    </HashRouter>

  );
}

export default App;
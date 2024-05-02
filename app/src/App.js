import Home from './pages/home/Home.js';
import Settings from './pages/settings/Settings.js'
import PlaySession from './pages/PlaySession/PlaySession.js';
import './global.css';
import { HashRouter, Routes, Route } from "react-router-dom"

function App() {
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
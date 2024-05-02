import Home from './pages/home/Home.js';
import Settings from './pages/settings/Settings.js'
import PlaySession from './pages/PlaySession/PlaySession.js';
import './global.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="settings" element={<Settings/>}/>
        <Route path="play" element={<PlaySession/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
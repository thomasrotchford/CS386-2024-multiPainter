import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home/Home';
import CreateBoardPage from './Create/CreateBoard';
import NavBar from "./NavBar/NavBar.js";
import PaintBoard from './Paint/PaintBoardUtils';
import WorkShop from "./Community/Community.js"; 
import Settings from "./Settings/Settings.js";


function App() {

  return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateBoardPage />} />
          <Route path="/community" element={<WorkShop />}/>
          <Route path="/paint" element={<PaintBoard />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </Router>
  );
}

export default App;

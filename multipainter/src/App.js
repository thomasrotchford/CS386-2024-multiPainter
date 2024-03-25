import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home/Home';
import CreateBoardPage from './Create/CreateBoard';
import NavBar from "./NavBar/NavBar.js";
import PaintBoard from './Paint/PaintBoardUtils';
import WorkShop from './WorkShop/WorkShop'; 


function App() {

  return (
    <div className='App'>
      <NavBar />
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateBoardPage />} />
        <Route path="/WorkShop" element={<WorkShop />}/>
        <Route path="/paint" element={<PaintBoard />} />
        <Route path="*" element={<Navigate to="/" />} />
        
      </Routes>
    </Router>
    </div>
  );
}


export default App;

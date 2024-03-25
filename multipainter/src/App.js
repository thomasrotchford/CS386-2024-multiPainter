import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home/Home';
import CreateBoardPage from './Create/CreateBoard';
import PaintBoard from './Paint/paintBoard.js';
import WorkShop from './WorkShop/WorkShop';
import NavBar from "./NavBar/NavBar.js";

function App() {

  return (
    <div className='App'>
      <NavBar />
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateBoardPage />} />
        <Route path="/paint" element={<PaintBoard />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/WorkShop" Component={WorkShop}/>
      </Routes>
    </Router>
    </div>
  );
}


export default App;

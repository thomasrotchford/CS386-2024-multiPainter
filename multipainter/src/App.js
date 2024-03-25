import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home/Home';
import CreateBoardPage from './Create/CreateBoard';
import PaintBoard from './Paint/paintBoard'
import WorkShop from './WorkShop/WorkShop';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateBoardPage />} />
        <Route path="/paint" element={<PaintBoard />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/WorkShop" Component={WorkShop}/>
      </Routes>
    </Router>
  );
}


export default App;

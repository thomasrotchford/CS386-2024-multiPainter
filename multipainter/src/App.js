import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import CreateBoardPage from './Create/CreateBoard';

// constants 
const BOARD_SIZE = 5;

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateBoardPage />} />
      </Routes>
    </Router>
  );
}


export default App;

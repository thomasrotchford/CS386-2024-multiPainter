import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home/Home';
import CreateBoardPage from './Create/CreateBoard';
import NavBar from "./NavBar/NavBar.js";
import PaintBoard from './Paint/PaintBoardUtils';
import SignIn from "./SignIn/SignIn.js"; 
import WorkShop from "./Community/Community.js"; 
import Profile from "./Profile/Profile.js";
import SignUp from "./SignUp/SignUp.js";


function App() {

  return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateBoardPage />} />
          <Route path="/community" element={<WorkShop />}/>
          <Route path="/paint/:id?" element={<PaintBoard />} />
          <Route path="/Signin" element={< SignIn/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </Router>
  );
}

export default App;

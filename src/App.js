import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import './App.css';
import './index.css';
import Myprofile from './components/myProfile';
import Mission from './navigationPages/missions';
import ShowRockets from './components/showRockets';
import Dragons from './components/dragons';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<ShowRockets />} />
      <Route path="/mission" element={<Mission />} />
      <Route path="/dragons" element={<Dragons />} />
      <Route path="/myProfile" element={<Myprofile />} />
    </Routes>
  </Router>
);

export default App;

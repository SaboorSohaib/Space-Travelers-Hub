import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import './App.css';
import './index.css';
import MyProfile from './components/myProfile';
import Mission from './navigationPages/missions';
import Rockets from './components/rockets';
import Dragons from './components/dragons';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/mission" element={<Mission />} />
      <Route path="/dragons" element={<Dragons />} />
      <Route path="/myProfile" element={<MyProfile />} />
    </Routes>
  </Router>
);

export default App;

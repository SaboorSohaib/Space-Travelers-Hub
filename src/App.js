import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import './App.css';
import MyProfile from './components/myProfile';
import Mission from './navigationPages/mission';
import Rockets from './components/rockets';
import Dragons from './components/dragons';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/myProfile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

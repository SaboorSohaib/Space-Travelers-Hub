import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import './App.css';
import MyProfile from './components/myProfile';
import Missoins from './components/missoins';
import Rockets from './components/rockets';
import Dragons from './components/Dragons';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missoins" element={<Missoins />} />
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/myProfile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

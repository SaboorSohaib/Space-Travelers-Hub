import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import './App.css';
import MyProfile from './components/myProfile';
import Missoins from './components/missoins';
import ShowRockets from './components/showRockets';
import Dragons from './components/dragons';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ShowRockets />} />
        <Route path="/missoins" element={<Missoins />} />
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/myProfile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

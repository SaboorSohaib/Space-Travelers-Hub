import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import './App.css';
import MyProfile from './components/myProfile';
import Missoins from './components/missoins';
import Rockets from './components/rockets';
import Dragons from './components/dragons';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missoins" element={<Missoins />} />
          <Route path="/dragons" element={<Dragons />} />
          <Route path="/myProfile" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

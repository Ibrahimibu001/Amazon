import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={
    <><Header />
    <Home/>
    </>}>
      </Route>
    </Routes>
    <Routes>
      <Route path="checkout" element={<>
      <Header/>
      <Checkout />
    </>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

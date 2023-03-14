import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/UserDashBord/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shops from './Pages/Shops/Shops';
import Foods from './Pages/Foods/Foods';
import Settings from './Pages/Settings/Settings';
import HomePage from './HomePage/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      {/* <Route path="/" element={<App />} /> */}
      <Route path="/" element={<HomePage />} />
      <Route path="/shops" element={<Shops />} />
      <Route path="/foods" element={<Foods />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

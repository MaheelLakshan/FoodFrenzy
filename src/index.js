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
import AllOrders from './Pages/ShopPages/AllOrders/AllOrders';
import Requests from './Pages/ShopPages/Requests/Requests';
import SFoods from './Pages/ShopPages/SFoods/SFoods';
import Summary from './Pages/ShopPages/Summary/Summary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      {/* <Route path="/" element={<App />} /> */}
      <Route path="/" element={<HomePage />} />

      <Route path="/buyer/home" element={<App />} />
      <Route path="/buyer/shops" element={<Shops />} />
      <Route path="/buyer/foods" element={<Foods />} />
      <Route path="/buyer/settings" element={<Settings />} />

      <Route path="/seller/allorders" element={<AllOrders />} />
      <Route path="/seller/requests" element={<Requests />} />
      <Route path="/seller/foods" element={<SFoods />} />
      <Route path="/seller/summary" element={<Summary />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

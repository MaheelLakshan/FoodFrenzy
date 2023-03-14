import React from 'react';
import './HomePage.css';
import FoodPlate from '../Assets/foodplate.png';
import HeaderHomePage from './HeaderHomepage';

function HomePage() {
  return (
    <div className="Grid">
      <div className="MainGrid">
        <HeaderHomePage />
      </div>
      <div className="slidebarBackground"></div>
      <div>
        <div className="Main">FOODFRENSY</div>
        <div className="small">Online Restaurant</div>
        <div>
          <img src={FoodPlate} alt="foodplate" className="Image" />
        </div>
      </div>
      <div>
        <div className="Board">
          <div className="BoardHeader">
            <div className="tag">Buyer</div>
            <div className="tag">Seller</div>
            <div className="tag">Owner</div>
          </div>

          <form>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

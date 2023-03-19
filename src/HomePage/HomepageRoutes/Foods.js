import { React, useState } from 'react';
import './Foods.css';
import FoodPlate from '../Assets/foodplate.png';
import HeaderFoods from './HeaderFoods';
import { useNavigate } from 'react-router-dom';

function Foods() {
  const [DifferentUsers, SetDifferentUsers] = useState('Buyer');
  const navigate = useNavigate();
  const HandlerBuyer = () => {
    SetDifferentUsers('Buyer');
  };
  const HandlerSeller = () => {
    SetDifferentUsers('Seller');
  };
  const HandlerOwner = () => {
    SetDifferentUsers('Owner');
  };

  const HandlerLogin = () => {
    switch (DifferentUsers) {
      case 'Buyer':
        navigate('/buyer/home');
        break;
      case 'Seller':
        navigate('/seller/allorders');
        break;
      case 'Owner':
        navigate('/owner/home');
        break;
      default:
        console.log('Show error not navigate check again Maheel');
        break;
    }
  };

  return (
    <div className="Grid">
      <div className="MainGrid">
        <HeaderFoods />
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
            <div className="tag" onClick={HandlerBuyer}>
              Buyer
              {DifferentUsers === 'Buyer' && <h1>.</h1>}
            </div>
            <div className="tag" onClick={HandlerSeller}>
              Seller
              {DifferentUsers === 'Seller' && <h1>.</h1>}
            </div>
            <div className="tag" onClick={HandlerOwner}>
              Owner
              {DifferentUsers === 'Owner' && <h1>.</h1>}
            </div>
          </div>
          <div className="cutomertag">
            {DifferentUsers === 'Buyer' && <h1>Foods are waiting for you</h1>}
            {DifferentUsers === 'Seller' && (
              <h1>Customers are waiting for you</h1>
            )}
            {DifferentUsers === 'Owner' && <h1>Check out the Business</h1>}
          </div>

          <form>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />

            {/* <button type="submit" onClick={HandlerLogin}>  if u wnn real submit senario go with this*/}
            <button onClick={HandlerLogin} className="buttonlogin">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Foods;

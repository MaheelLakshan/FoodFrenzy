import React from 'react';
import './UserHomePage.css';

function UserHomePage() {
  return (
    <div>
      <div className="Table-Header">
        <div className="Titles">Order Code</div>
        <div className="Titles">Shop</div>
        <div className="Titles">Category</div>
        <div className="Titles">Quantity</div>
        <div className="Titles">Status</div>
      </div>
      <div className="Table">
        <div>No</div>
        <div>Order</div>
        <div>Has</div>
        <div>Been</div>
        <div>Placed</div>
      </div>
    </div>
  );
}

export default UserHomePage;

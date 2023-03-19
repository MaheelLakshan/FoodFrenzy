import React from 'react';
import './SellerHomePage.css';

function SellerHomePage() {
  return (
    <div>
      <div className="Table-Header">
        <div className="Titles">Order Code</div>
        <div className="Titles">Time</div>
        <div className="Titles">Category</div>
        <div className="Titles">Quantity</div>
        <div className="Titles">Status</div>
      </div>
      <div className="Table">
        <div>0001</div>
        <div>11:00Pm</div>
        <div>Kottu</div>
        <div>5</div>
        <div>preaparing</div>
      </div>
      <div className="Table">
        <div>0002</div>
        <div>10:30Pm</div>
        <div>Rice</div>
        <div>2</div>
        <div>Preparing</div>
      </div>
      <div className="Table">
        <div>003</div>
        <div>9:15pm</div>
        <div>Rice</div>
        <div>5</div>
        <div>Ready</div>
      </div>
      <div className="Table">
        <div>004</div>
        <div>9:00pm</div>
        <div>Chicken</div>
        <div>3</div>
        <div>Delivery</div>
      </div>
    </div>
  );
}

export default SellerHomePage;

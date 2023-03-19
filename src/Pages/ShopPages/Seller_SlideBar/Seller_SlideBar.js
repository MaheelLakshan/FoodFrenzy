import React from 'react';
import './Seller_SlideBar.css';
import Complete from '../../../Assets/complete.png';
import Delivery from '../../../Assets/delivery.png';
import ToPrepare from '../../../Assets/toPrepare.png';

function Seller_SlideBar() {
  return (
    <div className="SlideBarGlassBackGround">
      <div className="SlideBarGlass">
        <h1 className="NoticeBoard">Notice Board</h1>
        <div className="line"></div>
        <div className="Box">
          <h2 className="Announcement">Orders Status</h2>
          <div className="line2"></div>
          <div className="notice">
            <div>
              <div className="list-item">
                <img src={Complete} alt="Complete" />
                <p>Complete</p>
                <h3>5</h3>
              </div>
              <div className="list-item">
                <img src={Delivery} alt="Deliver" />
                <p>To Deliver</p>
                <h3>3</h3>
              </div>
              <div className="list-item">
                <img src={ToPrepare} alt="toPrepare" />
                <p>To Prepare</p>
                <h3>7</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seller_SlideBar;

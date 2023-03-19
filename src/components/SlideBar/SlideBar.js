import React from 'react';
import './SlideBar.css';

function SlideBar() {
  return (
    <div className="SlideBarGlassBackGround">
      <div className="SlideBarGlass">
        <h1 className="NoticeBoard">Notice Board</h1>
        <div className="line"></div>
        <div className="Box">
          <h2 className="Announcement">Announcement</h2>
          <div className="line2"></div>

          <div className="notice">
            We are going to held a food competition in this week. those who have
            bought more during this week, will win a{' '}
            <strong>large pizza package</strong>. <br />
            <br />
            Hurry up Guys <strong> !!</strong> <br />
            <br />
            <strong>" </strong>Time has stated<strong>" </strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideBar;

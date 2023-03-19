import { React, useState } from 'react';
import './About.css';
import HeaderHomePage from '../HeaderHomepage';
import { useNavigate } from 'react-router-dom';

function About() {
  return (
    <div>
      <div className="MainGrid_s">
        <HeaderHomePage Active={`ABOUT`} />
      </div>
      <div className="back">
        This is a commercial project launch by Maheel lakshan under his web
        development module. Contact founder of this via
        maheellakshanra@gmail.com
      </div>
    </div>
  );
}

export default About;

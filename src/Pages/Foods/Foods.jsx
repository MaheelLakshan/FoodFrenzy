import React from 'react';
import './Foods.css';
import Header from '../../components/Header/Header';
import FoodList from '../../components/Component_DashBoard/UserFoods/FoodList';
import DashBoard from '../../components/DashBoard/DashBoard';
import SlideBar from '../../components/SlideBar/SlideBar';
import { SidebarData } from '../../Data';

function Foods() {
  return (
    <div className="Foods">
      <Header content={SidebarData} />
      <div className="FoodsGlass">
        <DashBoard content={FoodList} HeaderName="Available Foods" />
        <SlideBar />
      </div>
    </div>
  );
}

export default Foods;

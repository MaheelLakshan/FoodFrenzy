import React from 'react';
import './Shops.css';
import Header from '../../components/Header/Header';
import DashBoard from '../../components/DashBoard/DashBoard';
import SlideBar from '../../components/SlideBar/SlideBar';
import ShopList from '../../components/Component_DashBoard/UserShops/FoodShop';
import { SidebarData } from '../../Data';

function Shops() {
  return (
    <div className="Shops">
      <Header content={SidebarData} />
      <div className="ShopGlass">
        <DashBoard content={ShopList} HeaderName="Available Shops" />
        <SlideBar />
      </div>
    </div>
  );
}

export default Shops;

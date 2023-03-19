import './AllOrders.css';
import DashBoard from '../../../components/DashBoard/DashBoard';
import Header from '../../../components/Header/Header';
import { ShopHeaderData } from '../../../Data';
import SellerHomePage from '../../../components/Component_DashBoard/SellerHomePage/SellerHomePage';
import Seller_SlideBar from '../Seller_SlideBar/Seller_SlideBar';

function AllOrders() {
  return (
    <div className="AllOrders">
      <Header content={ShopHeaderData} />

      <div className="AllOrdersGlass">
        <DashBoard content={SellerHomePage} HeaderName="Orders Summary" />
        <Seller_SlideBar />
      </div>
    </div>
  );
}

export default AllOrders;

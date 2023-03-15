import './AllOrders.css';
import DashBoard from '../../../components/DashBoard/DashBoard';
import Header from '../../../components/Header/Header';
import { ShopHeaderData } from '../../../Data';

function Shop() {
  return (
    <div className="AllOrders">
      <Header content={ShopHeaderData} />

      <div className="AllOrdersGlass">
        {/* <DashBoard content={UserHomePage} HeaderName="Placed Orders" /> */}
        {/* <SlideBar /> */}
      </div>
    </div>
  );
}

export default Shop;

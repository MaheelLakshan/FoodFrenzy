import './SFoods.css';
import DashBoard from '../../../components/DashBoard/DashBoard';
import Header from '../../../components/Header/Header';
import { ShopHeaderData } from '../../../Data';
import Seller_SlideBar from '../Seller_SlideBar/Seller_SlideBar';
import Seller_foods from '../../../components/Component_DashBoard/Seller_foods/Seller_foods';

function SFoods() {
  return (
    <div className="SFoods">
      <Header content={ShopHeaderData} />

      <div className="SFoodsGlass">
        <DashBoard content={Seller_foods} HeaderName="Available foods So Far" />
        <Seller_SlideBar />
      </div>
    </div>
  );
}

export default SFoods;

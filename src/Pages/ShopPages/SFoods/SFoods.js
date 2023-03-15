import './SFoods.css';
import DashBoard from '../../../components/DashBoard/DashBoard';
import Header from '../../../components/Header/Header';
import { ShopHeaderData } from '../../../Data';

function SFoods() {
  return (
    <div className="SFoods">
      <Header content={ShopHeaderData} />

      <div className="SFoodsGlass">
        {/* <DashBoard content={UserHomePage} HeaderName="Placed Orders" /> */}
        {/* <SlideBar /> */}
      </div>
    </div>
  );
}

export default SFoods;

import './Financial.css';
import DashBoard from '../../../components/DashBoard/DashBoard';
import Header from '../../../components/Header/Header';
import { ShopHeaderData } from '../../../Data';

function Financial() {
  return (
    <div className="Financial">
      <Header content={ShopHeaderData} />

      <div className="FinancialGlass">
        {/* <DashBoard content={UserHomePage} HeaderName="Placed Orders" /> */}
        {/* <SlideBar /> */}
      </div>
    </div>
  );
}

export default Financial;

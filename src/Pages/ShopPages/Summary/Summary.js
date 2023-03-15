import './Summary.css';
import DashBoard from '../../../components/DashBoard/DashBoard';
import Header from '../../../components/Header/Header';
import { ShopHeaderData } from '../../../Data';

function Summary() {
  return (
    <div className="Summary">
      <Header content={ShopHeaderData} />

      <div className="SummaryGlass">
        {/* <DashBoard content={UserHomePage} HeaderName="Placed Orders" /> */}
        {/* <SlideBar /> */}
      </div>
    </div>
  );
}

export default Summary;

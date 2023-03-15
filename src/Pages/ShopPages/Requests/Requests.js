import './Requests.css';
import DashBoard from '../../../components/DashBoard/DashBoard';
import Header from '../../../components/Header/Header';
import { ShopHeaderData } from '../../../Data';

function Requests() {
  return (
    <div className="Requests">
      <Header content={ShopHeaderData} />

      <div className="RequestsGlass">
        {/* <DashBoard content={UserHomePage} HeaderName="Placed Orders" /> */}
        {/* <SlideBar /> */}
      </div>
    </div>
  );
}

export default Requests;

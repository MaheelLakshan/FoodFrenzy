import './Requests.css';
import DashBoard from '../../../components/DashBoard/DashBoard';
import Header from '../../../components/Header/Header';
import { ShopHeaderData } from '../../../Data';
import Seller_requests from '../../../components/Component_DashBoard/Seller_requests/Seller_requests';
import Seller_SlideBar from '../Seller_SlideBar/Seller_SlideBar';

function Requests() {
  return (
    <div className="Requests">
      <Header content={ShopHeaderData} />

      <div className="RequestsGlass">
        <DashBoard content={Seller_requests} HeaderName="Requested Orderes" />
        <Seller_SlideBar />
      </div>
    </div>
  );
}

export default Requests;

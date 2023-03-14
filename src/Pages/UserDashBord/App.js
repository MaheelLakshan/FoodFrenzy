import './App.css';
import SlideBar from '../../components/SlideBar/SlideBar';
import DashBoard from '../../components/DashBoard/DashBoard';
import Header from '../../components/Header/Header';
import UserHomePage from '../../components/Component_DashBoard/UserHomePage/UserHomePage';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="AppGlass">
        <DashBoard content={UserHomePage} HeaderName="Placed Orders" />
        <SlideBar />
      </div>
    </div>
  );
}

export default App;

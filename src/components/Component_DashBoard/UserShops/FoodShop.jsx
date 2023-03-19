import './FoodShop.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Showfoods from './Showfoods';

const ShopItems = () => {
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchShops() {
      try {
        const { data } = await axios.get(
          'http://localhost:5000/shops/getallshops'
        );
        setShops(data);
        console.log(data);
      } catch (error) {
        setError(true);
        console.log(error);
      }
      setLoading(false);
    }
    fetchShops();
  }, []);

  return { shops, loading, error };
};

const ShopCard = ({ shop }) => {
  return (
    <div className="card">
      <img src={shop.image} alt={shop.name} />
      <h3 style={{ color: 'white' }}>{shop.name}</h3>
      <p>{shop.description}</p>
      <p>{shop.phone}</p>
      <button>Select</button>
    </div>
  );
};
// onClick={showFoods(shop.name)}
// const showFoods = (name) => {
//   <Showfoods />;
// };

const ShopList = () => {
  const { shops, loading, error } = ShopItems();

  if (loading) {
    return <div style={{ color: 'white' }}>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching shops.</div>;
  }

  return (
    <div className="shop-list">
      {shops.map((shop) => (
        <ShopCard key={shop.id} shop={shop} />
      ))}
    </div>
  );
};

export default ShopList;

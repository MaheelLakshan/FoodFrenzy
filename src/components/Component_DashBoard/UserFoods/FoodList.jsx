import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FoodList.css';

const FoodItems = () => {
  const [foods, setfoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchFoods() {
      try {
        const { data } = await axios.get(
          'http://localhost:5000/foods/getallfoods'
        );
        setfoods(data);
        console.log(data);
      } catch (error) {
        setError(true);
        console.log(error);
      }
      setLoading(false);
    }
    fetchFoods();
  }, []);

  return { foods, loading, error };
};

const FoodCard = ({ food }) => {
  return (
    <div className="card-food">
      <img src={food.image} alt={food.name} />
      <h3 style={{ color: 'green' }}>{food.name}</h3>
      <p>{food.description}</p>
      <p style={{ color: 'white', fontSize: '16px' }}>
        Rs. {food.price.toFixed(2)}
      </p>
      <button>Add to Cart</button>
    </div>
  );
};

const FoodList = () => {
  const { foods, loading, error } = FoodItems();

  if (loading) {
    return <div style={{ color: 'white' }}>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching foods.</div>;
  }

  return (
    <div className="food-list">
      {foods.map((food) => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
};

export default FoodList;

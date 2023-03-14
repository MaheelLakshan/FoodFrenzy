import React from 'react';
import './FoodList.css';

const foodItems = [
  {
    id: 1,
    name: 'Hamburger',
    description:
      'A classic burger with beef patty, lettuce, tomato, and pickles',
    price: 10.99,
    image: 'https://images.unsplash.com/photo-1602740668618-df0382e54e87',
  },
  {
    id: 2,
    name: 'Pizza',
    description:
      'A delicious pizza with tomato sauce, mozzarella cheese, and pepperoni',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1529458731660-67d3e7fbabe5',
  },
  {
    id: 3,
    name: 'Taco',
    description:
      'A crunchy taco with seasoned ground beef, cheese, lettuce, and tomato',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1589802949917-51a96b4e7c44',
  },
];

const FoodCard = ({ food }) => {
  return (
    <div className="card">
      <img src={food.image} alt={food.name} />
      <h3>{food.name}</h3>
      <p>{food.description}</p>
      <p>${food.price.toFixed(2)}</p>
      <button>Add to Cart</button>
    </div>
  );
};

const FoodList = () => {
  return (
    <div className="food-list">
      {foodItems.map((food) => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
};

export default FoodList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Seller_foods.css';

const FoodItemsForAShop = () => {
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
  async function handleDelete(name) {
    try {
      // console.log(id);
      // const { data } = await axios.get('http://localhost:5000/foods/:name');
      const result = await axios.delete(`http://localhost:5000/foods/${name}`);
      window.location.reload(); // Reload the page after successful deletion
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="card-food">
      <img src={food.image} alt={food.name} />
      <h3 style={{ color: 'green' }}>{food.name}</h3>
      <p>{food.description}</p>
      <p style={{ color: 'white', fontSize: '16px' }}>
        Rs. {food.price.toFixed(2)}
      </p>
      <button onClick={() => handleDelete(food.name)}>Delete</button>
    </div>
  );
};

const Seller_foods = () => {
  const [showModal, setShowModal] = useState(false);
  const [id, setid] = useState(5);
  const [name, setname] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState();

  const { foods, loading, error } = FoodItemsForAShop();

  if (loading) {
    return <div style={{ color: 'white' }}>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching foods.</div>;
  }

  async function handleSubmit() {
    const newFood = {
      id,
      name,
      description,
      image,
      price,
    };

    try {
      const result = await (
        await axios.post('http://localhost:5000/foods/addfood', newFood)
      ).data;
      console.log(result);
    } catch (error) {}
  }

  return (
    <div>
      <div className="addfoods">
        <button onClick={() => setShowModal(true)}>Click add more foods</button>
      </div>

      <div className="food-list">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Add Food</h2>
              <button onClick={() => setShowModal(false)}>Close</button>
            </div>
            <form className="alliging" id="myForm">
              <label>
                Food Name: <br />
                <input
                  className="input-class"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                />
              </label>
              <label>
                Food Description: <br />
                <input
                  className="input-class"
                  type="text"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </label>
              <label>
                Food Image: <br />
                <input
                  className="input-class"
                  // type="file"
                  // accept="image/*"
                  type="text"
                  value={image}
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                />
              </label>
              <label>
                Food Price: <br />
                <input
                  className="input-class"
                  type="number"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </label>
              <button onClick={handleSubmit}>Add Food</button> <br />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Seller_foods;

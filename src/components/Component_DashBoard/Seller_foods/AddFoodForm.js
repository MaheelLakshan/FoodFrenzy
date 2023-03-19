// import React, { useState } from 'react';
// import axios from 'axios';
// import './Seller_foods.css';

// const AddFoodForm = ({ showModal, setShowModal, shopId }) => {
//   const [foodData, setFoodData] = useState({
//     name: '',
//     description: '',
//     image: '',
//     price: '',
//   });

//   const handleChange = (e) => {
//     setFoodData({ ...foodData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(`http://localhost:5000/foods/${shopId}`, foodData);
//       setShowModal(false);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <div>
//           <h2>Add Food</h2>
//           <button onClick={() => setShowModal(false)}>Close</button>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={foodData.name}
//             onChange={handleChange}
//           />
//           <label htmlFor="description">Description:</label>
//           <textarea
//             id="description"
//             name="description"
//             value={foodData.description}
//             onChange={handleChange}
//           ></textarea>
//           <label htmlFor="image">Image URL:</label>
//           <input
//             type="text"
//             id="image"
//             name="image"
//             value={foodData.image}
//             onChange={handleChange}
//           />
//           <label htmlFor="price">Price:</label>
//           <input
//             type="text"
//             id="price"
//             name="price"
//             value={foodData.price}
//             onChange={handleChange}
//           />
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddFoodForm;

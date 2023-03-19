// import React, { useState } from 'react';
// import axios from 'axios';

// const Showfoods = ({ shop }) => {
//   const [foods, setFoods] = useState([]);
//   const [showPopup, setShowPopup] = useState(false);

//   const handleSelect = async () => {
//     try {
//       const { data } = await axios.get(
//         `http://localhost:5000/foods/${shop.name}`
//       );
//       setFoods(data);
//       setShowPopup(true);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleClose = () => {
//     setShowPopup(false);
//   };

//   return (
//     <div className="card">
//       <img src={shop.image} alt={shop.name} />
//       <h3 style={{ color: 'white' }}>{shop.name}</h3>
//       <p>{shop.description}</p>
//       <p>{shop.phone}</p>
//       <button onClick={handleSelect}>Select</button>
//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <h2>{shop.name} Foods</h2>
//             <button onClick={handleClose}>Close</button>
//             <ul>
//               {foods.map((food) => (
//                 <li key={food.id}>{food.name}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Showfoods;

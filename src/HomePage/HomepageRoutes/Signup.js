import { React, useState } from 'react';

import HeaderHomePage from '../HeaderHomepage';
import { useNavigate } from 'react-router-dom';

// function Signup() {
//   return (
//     <div className="Grid">
//       <div className="MainGrid">
//         <HeaderHomePage Active={`SIGNUP`} />
//       </div>

//       <form>
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" name="email" required />

//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" name="password" required />

//         {/* <button type="submit" onClick={HandlerLogin}>  if u wnn real submit senario go with this*/}
//         <button className="buttonlogin">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Signup;

import './Signup.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Role:', role);
    // Send form data to server or perform other actions here
  };

  return (
    <div>
      <div className="MainGrid_s">
        <HeaderHomePage Active={`SIGNUP`} />
      </div>
      <div>
        <div className="signup-container">
          <form onSubmit={handleSubmit} className="signup-form">
            <h1 className="signup-heading">Fill The Form</h1>
            <div className="signup-input-container">
              <label className="signup-label">Username</label>
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                className="signup-input"
              />
            </div>
            <div className="signup-input-container">
              <label className="signup-label">Email</label>
              <input type="text" className="signup-input" />
            </div>

            <div className="signup-input-container">
              <label className="signup-label">Password</label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className="signup-input"
              />
            </div>
            <div className="signup-input-container">
              <label className="signup-label">Telephone</label>
              <input type="text" className="signup-input" />
            </div>
            <div className="signup-input-container">
              <label className="signup-label">Role</label>
              <select
                value={role}
                onChange={handleRoleChange}
                className="signup-select"
              >
                <option value="customer">Customer</option>
                <option value="shop-owner">Shop Owner</option>
              </select>
            </div>
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;

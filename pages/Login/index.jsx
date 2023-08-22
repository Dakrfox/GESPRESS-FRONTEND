import React, { useState } from 'react';
import axios from 'axios';

export default function LoginPage() {
  const loginURL = 'http://localhost:8000/api/auth/Login';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => { 
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(loginURL, {
        email: username,
        password: password,
      });

      console.log('Login successful');
      console.log('Response:', response.data);

      window.location.href = '';
    } catch (error) {
      setError('Verify your credentials CV');
      console.log('Error:', error);
    }
  };

  return (
    <div className="bg-blue-300 h-screen flex items-center justify-center">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-68 h-96">
        <div className="login-container">
          <h1 className="text-black flex items-center justify-center ">Login</h1>
          <br />
          <div>
            <label className="text-#939C9E" htmlFor="username">
              Email Address
            </label>
            <br />
            <input
              type="text"
              placeholder="example@example.com"
              className="input input-bordered w-full max-w-xs bg-white text-black focus:bg-white hover:border-blue-500"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <label className="text-#939C9E" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              placeholder="***********"
              className="input input-bordered w-full max-w-xs bg-white text-black  focus:bg-white hover:border-blue-500 "
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <br />
          <a href="" className="text-blue-500 text-xs flex items-center justify-end ">
            Forgot your password?
          </a>
          <br />
          <button
            className="btn bg-blue-400 w-98 w-full"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

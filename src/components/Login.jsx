/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('http://localhost:5000/api/login', { // Replace with your backend URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.ok) {
            console.log('Login successful:', data);
            // Handle successful login here (e.g., redirect, store token)
        } else {
            console.log('Login failed:', data.message);
            // Handle errors (e.g., show error message)
        }
    } catch (error) {
        console.error('Login error:', error);
        // Handle network errors
    }

    // Reset fields after submission
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? Sign up</p>
      </div>
    </div>
  );
}

export default Login;

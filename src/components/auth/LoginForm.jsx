import React, { useState, useContext } from 'react';
import { AuthContext } from '../../App';

const LoginForm = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      // Simulate login
      setIsAuthenticated(true);
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-lg mb-6 text-center text-gray-800">Login</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            className="w-full p-2 border rounded"
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

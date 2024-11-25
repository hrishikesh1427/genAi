// src/components/auth/RegistrationForm.jsx
import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
    } else if (formData.email && formData.password) {
      // Simulate registration
      alert('Registration successful');
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-lg mb-6 text-center text-gray-800">Register</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          value={formData.username}
          onChange={(e) => setFormData({...formData, username: e.target.value})}
          className="w-full p-2 border rounded mb-4"
        />
        <input
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
          className="w-full p-2 border rounded mb-4"
        />
        <input
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
          className="w-full p-2 border rounded mb-4"
        />
        <input
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full p-2 border rounded mb-4"
        />
        <input
          placeholder="Password"
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          className="w-full p-2 border rounded mb-4"
        />
        <input
          placeholder="Confirm Password"
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
          className="w-full p-2 border rounded mb-4"
        />
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
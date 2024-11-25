// src/components/auth/AuthPage.jsx
import React from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

const AuthPage = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto bg-slate-100 rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">Welcome Back!</h2>
            <LoginForm />
          </div>
          <div className="p-8 bg-white">
            <h2 className="text-2xl font-bold text-center text-green-800 mb-6">Join Us!</h2>
            <RegistrationForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
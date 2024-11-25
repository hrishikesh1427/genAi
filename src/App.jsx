// src/App.jsx
import React, { useState, createContext } from 'react';
import AuthPage from './components/auth/AuthPage';
import MainPage from './components/main/MainPage';

// Create a context for authentication
export const AuthContext = createContext();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <div className="min-h-screen">
        {isAuthenticated ? <MainPage /> : <AuthPage />}
      </div>
    </AuthContext.Provider>
  );
};

export default App;

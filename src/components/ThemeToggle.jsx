import React, { useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="fixed top-4 right-4 p-2 bg-gray-200 dark:bg-gray-800 rounded-full shadow-md"
    >
      {isDarkMode ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle; 
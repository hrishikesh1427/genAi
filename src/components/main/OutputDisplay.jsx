// src/components/main/OutputDisplay.jsx
import React from 'react';

const OutputDisplay = () => {
  const handleDownload = () => {
    // Implement download functionality
    console.log('Download clicked');
  };

  return (
    <div className="h-full bg-white p-6 rounded-lg shadow-md relative">
      <button
        onClick={handleDownload}
        className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Download
      </button>
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500 text-lg">Output displayed here</p>
      </div>
    </div>
  );
};

export default OutputDisplay;
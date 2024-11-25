// src/components/main/MainPage.jsx
import React from 'react';
import InputForm from './InputForm';
import OutputDisplay from './OutputDisplay';
import ThemeToggle from '../ThemeToggle';

const MainPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-8 flex flex-col items-center justify-center">
      <ThemeToggle />
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 w-full">
        <div className="w-full md:w-1/3 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700">
          <InputForm />
        </div>
        <div className="w-full md:w-2/3 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700">
          <OutputDisplay />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
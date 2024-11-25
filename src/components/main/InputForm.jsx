// src/components/main/InputForm.jsx
import React, { useState } from 'react';

const InputForm = () => {
  const [formData, setFormData] = useState({
    model: '',
    language: '',
    isExisting: false,
    projectPath: '',
    selectedFiles: [],
    prompt: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <div className="h-full bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Model</label>
          <select
            value={formData.model}
            onChange={(e) => setFormData({...formData, model: e.target.value})}
            className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-gray-300"
          >
            <option value="">Select Model</option>
            <option value="model1">Model 1</option>
            <option value="model2">Model 2</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Language</label>
          <select
            value={formData.language}
            onChange={(e) => setFormData({...formData, language: e.target.value})}
            className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-gray-300"
          >
            <option value="">Select Language</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Is existing project?</label>
          <div className="flex space-x-2">
            <button
              type="button"
              className={`px-3 py-1 rounded-md ${formData.isExisting ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-slate-700 dark:text-gray-300'}`}
              onClick={() => setFormData({...formData, isExisting: true})}
            >
              Yes
            </button>
            <button
              type="button"
              className={`px-3 py-1 rounded-md ${!formData.isExisting ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-slate-700 dark:text-gray-300'}`}
              onClick={() => setFormData({...formData, isExisting: false})}
            >
              No
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Project Path</label>
          <input
            type="text"
            placeholder="Enter project path"
            className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-gray-300"
            value={formData.projectPath}
            onChange={(e) => setFormData({...formData, projectPath: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Select Files</label>
          <input
            type="file"
            multiple
            className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-gray-300"
            onChange={(e) => setFormData({...formData, selectedFiles: Array.from(e.target.files)})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Prompt</label>
          <textarea
            placeholder="Enter your prompt"
            className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500 h-24 dark:bg-slate-700 dark:text-gray-300"
            value={formData.prompt}
            onChange={(e) => setFormData({...formData, prompt: e.target.value})}
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputForm;
import React from 'react';
import { ThemeProvider } from '@shadcn/ui'; // Adjust this import based on Shadcn UI's theming system

const Provider = ({ children }) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};

export default Provider; 
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Router from './routes/router';
import { BeachDataProvider } from './context/beachDataContext';

function App() {
  return (
    <BeachDataProvider>
      <RouterProvider router={Router} />
    </BeachDataProvider>
  );
}

export default App;
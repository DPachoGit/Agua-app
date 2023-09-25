
import './App.css'
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Router from  './routes/router';
import { BeachDataProvider } from './context/beachDataContext';
import LoggedInContext from "./context/loggedInContext";
import { useState } from "react";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    
    <BeachDataProviderLoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            <LoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>

        <RouterProvider router={Router} />
        </LoggedInContext.Provider>

    </BeachDataProviderLoggedInContext.Provider>
  );
}


export default App;

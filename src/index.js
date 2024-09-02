import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import{createBrowserRouter,RouterProvider }from "react-router-dom"
import Home from './views/Home/Home';
import Add from './views/Add/Add';
import Show from './views/Show/Show';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router =createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/add",
    element:<Add/>
    },
    {
      path:"/show",
      element:<Show/>
    }
   
])

root.render(
  <h1>Quick Note</h1>
);


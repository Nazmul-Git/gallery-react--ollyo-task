/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Gallery from './Components/Gallery.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Gallery></Gallery>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

     <RouterProvider router={router}></RouterProvider>

)

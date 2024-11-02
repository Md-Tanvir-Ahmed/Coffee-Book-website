import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";

const routes = createBrowserRouter([
    {
      path:'/',
      element:<MainLayout></MainLayout>,
      children:[
        {
            path: '/',
            element:<Home></Home>,
            children: [],
        },
        {
            path: '/coffees',
            element: <Coffees></Coffees>,

        },
        {
            path:'/dashboard',
            element:<Dashboard></Dashboard>,
        },
      ],
    },
    
  ])

  export default routes;
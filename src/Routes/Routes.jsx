import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Menu from "../Page/Menu/Menu/Menu";
import Order from "../Page/Order/Order/Order";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layout/DashBoard";
import Cart from "../Page/DashBoard/Cart/Cart";
import AllUsers from "../Page/DashBoard/AllUsers/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
         path:'menu',
         element: <Menu></Menu>
        },
        {
          path: 'order/:category',
          element: <Order></Order>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        }
        
    ]
  },
  {
    path:'dashboard',
    element:<PrivateRoute> <DashBoard></DashBoard></PrivateRoute>,
    children:[
      {
        path:'cart',
        element: <Cart></Cart>
      },
      // admin routes 
      {
        path:'users',
        element: <AllUsers></AllUsers>
      }
    ]
  }
  
]);


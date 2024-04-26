import React, { useEffect, useState } from "react";
import { CardTool } from "./Components/CardTool";
import {
  Outlet,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
} from "react-router-dom";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Home } from "./Pages/Home";
import { MyIp } from "./Pages/MyIp";



const App = () => {

  const Layout = () => {
    return (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  };


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path:"/miip",
          element: <MyIp/>
        }
       
      ],
    },
  ]);
  

  return (
    <div className="h-screen">
      <RouterProvider router ={router} />
    </div>
  );
};

export default App;

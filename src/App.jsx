import React, { useEffect, useState, createContext  } from "react";
import axios from "axios";
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


export const DataContext = createContext();


const App = () => {
  
  const Layout = () => {
    const [publicIpAddress, setPublicIpAddress] = useState(null);
    const [nameprovider, setNameprovider] = useState(null);
    const [countryprovider, setcountryProvider] = useState(null);
    const [dataApi, setDataApi] = useState(null)
    


    const fetchPublicIP = async () => {
      try {
        const response = await axios.get("http://ip-api.com/json/?fields=61439");
        /* console.log(response.data); */
        setNameprovider(response.data.isp)
        setPublicIpAddress(response.data.query)
        setcountryProvider(response.data.country)
        /* setDataApi(response.data); */
      } catch (error) {
        console.error("Error fetching public IP:", error);
      }
    };
  
    useEffect(() => {
      fetchPublicIP(); //Ejecuta la funcion
    }, []);

    return (
      <DataContext.Provider value = {{dataApi, publicIpAddress, nameprovider, countryprovider}}>
        <Header />
        <Outlet />
        <Footer />
      </DataContext.Provider>
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

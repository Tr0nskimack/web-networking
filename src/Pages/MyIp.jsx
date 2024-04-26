import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from '../App';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";

export const MyIp = () => {
  const { publicIpAddress, dataApi, nameprovider, countryprovider } = useContext(DataContext);
  /* console.log(dataApi) */
  const dataConexion = [
    { proveedor: "Network", valor: {} },
    { ciudad: "Network", valor: "#" },
    { pais: "Network", valor: "#" },
    { isp: "Network", valor: "#" },
    { longitud: "Network", valor: "#" },
    { latitud: "Network", valor: "#" },
    { estado: "Network", valor: "#" },
    { ciudad: "Network", valor: "#" },
    { zona_Horaria: "Network", valor: "#" },
  ]
  return (
    <div className="min-h-screen bg-fondo">
      <Helmet>
        <meta name="description" content="My Ip Details | NetworkToolKit.com" />
        <meta name="rating" content="General" />
        <link rel="canonical" href="https://NetworkToolKit.vercel.app/" />
      </Helmet>
      <div className=" pt-20 flex justify-center ">
        <div className="w-[1200px] h-[600px] bg-white p-3 rounded-2xl shadow-green-500 shadow-sm">
        <header className='flex items-center gap-2 '>
            <Link to={"/"}><FiArrowLeft size={28} className='text-gray-200'/></Link>
          
            <h1 className="text-3xl font-bold py-2">My IP Detalles</h1>
          </header>
            <hr />
          {/* content */}
          <div className="mt-10 mx-10 text-center">
            
              <div className="grid grid-cols-3 gap-5">
                
                  
                  <div>
                    <p>Direccion Ip: {publicIpAddress} </p>
                  </div>
                  <div>
                    <p>Nombre de Proveedor: {nameprovider}</p>
                  </div>
                  <div>
                    <p>Pais: {countryprovider}</p>
                  </div>
                  
                
                
                
                
                
                


              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

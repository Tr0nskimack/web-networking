import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from '../App';
import { Helmet } from "react-helmet";


export const MyIp = () => {
  const dataApi = useContext(DataContext);
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
          <header>
            <h1 className="text-3xl font-bold py-2">My Ip</h1>
            <hr />
          </header>
          {/* content */}
          <div className="mt-10 mx-10">
            <div>
              <div className="grid grid-cols-3 gap-5">
                <div>
                  {Array.isArray(dataApi) && data.length > 0 ? (
                    <ul>
                      {dataApi.map((item) => (
                        <li key={item.id}>{item.isp}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>No hay datos disponibles</p>
                  )}
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

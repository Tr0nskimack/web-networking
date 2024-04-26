import React from "react";
import { Helmet } from "react-helmet";

export const MyIp = () => {
  const dataConexion = [
    { proveedor: "Network", valor: "#" },
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
      <div className="pl-20 pt-20 flex justify-center ">
        <div className="w-[1200px] h-[600px] bg-white p-3 rounded-2xl shadow-green-500 shadow-sm">
          <header>
            <h1 className="text-3xl font-bold py-2">My Ip</h1>
            <hr />
          </header>
          {/* content */}
          <div className="mt-10 mx-10">
            <div>
              <div className="grid grid-cols-3 gap-5">

                {
                  dataConexion.map((conexion) => {
                    return(
                      <div>
                        <label htmlFor="">Proveedor: {conexion.proveedor}</label>
                        <span>Tu dirección IP es:</span>

                      </div>

                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

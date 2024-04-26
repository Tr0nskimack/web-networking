import React, { useEffect, useState } from "react";
import axios from "axios";
import { TbNetwork } from "react-icons/tb";



export const Header = () => {
  const [publicIpAddress, setPublicIpAddress] = useState(null);
  const [nameprovider, setNameprovider] = useState(null);
  const [countryprovider, setcountryProvider] = useState(null);


  const fetchPublicIP = async () => {
    try {
      const response = await axios.get("http://ip-api.com/json/?fields=61439");
      console.log(response.data);
      setPublicIpAddress(response.data.query);
      setNameprovider(response.data.isp);
      setcountryProvider(response.data.country);
    } catch (error) {
      console.error("Error fetching public IP:", error);
    }
  };

  useEffect(() => {
    fetchPublicIP(); //Ejecuta la funcion
  }, []);



  return (
    <div>
       

      <div className="bg-negro h-[300px] flex flex-col shadow-green-500 shadow-sm">
        <header className="pl-20 pt-20 ">
          <div className="flex items-center gap-2">
            <TbNetwork color="green" size={36} />
            <h1 className="text-letraG text-3xl">NetworkToolKit.com</h1>
          </div>

          <p className="text-letraP w-[800px] mt-5 text-[14px]">
            Aqui encontrarás diversas utilidades y recursos diseñados para
            facilitar la gestión y optimización de redes informáticas. Estas
            herramientas abarcan desde programas de monitoreo y diagnóstico de
            red hasta aplicaciones para la configuración y seguridad de equipos
            interconectados.
          </p>
        </header>
        <div className="flex justify-around items-end px-5 mt-14">
          <span className="text-letraP font-bold text-[11px] ">
            Pais: {countryprovider}
          </span>
          <h1 className="text-letraG text-4xl">Tu ip es: {publicIpAddress}</h1>
          <span className="text-letraP font-bold text-[11px] ">
            ISP Proveedor: {nameprovider}
          </span>
        </div>
      </div>
        


    </div>
  )
}

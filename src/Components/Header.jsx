import React, { useContext, useState, useEffect } from 'react';
import { TbNetwork } from "react-icons/tb";
import { DataContext } from '../App';
import { Link } from 'react-router-dom';





export const Header = () => {
  const { publicIpAddress, dataApi, nameprovider, countryprovider } = useContext(DataContext);
  /* console.log(dataApi) */



  return (
    <div>


      <div className="bg-negro h-[300px] flex flex-col shadow-green-500 shadow-sm">
        <header className="pl-20 pt-20 ">
          <div >
            <Link className="flex items-center gap-2" to={"/"}>
              <TbNetwork color="green" size={36} />
              <h1 className="text-letraG text-3xl">NetworkToolKit.com</h1>
            </Link>
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

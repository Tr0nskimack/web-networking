import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TbNetwork } from "react-icons/tb";
import { CardTool } from './Components/CardTool'

const App = () => {
  const [publicIpAddress, setPublicIpAddress] = useState(null);
  const [nameprovider, setNameprovider] = useState(null)
  const [countryprovider, setcountryProvider] = useState(null)
  const utilidades = [
    {
      nombre: "M Ip",
      categoria: "Redes",
      url: "#"
    },
    {
      nombre: "Mac Vendor",
      categoria: "Redes",
      url: "#"
    },
    {
      nombre: "Calculadora de Ip",
      categoria: "Redes",
      url: "#"
    },
    {
      nombre: "Subneteo de Mascara",
      categoria: "Redes",
      url: "#"
    },
    {
      nombre: "Tracert Ip",
      categoria: "Redes",
      url: "#"
    },
    {
      nombre: "Ip Scan",
      categoria: "Redes",
      url: "#"
    },
    {
      nombre: "Convertidor de Mac",
      categoria: "Redes",
      url: "#"
    },
    {
      nombre: "Red X",
      categoria: "Redes",
      url: "#"
    },



  ]

  const fetchPublicIP = async () => {
    try {
      const response = await axios.get('http://ip-api.com/json/?fields=61439');
      setPublicIpAddress(response.data.query);
      setNameprovider(response.data.isp);
      setcountryProvider(response.data.country);

    } catch (error) {
      console.error('Error fetching public IP:', error);
    }
  };

  useEffect(() => {
    fetchPublicIP(); //Ejecuta la funcion

  }, [])

  return (
    <div className='min-h-screen bg-fondo'>
      {/* div header */}
      <div className='bg-negro h-[300px] flex flex-col shadow-green-500 shadow-sm'>
        <header className='pl-20 pt-20 '>
          <div className='flex items-center gap-2'>
            <TbNetwork color='green' size={36} />
            <h1 className='text-letraG text-3xl'>NetworkToolKit.com</h1>
          </div>

          <p className='text-letraP w-[800px] mt-5 text-[14px]'>Aqui encontrarás diversas utilidades y recursos diseñados para facilitar la gestión y optimización de redes informáticas. Estas herramientas abarcan desde programas de monitoreo y diagnóstico de red hasta aplicaciones para la configuración y seguridad de equipos interconectados.</p>

          
        </header>
          <div className='flex justify-around items-end px-5 mt-14'>
            <span className='text-letraP font-bold text-[11px] '>Pais: {countryprovider}</span>
            <h1 className='text-letraG text-4xl'>Tu ip es: {publicIpAddress}</h1>
            <span className='text-letraP font-bold text-[11px] '>ISP Proveedor: {nameprovider}</span>
          </div>
      </div>

      <div className='pl-20 pt-20'>
        <div>
          <h1 className='text-2xl font-semibold'>Herramientas</h1>
        </div>
        <div className='mt-3'>
          <div className='grid grid-cols-4 gap-4'>
            {
              utilidades.map((utilidad) => {
                return (
                  <CardTool key={utilidad.nombre} utilidad={utilidad} />

                )
              })
            }

          </div>

        </div>
      </div>





    </div >
  )
}

export default App
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CardTool } from './Components/CardTool'

const App = () => {
  const [publicIpAddress, setPublicIpAddress] = useState(null);
  const [nameprovider, setNameprovider] = useState(null)
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
      nombre: "Ping",
      categoria: "Redes",
      url: "#"
    },
    {
      nombre: "Ping",
      categoria: "Redes",
      url: "#"
    },
    {
      nombre: "Ping",
      categoria: "Redes",
      url: "#"
    },



  ]

  const fetchPublicIP = async () => {
    try {
      const response = await axios.get('http://ip-api.com/json/?fields=61439');
      setPublicIpAddress(response.data.query);
      setNameprovider(response.data.isp);

    } catch (error) {
      console.error('Error fetching public IP:', error);
    }
  };

  useEffect(() => {
    fetchPublicIP(); //Ejecuta la funcion

  }, [])

  return (
    <div className='min-h-screen bg-fondo'>
      <div>
        <header className='bg-negro h-[300px] pl-20 pt-20 flex flex-col'>
          <h1 className='text-letraG text-3xl '>Help Center</h1>
          <p className='text-letraP w-[800px] mt-5 text-[14px]'>Aqui encontrarás diversas utilidades y recursos diseñados para facilitar la gestión y optimización de redes informáticas. Estas herramientas abarcan desde programas de monitoreo y diagnóstico de red hasta aplicaciones para la configuración y seguridad de equipos interconectados.</p>

          {/* ip del cliente */}
          <div className='mt-5 flex justify-center items-center '>
            <h1 className='text-letraG text-4xl'>Tu ip es: {publicIpAddress}</h1>



          </div>
          <div className='flex justify-between px-5'>
            <span className='text-letraP text-[11px] '>{nameprovider}</span>
            <span className='text-letraP text-[11px] '>{nameprovider}</span>

          </div>
        </header>

        <div className='pl-20 pt-20'>
          <div>
            <h1 className='text-2xl font-semibold'>Herramientas</h1>
          </div>
          <div className='mt-3'>
            <div className='grid grid-cols-4 gap-4'>
              {
                utilidades.map((utilidad) => {
                  return (
                    <CardTool key={utilidad.id} utilidad={utilidad} />

                  )
                })
              }

            </div>

          </div>
        </div>

      </div>



    </div>
  )
}

export default App
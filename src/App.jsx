import React from 'react'

const App = () => {
  return (
    <div className='h-screen bg-fondo'>
      <div>
        <header className='bg-negro h-[300px] pl-20 pt-20 flex flex-col'>
          <h1 className='text-letraG text-3xl '>Help Center</h1>
          <p className='text-letraP w-[800px] mt-5 text-[14px]'>Aqui encontrarás diversas utilidades y recursos diseñados para facilitar la gestión y optimización de redes informáticas. Estas herramientas abarcan desde programas de monitoreo y diagnóstico de red hasta aplicaciones para la configuración y seguridad de equipos interconectados.</p>
          
          {/* ip del cliente */}
          <div className='mt-5 flex flex-col justify-center items-center '>
            <h1 className='text-letraG text-4xl'>Tu ip es: 186.166.57.41</h1>
            <span className='text-letraP text-[11px] '>Mas detalles</span>
          </div>
        </header>

        <div className='pl-20 pt-20'>
          <div>
            <h1 className='text-2xl font-semibold'>Herramientas</h1>
          </div>
          <div className='mt-3'>
            Card

          </div>
        </div>

      </div>



    </div>
  )
}

export default App
import React, { useState } from 'react'
import { getVendor } from 'mac-oui-lookup';
import { Helmet } from "react-helmet";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from 'react-router-dom';

export const Macvendor = () => {
  const [data, setData] = useState()
  const [vendor, setVendor] = useState()
  const [inputValue, setInputValue] = useState('');
  const [showmac, setShowmac] = useState(false)


  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = () => {
    if (event.key === 'Enter') {
      // Llamar a la función con el valor guardado en el estado
      const vendor = getVendor(`${inputValue}`);
      //almacenamos el valor en un estado para luego mostrarlo en el frontend
      setVendor(vendor)

    }
  }

  /* console.log(vendor); // Output: VMware, Inc. */
  return (
    <div className="min-h-screen bg-fondo">
      <Helmet>
        <meta name="description" content="Mac Vendors | NetworkToolKit.com" />
        <meta name="rating" content="General" />
        <link rel="canonical" href="https://NetworkToolKit.vercel.app/" />
      </Helmet>
      <div className="pt-20 flex justify-center ">
        <div className="w-[1200px] h-[600px] bg-white p-3 rounded-2xl shadow-green-500 shadow-sm">
          <header className='flex items-center gap-2 '>
            <Link to={"/"}><FiArrowLeft size={28} className='text-gray-200' /></Link>

            <h1 className="text-3xl font-bold py-2">Mac Vendor</h1>
          </header>
          <hr />
          {/* content */}
          <div className="mt-10 mx-10">
            <div>
              <div className="">
                <div className='flex justify-center '>
                  <input type="text" placeholder='00:00:00:00:00:00' value={inputValue} onChange={handleChange} onKeyDown={handleKeyDown} className='px-2 py-2 text-[18px] rounded outline-none w-[300px] text-center bg-slate-100' />
                </div>

                {/* Mostrar datos */}

                <div className='mt-10 flex justify-center'>
                  <h1 className='text-2xl font-semibold'>{vendor}</h1>
                </div>




              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

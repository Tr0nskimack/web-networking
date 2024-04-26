import React from "react";
import { getVendor } from "mac-oui-lookup";
import { Helmet } from "react-helmet";
import { CardTool } from "../Components/CardTool";

export const Home = () => {
  
  const utilidades = [
    {
      nombre: "M Ip",
      categoria: "Redes",
      url: "/miip",
    },
    {
      nombre: "Mac Vendor",
      categoria: "Redes",
      url: "#",
    },
    {
      nombre: "Calculadora de Ip",
      categoria: "Redes",
      url: "#",
    },
    {
      nombre: "Subneteo de Mascara",
      categoria: "Redes",
      url: "#",
    },
    {
      nombre: "Tracert Ip",
      categoria: "Redes",
      url: "#",
    },
    {
      nombre: "Ip Scan",
      categoria: "Redes",
      url: "#",
    },
    {
      nombre: "Convertidor de Mac",
      categoria: "Redes",
      url: "#",
    },
    {
      nombre: "Red X",
      categoria: "Redes",
      url: "#",
    },
  ];

  const vendor = getVendor("DC:2C:6E:90:34:FA");
  console.log(vendor); // Output: VMware, Inc.

  

  return (
    <div className="min-h-screen bg-fondo">
      {/* div header */}
      {/* helmet */}

      

      <div className="pl-20 pt-20">
      <Helmet>
        <meta name="description" content="Home | NetworkToolKit.com" />
        <meta name="rating" content="General" />
        <link rel="canonical" href="https://NetworkToolKit.vercel.app/" />
      </Helmet>
        <div>
          <h1 className="text-2xl font-semibold">Herramientas</h1>
        </div>
        <div className="mt-3">
          <div className="grid grid-cols-4 gap-8">
            {utilidades.map((utilidad) => {
              return <CardTool key={utilidad.nombre} utilidad={utilidad} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
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
      url: "/macvendor",
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
      nombre: "Mac IPV4 a IPV6",
      categoria: "Redes",
      url: "#",
    },
    {
      nombre: "Converti",
      categoria: "Redes",
      url: "#",
    },
  ];
  return (
    <div className="min-h-screen bg-fondo">
      {/* div header */}
      <div className="pl-20 pt-20">
      {/* helmet */}
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

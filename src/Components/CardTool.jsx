import React from "react";
import { Link } from "react-router-dom";

export const CardTool = ({ utilidad }) => {
  const categories = [{ proveedor: "Network", valor: "#" }];
  return (
    <div>
      <Link to={utilidad.url}>
        <div className="bg-fondocard w-[260px] h-[140px] p-3 rounded-2xl shadow-green-500 shadow-sm cursor-pointer">
          <header>
            <h1 className="font-bold text-[20px]">{utilidad.nombre}</h1>
          </header>
          <div>
            <span className="border text-[12px] font-semibold px-1 rounded-md">
              {" "}
              share
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

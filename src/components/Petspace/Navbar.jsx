import React from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate= useNavigate()
  return (
    <nav className="flex items-center justify-between bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div onClick={() => navigate("/petspace")} className="flex items-center gap-2 cursor-pointer">
        <i className="fa-solid fa-paw text-blue-600 text-xl"></i>
        <h1 className="text-xl font-bold text-gray-800">PetSpace</h1>
      </div>
      <ul className="hidden sm:flex gap-6 text-gray-700 font-medium">
        <li href="#" className="hover:text-blue-600 transition-colors cursor-pointer">
          Inicio
        </li>
        <li href="#" className="hover:text-blue-600 transition-colors cursor-pointer">
          Productos
        </li>
        <li href="#" className="hover:text-blue-600 transition-colors cursor-pointer">
          Ofertas
        </li>
        <li href="#" className="hover:text-blue-600 transition-colors cursor-pointer">
          Contacto
        </li>
      </ul>
      <div className="flex gap-4 items-center">
        <i className="fa fa-shopping-cart text-gray-600 cursor-pointer" ></i>
        <span className="inline sm:hidden"><i className="fa-solid fa-bars"></i></span>
      </div>
    </nav>
  );
};

export default Navbar;

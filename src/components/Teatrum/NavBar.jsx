import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center h-20 w-full bg-white shadow">
      <p onClick={() => navigate("/teatrum")} className="flex italic text-sm sm:text-2xl font-semibold text-red-900 p-3 cursor-pointer">
        <i className="hidden sm:inline fa-solid fa-theater-masks text-orange-800"></i>Teatrum
      </p>

      <ul className="flex">
        <li className="cursor-pointer border-r-2 border-r-red-700 p-2 px-2 sm:px-5 text-xs sm:text-lg">
          <span className="">Calendario</span>
        </li>
        <li className="cursor-pointer border-r-2 border-r-red-700 p-2 px-2 sm:px-5 text-xs sm:text-lg">
          <span className="">Historia</span>
        </li>
        <li className="cursor-pointer p-2 px-2 sm:px-5 text-xs sm:text-lg">
          <span className="">Plano</span>
        </li>
      </ul>

      <div className="flex gap-2 p-2 truncate">
        <i className="fa-brands fa-facebook-f cursor-pointer"></i>
        <i className="fa-brands fa-instagram cursor-pointer"></i>
        <i className="fab fa-x-twitter cursor-pointer"></i>
      </div>
    </div>
  );
}

export default NavBar;

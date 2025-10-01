import React, { useState } from "react";
import logo1 from "../../assets/CreativeBox/logo3.jpeg";
import logo2 from "../../assets/CreativeBox/logo1.jpeg";
import fondo from "../../assets/CreativeBox/fondoPlan.jpeg";
import logo3 from "../../assets/CreativeBox/logoAI.jpeg";
import ProductoBox from "./ProductoBox";

function Plan() {
    const [openModal, setOpenModal] = useState(false);

  return (
    <div className="p-4 flex flex-col gap-2.5">
      <h1 className="text-3xl font-bold">Mis planes</h1>
      <hr />

      <div className="flex flex-col sm:flex-row bg-white p-3 gap-10">
        <ProductoBox
          nombre="CreativeBox Stock+AI"
          descripcion="Accede a millones de imágenes, videos 4k y HD, plantillas y mucho más sin derechos de autor, todo en el mismo plan."
          imagen={fondo}
          esPlan={true}
          
        />

        <div className="flex flex-col gap-5">
          <h2 className="text-lg font-semibold">Incluido en tu plan</h2>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-1">
              <img className="w-6 h-6 rounded-sm" src={logo1} alt="" />{" "}
              <p>Creativebox Blazewing</p>
            </li>
            <li className="flex items-center gap-1">
              <img className="w-6 h-6 rounded-sm" src={logo2} alt="" /> Imágenes de
              Creative Box
            </li>
            <li className="flex items-center gap-1">
              <img className="w-6 h-6 rounded-sm" src={logo3} alt="" /> Usos de la AI
              generativa
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Plan;

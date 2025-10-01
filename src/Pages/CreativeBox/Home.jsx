import React from "react";
import NavBar from "../../components/CreativeBox/NavBar";
import imagenFondo from "../../assets/CreativeBox/FondoPaisaje.jpg";
import Buscador from "../../components/CreativeBox/Buscador";
import ProductoBox from "../../components/CreativeBox/ProductoBox";
import fondo1 from "../../assets/CreativeBox/fondo1.jpeg";
import logo1 from "../../assets/CreativeBox/logo1.jpeg";
import fondo2 from "../../assets/CreativeBox/fondo2.jpeg";
import logo2 from "../../assets/CreativeBox/logo2.jpeg";
import fondo3 from "../../assets/CreativeBox/fondo3.jpg";
import logo3 from "../../assets/CreativeBox/logo3.jpeg";
import fondo4 from "../../assets/CreativeBox/fondo4.jpeg";

//TODO: Cambiar texto por traduccion

export function Home() {
  return (
    <div className="flex flex-col items-center gap-5 w-full bg-gray-100 h-screen">
      <NavBar />

      <div
        className="flex flex-col items-center gap-5 w-4/5 bg-cover bg-center p-8 pb-14 rounded-lg "
        style={{ backgroundImage: `url(${imagenFondo})` }}
      >
        <h1 className="text-2xl font-semibold">Crea algo nuevo</h1>
        <Buscador />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center w-4/5 gap-2">
        <ProductoBox imagen={fondo1} logo={logo1} nombre={"QuickCreatives"} descripcion={"Genera una nueva imagen  para añadirla a tu proyecto"} />
        <ProductoBox imagen={fondo2} logo={logo2} nombre={"Creative Fonts"} descripcion={"Encuentra la fuente perfecta que complemente tu diseño"}  />
        <ProductoBox imagen={fondo3} logo={logo3} nombre={"Creative Blazewing"} descripcion={"Genera gráficos vectoriales  a partir de una descripción detallada"}  />
        <ProductoBox imagen={fondo4} logo={logo1} nombre={"QuickCreatives"} descripcion={"Subtitula automáticamente tus vídeos en cualquier idioma"}  />
      </div>

    </div>
  );
}

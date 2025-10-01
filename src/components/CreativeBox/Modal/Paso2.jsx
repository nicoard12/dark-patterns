import React from "react";
import ProductoBox from "../ProductoBox";
import fondo1 from "../../../assets/CreativeBox/fondoPixelForge.jpeg";
import fondo2 from "../../../assets/CreativeBox/fondoFrameflow.jpeg";
import fondo3 from "../../../assets/CreativeBox/fondo1.jpeg";

//TODO: Cambiar texto por traduccion

function Paso2() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-md font-semibold">
        Antes de decidirte por cancelar, considera estas ofertas:
      </h1>

      <div className="flex flex-col md:flex-row gap-2 ">
        <ProductoBox
          nombre="Cambia a PixelForge y ahorra."
          descripcion={"Ahorra ya mismo cambiando a PixelForge desde tu plan actual de $25/mes.\nA partir de $20."}
          esPlan={true}
          esCambiarPlan={true}
          imagen={fondo1}
        />
        <ProductoBox
          nombre="Cambia a Frameflow y ahorra."
          descripcion={"Ahorra ya mismo cambiando a Frameflow desde tu plan actual de $25/mes.\nA partir de $18."}
          esPlan={true}
          esCambiarPlan={true}
          imagen={fondo2}
        />
        <ProductoBox
          nombre="Cambia a QuickCreatives y ahorra."
          descripcion={"Ahorra ya mismo cambiando a QuickCreatives desde tu plan actual de $25/mes.\nA partir de $15."}
          esPlan={true}
          esCambiarPlan={true}
          imagen={fondo3}
        />
      </div>
    </div>
  );
}

export default Paso2;

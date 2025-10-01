import React from "react";

//TODO: Cambiar texto por traduccion

function Paso3() {
  return (
    <div className="flex flex-col gap-4 sm:w-[500px]">
      <h1 className="text-lg font-semibold">
        Entre los detalles de cancelación se encuentran los siguientes:
      </h1>
      <div className="flex flex-col gap-2 ">
        <div>
            <h2 className="text-md font-semibold">Fecha del plan</h2>
            <p>Perderás acceso a tu plan inmediatamente.</p>
        </div>

        <div>
            <h2 className="text-md font-semibold">Aplicaciones</h2>
            <p>
            Ya no dispondrás de acceso a tus aplicaciones, ni a la mayoría de los
            servicios incluidos en tu plan de pago.
            </p>
        </div>
        <div>
            <h2 className="text-md font-semibold">Almacenamiento</h2>
            <p>
            El almacenamiento en la nube se reducirá a 5GB. Si se supera este
            límite, tendrás 90 días para limitar tu uso en línea o podrías perder
            el acceso a algunos o todos los archivos guardados.
            </p>
        </div>
      </div>
    </div>
  );
}

export default Paso3;

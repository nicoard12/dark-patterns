import React from "react";

function Plan({ selectedPlan, setSelectedPlan, plan }) {
  const select = () => {
    setSelectedPlan(plan.id);
  };
  return (
    <div
      onClick={select}
      className={`${
        selectedPlan == plan.id && "border-purple-400 bg-gray-200"
      } flex flex-col p-2 pb-6 border border-gray-300 rounded-lg shadow hover:shadow-md cursor-pointer gap-6`}
    >
      <div
        className={`bg-gradient-to-r ${
          plan.title == "Premium"
            ? "from-blue-800 via-puprle-600 to-red-600"
            : "from-blue-800 to-purple-600"
        }  p-3 rounded-lg text-white font-medium `}
      >
        <h3 className="text-lg">{plan.title}</h3>
        <div className="flex items-center justify-between">
          <p className="text-sm">{plan.subtitle}</p>
          {selectedPlan == plan.id && <i class="fa-solid fa-check-circle"></i>}
        </div>
      </div>

      <ul className="flex flex-col px-6 gap-3">
        <li>
          <p className="font-medium text-gray-600 text-sm">Precio mensual</p>
          <p className="font-medium text-gray-800 text-md">${plan.price}</p>
        </li>
        <hr />
        <li>
          <p className="font-medium text-gray-600 text-sm">Calidad de audio y video</p>
          <p className="font-medium text-gray-800 text-md">{plan.quality}</p>
        </li>
        <hr />
        <li>
          <p className="font-medium text-gray-600 text-sm">Resolución</p>
          <p className="font-medium text-gray-800 text-md">{plan.resolution}</p>
        </li>
        <hr />
        <li>
          <p className="font-medium text-gray-600 text-sm">Dispositivos compatibles</p>
          <p className="font-medium text-gray-800 text-md">TV, computadora, celular, tablet</p>
        </li>
        <hr />
        <li>
          <p className="font-medium text-gray-600 text-sm">
            Dispositivos del hogar en los que se puede ver Moviemax al mismo
            tiempo
          </p>
          <p className="font-medium text-gray-800 text-md">{plan.home_devices}</p>
        </li>
        <hr />
        <li>
          <p className="font-medium text-gray-600 text-sm">Dispositivos de descarga</p>
          <p className="font-medium text-gray-800 text-md">{plan.download_devices}</p>
        </li>
      </ul>
    </div>
  );
}

export default Plan;

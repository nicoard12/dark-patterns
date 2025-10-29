import React, { useState } from "react";
import Plan from "../../components/Moviemax/Plan";
import { useNavigate } from "react-router-dom";
import { plans } from "./plans";

function getPlanTitle(id) {
  return plans.find((p) => p.id == id).title
}

function PlanSelect() {
  const [seeAll, setSeeAllPlans] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(4);
  const navigate = useNavigate();
  return (
    <div>
      <div className="relative z-10 flex w-full justify-between items-center px-8 py-6">
        <h1
          onClick={() => navigate("/moviemax")}
          className="text-4xl font-bold text-purple-600 cursor-pointer"
        >
          MovieMax
        </h1>

        <button className="hover:bg-gray-300 px-3 py-1 rounded font-medium">
          Cerrar sesión
        </button>
      </div>
      <hr />

      <div className="flex flex-col items-center gap-6 p-8">
        <h2 className="font-medium text-2xl">
          Selecciona el plan ideal para ti
        </h2>

        <div className="flex gap-3 overflow-x-auto max-w-[350px] sm:max-w-[1000px]">
          {plans
            .filter((plan) => seeAll || plan.id !== 2)
            .map((plan) => (
              <Plan
                key={plan.id}
                plan={plan}
                selectedPlan={selectedPlan}
                setSelectedPlan={setSelectedPlan}
              />
            ))}
        </div>

        <div className="text-gray-600 text-sm flex flex-col gap-2">
          {!seeAll && <p>
            Quieres mas opciones?{" "}
            <span
              onClick={() => setSeeAllPlans(true)}
              className="font-medium text-blue-500 cursor-pointer hover:text-blue-600"
            >
              Ver todos los planes
            </span>
          </p>}
          <p>
            La disponibilidad del contenido en HD (720p), Full HD (1080p), Ultra
            HD (4K) y HDR depende de tu servicio de internet y del dispositivo
            en uso. No todo el contenido está disponible en todas las
            resoluciones. Consulta nuestros Términos de uso para obtener más
            información.
          </p>
        </div>

        <button
          onClick={() =>
            navigate(`/moviemax/checkout/${getPlanTitle(selectedPlan)}`)
          }
          className="mb-10 mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 
               text-white font-semibold text-2xl px-10 py-4 rounded-lg shadow-md transition-transform hover:scale-105"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default PlanSelect;

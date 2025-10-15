import React from "react";

function Modal({show, goToCheckout}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full text-center shadow-xl">
        <h2 className="text-lg font-bold mb-4">
          ¡Llegá al mínimo de compra de $50 y llevate snacks de regalo para tu
          mascota!
        </h2>
        <div className="flex flex-col gap-4 mt-6">
          <button
            onClick={() => show(false)}
            className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-xl"
          >
            Agregar otro producto
          </button>
          <button
            onClick={goToCheckout}
            className="w-full text-gray-800 px-6 py-3 rounded-xl text-lg font-medium border border-gray-300 hover:bg-gray-100 transition-all"
          >
            No, gracias… mi mascota se perderá los snacks 😿
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

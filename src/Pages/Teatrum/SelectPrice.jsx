import React, { useEffect, useState } from "react";
import NavBar from "../../components/Teatrum/NavBar";
import { Footer } from "../../components/Teatrum/Footer";
import { useParams } from "react-router-dom";
import { events } from "./events";

function getPriceForward(price) {
  const val = price * 1.6;
  const rounded = Math.ceil(val / 5) * 5;
  return rounded;
}

function getPriceBack(price) {
  const val = price * 0.7;
  const rounded = Math.ceil(val / 5) * 5;
  return rounded;
}

function SelectPrice() {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);
  const [location, setLocation] = useState("forward");
  const [total, setTotal] = useState(getPriceForward(event.price));
  const [amountSelected, setAmountSelected] = useState("1");

  useEffect(() => {
    if (location == "forward") {
      setTotal(getPriceForward(event.price) * amountSelected);
    } else if (location == "back") {
      setTotal(getPriceBack(event.price) * amountSelected);
    } else setTotal(event.price * amountSelected);
  }, [location, amountSelected]);

  return (
    <div>
      <NavBar />
      <div className="flex flex-col justify-center sm:flex-row p-5 gap-10 sm:gap-24">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold">Selecciona ubicacion</h1>
          <div className="flex flex-col gap-5">
            <div
              onClick={() => setLocation("forward")}
              className={`flex text-3xl justify-between w-[250px] sm:w-[300px] cursor-pointer ${
                location == "forward"
                  ? "border-2 border-gray-400 bg-gray-300 "
                  : "border border-gray-300"
              }  rounded shadow  p-3`}
            >
              <p>Adelante</p>
              <p>${getPriceForward(event.price)}</p>
            </div>
            <div
              onClick={() => setLocation("middle")}
              className={`flex text-3xl justify-between w-[250px]  sm:w-[300px] cursor-pointer ${
                location == "middle"
                  ? "border-2 border-gray-400 bg-gray-300 "
                  : "border border-gray-300"
              }  rounded shadow  p-3`}
            >
              <p>Medio</p>
              <p>${event.price}</p>
            </div>
            <div
              onClick={() => setLocation("back")}
              className={`flex text-3xl justify-between w-[250px] sm:w-[300px] cursor-pointer ${
                location == "back"
                  ? "border-2 border-gray-400 bg-gray-300 "
                  : "border border-gray-300"
              }  rounded shadow  p-3`}
            >
              <p>Atras</p>
              <p>${getPriceBack(event.price)}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold">
            Selecciona la cantidad de entradas
          </h1>

          <div className="border border-gray-300 shadow rounded p-3 flex flex-col items-center gap-5">
            <select
              name="amount"
              value={amountSelected}
              onChange={(e) => setAmountSelected(e.target.value)}
              className="cursor-pointer border border-gray-400 rounded w-1/2 pl-1"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-semibold">Total: ${total}</h2>
                <button className="bg-black hover:bg-black/90 text-white p-1.5 px-4 rounded font-semibold text-lg">
                  Comprar ahora
                </button>
              </div>

              <p>Cargo por servicio: $ {total * 0.10}</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SelectPrice;

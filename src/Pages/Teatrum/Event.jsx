import React from "react";
import { events } from "./events";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../../components/Teatrum/NavBar";
import { Footer } from "../../components/Teatrum/Footer";

function Event() {
  const { id } = useParams();
  const event = events.find((ev) => ev.id === id);
  const navigate= useNavigate()

  return (
    <div>
      <NavBar />
      <div className="flex flex-col sm:flex-row p-3 gap-5 border border-gray-300 m-5 rounded shadow">
        <div className="aspect-square flex items-center justify-center overflow-hidden rounded w-full sm:w-1/3 ">
          <img
            src={event.img}
            alt={`Imagen de : ${event.title}`}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex flex-col gap-5 justify-between items-end">
          <div className="flex flex-col gap-5">
            <h1 className="font-semibold text-2xl">{event.title}</h1>
            <p className="sm:w-1/2 text-1xl">{event.description}</p>
          </div>

          <div className="flex gap-3 items-center p-8">
            <p className="text-lg">
              {event.date}
            </p>

            <button onClick={() => navigate(`/teatrum/select-price/${event.id}`)} className="bg-black hover:bg-black/90 text-white p-1.5 px-4 rounded font-semibold text-lg">Comprar</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Event;

import React from "react";
import { events } from "./events";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../../components/Teatrum/NavBar";
import { Footer } from "../../components/Teatrum/Footer";
import { useTranslation } from "react-i18next";

function Event() {
  const { id } = useParams();
  const event = events.find((ev) => ev.id === id);
  const navigate= useNavigate()

  const { t } = useTranslation();

  return (
    <div>
      <NavBar />
      <div className="flex flex-col sm:flex-row p-3 gap-5 border border-red-800 m-5 rounded shadow">
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
            <p className="sm:w-1/2 text-1xl">{t(`Teatrum.Event.${event.id}.Description`)}</p>
          </div>

          <div className="flex gap-3 items-center p-8 border border-red-800 rounded">
            <p className="text-lg">
              {event.date}
            </p>

            <button onClick={() => navigate(`/teatrum/select-price/${event.id}`)} className="bg-black hover:bg-black/90 text-white p-1.5 px-4 rounded font-semibold text-lg">{t("Teatrum.Event.Buy")}</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Event;

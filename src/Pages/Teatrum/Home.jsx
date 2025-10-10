import React, { useState } from "react";
import NavBar from "../../components/Teatrum/NavBar";
import EventBox from "../../components/Teatrum/EventBox";
import { events } from "./events";
import Search from "../../components/Teatrum/Search";
import { Footer } from "../../components/Teatrum/Footer";
import { useTranslation } from "react-i18next";
import Banner from "../../assets/Teatrum/Banner.png";

export function Home() {
  const [eventsState, setEventsState] = useState(events);

  const { t } = useTranslation();
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center gap-10 ">
        <div
          className="flex justify-between items-center  w-full bg-cover bg-center px-4 py-40"
          style={{ backgroundImage: `url(${Banner})` }}
        >
          <i className="fa-solid fa-chevron-left text-gray-500 text-2xl cursor-pointer"></i>
          <Search events={events} setEventsState={setEventsState} />
          <i className="fa-solid fa-chevron-right text-gray-500 text-2xl cursor-pointer"></i>
        </div>
        {eventsState.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {eventsState.map((event) => (
              <EventBox key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center py-24">
            <p className="text-lg font-semibold">
              {t("Teatrum.Home.EmptyEvents")}
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

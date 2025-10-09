import React, { useState } from "react";
import NavBar from "../../components/Teatrum/NavBar";
import EventBox from "../../components/Teatrum/EventBox";
import { events } from "./events";
import Search from "../../components/Teatrum/Search";
import { Footer } from "../../components/Teatrum/Footer";
import { useTranslation } from "react-i18next";

export function Home() {
  const [eventsState, setEventsState] = useState(events);

  const { t } = useTranslation();
  return (
    <div >
      <NavBar />
      <div className="flex flex-col items-center gap-10 p-4">
        <Search events={events} setEventsState={setEventsState} />
        {eventsState.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {eventsState.map((event) => (
              <EventBox key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center py-24">
            <p className="text-lg font-semibold">{t("Teatrum.Home.EmptyEvents")}</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

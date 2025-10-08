import React from "react";
import NavBar from "../../components/Teatrum/NavBar";
import EventBox from "../../components/Teatrum/EventBox";
import { events } from "./events";
import Search from "../../components/Teatrum/Search";
import { Footer } from "../../components/Teatrum/Footer";

export function Home() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center gap-10 p-4">
        <Search />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {events.map((event) => (
            <EventBox key={event.id} event={event} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

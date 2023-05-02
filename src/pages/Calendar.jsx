import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { scheduleData } from "../data/dummy";
import { Header } from "../components";

const Calendarr = () => {
  const event = scheduleData.map((item) => {
    return item;
  });
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Calendar" />
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
        height="650px"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
        }}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        selectMirror={true}
        initialEvents={event}
      />
    </div>
  );
};

export default Calendarr;

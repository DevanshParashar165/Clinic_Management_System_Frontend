import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const events = [
  {
    id: "1",
    title: "Dr. Patel - Follow Up",
    start: "2026-07-02T10:00:00",
    end: "2026-07-02T10:30:00",
    color: "#60a5fa",
  },
  {
    id: "2",
    title: "Online Consultation",
    start: "2026-07-04T11:00:00",
    end: "2026-07-04T11:30:00",
    color: "#fbbf24",
  },
  {
    id: "3",
    title: "Walk-in Patient",
    start: "2026-07-17T09:30:00",
    end: "2026-07-17T10:00:00",
    color: "#34d399",
  },
  {
    id: "4",
    title: "Dr. Mehra - Checkup",
    start: "2026-07-24T02:00:00",
    end: "2026-07-24T02:45:00",
    color: "#a78bfa",
  },
  {
    id: "5",
    title: "Follow Up",
    start: "2026-07-22T04:00:00",
    end: "2026-07-22T04:30:00",
    color: "#60a5fa",
  },
];

function Calendar() {
  const handleDateClick = (info) => {
    alert(`Selected Date & Time: ${info.dateStr}`);
  };

  const handleEventClick = (info) => {
    alert(`Appointment: ${info.event.title}`);
  };

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            Appointments Calendar
          </h2>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-600">
            <span className="hidden sm:inline">Filter by</span>

            <select className="rounded-full bg-transparent text-sm outline-none">
              <option>Doctor</option>
              <option>Appointment Type</option>
            </select>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="rounded-2xl border border-gray-200">
        <FullCalendar
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
          ]}
          initialView="timeGridWeek"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          events={events}
          selectable={true}
          editable={true}
          nowIndicator={true}
          eventDisplay="block"
          dayMaxEvents={3}
          slotDuration="00:30:00"
          slotMinTime="09:00:00"
          slotMaxTime="18:00:00"
          height={650}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
        />
      </div>
    </div>
  );
}

export default Calendar;
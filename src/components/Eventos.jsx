import React, { useState, useEffect } from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import 'dayjs/locale/es';
import './Eventos.css';

// Configurar dayjs para usar el idioma español
dayjs.extend(localeData);
dayjs.locale('es');

const localizer = dayjsLocalizer(dayjs);

const Eventos = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetch('/src/Data/event.json')
      .then(response => response.json())
      .then(data => {
        // Parse dates to Date objects
        const parsedEvents = data.map(event => ({
          ...event,
          start: new Date(event.start),
          end: new Date(event.end),
        }));
        setEvents(parsedEvents);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  return (
    <>
      <header className="hero-calendar-image">
        <div className="hero-calendar-layer">
          <div className="hero-calendar-text">
            <h1>Calendario</h1>
            <h3>Eventos y cursos</h3>
          </div>
        </div>
      </header>
      <div className='container'>
        <div className='calendar-container'>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            onSelectEvent={handleSelectEvent}
            messages={{
              allDay: "Todo el día",
              previous: "Anterior",
              next: "Siguiente",
              today: "Hoy",
              month: "Mes",
              week: "Semana",
              day: "Día",
              agenda: "Agenda",
              date: "Fecha",
              time: "Hora",
              event: "Evento",
              noEventsInRange: "Sin eventos"
            }}
          />
        </div>
        <div className='event-container'>
          {selectedEvent ? (
            <>
              <h2>{selectedEvent.title}</h2>
              <p className='event-line'><span>Descripcion:</span> {selectedEvent.description}</p>
              <p><span>Fecha de inicio:</span> {dayjs(selectedEvent.start).format('DD/MM/YYYY')}</p>
              <p className='event-line'><span>Horario de inicio:</span> {dayjs(selectedEvent.start).format('HH:mm')}</p>
              <p><span>Fecha de finalizacion:</span> {dayjs(selectedEvent.end).format('DD/MM/YYYY HH:mm')}</p>
              <p className='event-line'><span>Horario de finalizacion:</span> {dayjs(selectedEvent.end).format('HH:mm')}</p>
            </>
          ) : (
            <p>Selecciona un evento del calendario para ver los detalles.</p>
          )}
        </div>
      </div>
    </>
  );
};


export default Eventos;

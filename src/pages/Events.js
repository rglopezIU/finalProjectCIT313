import React, { useEffect, useState } from "react";
import axios from "axios";

function Events() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "https://runsignup.com/Rest/races/"
        );

        setEvents(response.data.events || []);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchEvents();
  }, []);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Event List</h1>
      {events.length === 0 ? (
        <p>No events available.</p>
      ) : (
        <ul>
          {events.map((event) => (
            <li
              key={event.event_id}
              onClick={() => handleSelectEvent(event)}
              style={{
                cursor: "pointer",
                border: "1px solid #ccc",
                margin: "10px 0",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <h2>{event.name}</h2>
              <p>
                <strong>Details:</strong> {event.details}
              </p>
              <p>
                <strong>Start Time:</strong> {event.start_time}
              </p>
              <p>
                <strong>Type:</strong> {event.event_type}
              </p>
            </li>
          ))}
        </ul>
      )}

      {selectedEvent && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <h2>Selected Event</h2>
          <p>
            <strong>Name:</strong> {selectedEvent.name}
          </p>
          <p>
            <strong>Details:</strong> {selectedEvent.details}
          </p>
          <p>
            <strong>Start Time:</strong> {selectedEvent.start_time}
          </p>
          <p>
            <strong>Registration Opens:</strong> {selectedEvent.registration_opens}
          </p>
          <p>
            <strong>Type:</strong> {selectedEvent.event_type}
          </p>
          <p>
            <strong>Fee:</strong> {selectedEvent.registration_periods?.[0]?.race_fee || "N/A"}
          </p>
        </div>
      )}
    </div>
  );
}

export default Events;

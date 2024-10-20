import React from "react";

function EventList({ events }) {
  return (
    <div className="list">
      <h2>Event List</h2>
      <ul>
        {events.length > 0 ? (
          events.map((event, index) => (
            <li key={index}>
              {event.name} - {event.date}
            </li>
          ))
        ) : (
          <p>No events added yet.</p>
        )}
      </ul>
    </div>
  );
}

export default EventList;

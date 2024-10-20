import React, { useState } from "react";

function EventForm({ addEvent }) {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventName && eventDate) {
      addEvent({ name: eventName, date: eventDate });
      setEventName("");
      setEventDate("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Add Event</h2>
      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <input
        type="date"
        value={eventDate}
        onChange={(e) => setEventDate(e.target.value)}
      />
      <button type="submit">Add Event</button>
    </form>
  );
}

export default EventForm;
